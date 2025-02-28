import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ButtonStandard from "@/Components/ButtonStandard";
import BadgeTable from "@/Components/BadgeTable";
import Table from "@/Components/Table";
import React from "react";
import { useState, useRef } from "react";

import Message from "@/Components/Message";

import ModalChange from "@/Pages/Tasklists/ModalChange";
import ModalDestroy from "@/Pages/Tasklists/ModalDestroy";

export default function Index({ auth, items, importance_types, new_item }) {
    const [currentTarget, setCurrentTarget] = useState(new_item);

    // Message
    const [messageShow, setMessageShow] = useState(false);
    const [messageColor, setMessageColor] = useState("");
    const [messageText, setMessageText] = useState("");

    const timeoutRef = useRef();

    function changeMessage(message) {
        timeoutRef.current && clearTimeout(timeoutRef.current);
        setMessageColor(message.color);
        setMessageText(message.text);
        setMessageShow(true);
        timeoutRef.current = setTimeout(() => setMessageShow(false), 3000);
    }

    // Add
    const [addModal, setAddModal] = useState(false);

    function confirmAdd() {
        setAddModal(true);
    }

    // Edit
    const [editModal, setEditModal] = useState(false);

    function confirmEdit(e) {
        setCurrentTarget(
            items.find(
                (item) => item.id == e.currentTarget.getAttribute("target_id")
            )
        );
        setEditModal(true);
    }

    // Deletion
    const [deletionModal, setDeletionModal] = useState(false);

    function confirmDeletion(e) {
        setCurrentTarget(
            items.find(
                (item) => item.id == e.currentTarget.getAttribute("target_id")
            )
        );
        setDeletionModal(true);
    }

    // Tables
    const searchitems = ["description", "importance"];
    const columns = [
        {
            id: 1,
            variable: "id",
            text: "id",
            sortable: true,
        },
        {
            id: 2,
            variable: "description",
            text: "description",
            sortable: true,
        },
        {
            id: 3,
            variable: "importance",
            text: "importance",
            sortable: true,
        },
    ];

    function rowLayout(item) {
        return (
            <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2 text-center">
                    <BadgeTable bdg_style={item.importance}>
                        {item.importance}
                    </BadgeTable>
                </td>
                <td className="px-4 py-2 whitespace-nowrap w-px">
                    <ButtonStandard
                        className="mx-2"
                        target_id={item.id}
                        tabIndex="-1"
                        onClick={confirmEdit}
                    >
                        Edit
                    </ButtonStandard>
                    <ButtonStandard
                        btn_style="danger"
                        className="mx-2"
                        target_id={item.id}
                        tabIndex="-1"
                        onClick={confirmDeletion}
                    >
                        Delete
                    </ButtonStandard>
                </td>
            </tr>
        );
    }

    // View
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    TASKLIST
                </h2>
            }
        >
            <Head title="Tasklists" />

            {/* ---------------- Message ---------------- */}
            {messageShow ? (
                <Message color={messageColor} message={messageText} />
            ) : (
                <></>
            )}

            {/* ---------------- Add ---------------- */}

            <>
                {addModal ? (
                    <ModalChange
                        showModal={addModal}
                        setShowModal={setAddModal}
                        changeMessage={changeMessage}
                        importance_types={importance_types}
                        item={new_item}
                        mode="add"
                    ></ModalChange>
                ) : (
                    <></>
                )}
            </>

            {/* ---------------- Edit ---------------- */}
            <>
                {editModal ? (
                    <ModalChange
                        showModal={editModal}
                        setShowModal={setEditModal}
                        changeMessage={changeMessage}
                        importance_types={importance_types}
                        item={currentTarget}
                        mode="edit"
                    ></ModalChange>
                ) : (
                    <></>
                )}
            </>

            {/* ---------------- Delete ---------------- */}
            <>
                {deletionModal ? (
                    <ModalDestroy
                        showModal={deletionModal}
                        setShowModal={setDeletionModal}
                        deletionTarget={currentTarget}
                        changeMessage={changeMessage}
                    ></ModalDestroy>
                ) : (
                    <></>
                )}
            </>

            {/* ---------------- Table ---------------- */}
            <Table
                addButton={confirmAdd}
                defaultSort="description"
                defaultSortDirection="asc"
                items={items}
                searchitems={searchitems}
                columns={columns}
                rowLayout={rowLayout}
            />
        </AuthenticatedLayout>
    );
}
