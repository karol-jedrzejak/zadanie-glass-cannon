import axios from "axios";
import { useState, useEffect } from "react";

import { Link, Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//Components
import Table from "@/Components/Table";
import ButtonStandard from "@/Components/ButtonStandard";

// Icons
import IconShow from "@/Icons/IconShow";
import IconEdit from "@/Icons/IconEdit";
import IconDelete from "@/Icons/IconDelete";

// Modal Destroy
import ModalDestroy from "@/Pages/Products/ModalDestroy";

export default function Index({ auth }) {
    const [products, setProducts] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [currentTarget, setCurrentTarget] = useState(null);
    const [deletionModal, setDeletionModal] = useState(false);

    function getProducts() {
        axios
            .get("http://127.0.0.1:8000/api/products")
            .then((data) => setProducts(data.data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getProducts();
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Tables
    const searchitemsPc = ["name", "description"];
    const searchitemsMobile = ["name"];

    const columnsPc = [
        {
            id: 1,
            variable: "id",
            text: "id",
            sortable: true,
        },
        {
            id: 2,
            variable: "name",
            text: "name",
            sortable: true,
        },
        {
            id: 3,
            variable: "description",
            text: "description",
            sortable: true,
        },
        {
            id: 4,
            variable: "price",
            text: "price",
            sortable: true,
        },
        {
            id: 5,
            variable: "stock",
            text: "stock",
            sortable: true,
        },
        {
            id: 6,
            variable: "rank",
            text: "rank",
            sortable: true,
        },
        {
            id: 7,
            variable: "image",
            text: "image",
            sortable: false,
        },
    ];
    const columnsMobile = [
        {
            id: 1,
            variable: "id",
            text: "id",
            sortable: true,
        },
        {
            id: 2,
            variable: "name",
            text: "name",
            sortable: true,
        },
        {
            id: 3,
            variable: "stock",
            text: "stock",
            sortable: true,
        },
        {
            id: 4,
            variable: "rank",
            text: "rank",
            sortable: true,
        },
        {
            id: 5,
            variable: "image",
            text: "image",
            sortable: false,
        },
    ];

    function rowLayoutPc(item) {
        return (
            <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.price} €</td>
                <td className="px-4 py-2">{item.stock}</td>
                <td className="px-4 py-2">{item.rank}</td>
                <td className="px-4 py-2">
                    <img src={item.image} alt="" />
                </td>

                {auth.user ? (
                    <>
                        <td className="px-4 py-2 md:whitespace-nowrap w-px">
                            <ButtonStandard
                                className="m-1"
                                btn_style="green"
                                target_id={item.id}
                                tabIndex="-1"
                                onClick={resolveShow}
                            >
                                <IconShow></IconShow>
                            </ButtonStandard>
                            <ButtonStandard
                                className="m-1"
                                target_id={item.id}
                                tabIndex="-1"
                                onClick={resolveEdit}
                            >
                                <IconEdit></IconEdit>
                            </ButtonStandard>
                            <ButtonStandard
                                className="m-1"
                                btn_style="red"
                                target_id={item.id}
                                tabIndex="-1"
                                onClick={resolveDelete}
                            >
                                <IconDelete></IconDelete>
                            </ButtonStandard>{" "}
                        </td>
                    </>
                ) : (
                    <></>
                )}
            </tr>
        );
    }

    function rowLayoutMobile(item) {
        return (
            <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
                <td className="px-1 py-2">{item.id}</td>
                <td className="px-1 py-2">{item.name}</td>
                <td className="px-1 py-2">{item.stock}</td>
                <td className="px-1 py-2">{item.rank}</td>
                <td className="px-1 py-2">
                    <img src={item.image} alt="" />
                </td>

                {auth.user ? (
                    <>
                        <td className="px-1 py-2 md:whitespace-nowrap w-px">
                            <ButtonStandard
                                className="m-1"
                                btn_style="green"
                                target_id={item.id}
                                tabIndex="-1"
                                onClick={resolveShow}
                            >
                                <IconShow></IconShow>
                            </ButtonStandard>
                            <ButtonStandard
                                className="m-1"
                                target_id={item.id}
                                tabIndex="-1"
                                onClick={resolveEdit}
                            >
                                <IconEdit></IconEdit>
                            </ButtonStandard>
                            <ButtonStandard
                                className="m-1"
                                btn_style="red"
                                target_id={item.id}
                                tabIndex="-1"
                                onClick={resolveDelete}
                            >
                                <IconDelete></IconDelete>
                            </ButtonStandard>
                        </td>
                    </>
                ) : (
                    <></>
                )}
            </tr>
        );
    }

    // Deletion Modal
    function resolveDelete(e) {
        setCurrentTarget(e.currentTarget.getAttribute("target_id"));
        setDeletionModal(true);
    }

    // CRUD links
    function resolveCreate() {
        window.open(route("products.create"), "_self");
    }
    function resolveShow(e) {
        window.open(
            route("products.show", e.currentTarget.getAttribute("target_id")),
            "_self"
        );
    }
    function resolveEdit(e) {
        window.open(
            route("products.edit", e.currentTarget.getAttribute("target_id")),
            "_self"
        );
    }

    return (
        <>
            {auth.user ? (
                <>
                    <AuthenticatedLayout
                        user={auth.user}
                        header={
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                Products List
                            </h2>
                        }
                    >
                        <Head title="Products" />

                        {/* ---------------- Delete Modal ---------------- */}
                        <>
                            {deletionModal ? (
                                <ModalDestroy
                                    getProducts={getProducts}
                                    showModal={deletionModal}
                                    setShowModal={setDeletionModal}
                                    deletionTarget={currentTarget}
                                ></ModalDestroy>
                            ) : (
                                <></>
                            )}
                        </>

                        {/* ---------------- Tables ----------------  */}
                        {products ? (
                            <>
                                {windowWidth > 768 ? (
                                    <Table
                                        buttons={true}
                                        addButton={resolveCreate}
                                        defaultSort="id"
                                        defaultSortDirection="desc"
                                        items={products}
                                        searchitems={searchitemsPc}
                                        columns={columnsPc}
                                        rowLayout={rowLayoutPc}
                                    />
                                ) : (
                                    <Table
                                        buttons={true}
                                        addButton={resolveCreate}
                                        defaultSort="id"
                                        defaultSortDirection="desc"
                                        items={products}
                                        searchitems={searchitemsMobile}
                                        columns={columnsMobile}
                                        rowLayout={rowLayoutMobile}
                                    />
                                )}
                            </>
                        ) : (
                            <div>LOADING</div>
                        )}
                    </AuthenticatedLayout>
                </>
            ) : (
                <>
                    <Head title="Products" />
                    <div className="relative min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                        <div className="p-6 text-end">
                            <Link
                                href={route("products.index")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Products
                            </Link>

                            <Link
                                href={route("login")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </div>

                        <div className="flex flex-col items-center">
                            {products ? (
                                <>
                                    {windowWidth > 768 ? (
                                        <Table
                                            buttons={false}
                                            defaultSort="id"
                                            defaultSortDirection="desc"
                                            items={products}
                                            searchitems={searchitemsPc}
                                            columns={columnsPc}
                                            rowLayout={rowLayoutPc}
                                        />
                                    ) : (
                                        <Table
                                            buttons={false}
                                            defaultSort="id"
                                            defaultSortDirection="desc"
                                            items={products}
                                            searchitems={searchitemsMobile}
                                            columns={columnsMobile}
                                            rowLayout={rowLayoutMobile}
                                        />
                                    )}
                                </>
                            ) : (
                                <div>LOADING</div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
