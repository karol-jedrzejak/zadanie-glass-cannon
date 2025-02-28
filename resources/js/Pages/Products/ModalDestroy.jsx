import ButtonStandard from "@/Components/ButtonStandard";
import Modal from "@/Components/Modal";
import React from "react";
import { router } from "@inertiajs/react";

import axios from "axios";

export default function ModalDestroy({
    deletionTarget,
    showModal,
    setShowModal,
    getProducts,
}) {
    const closeModal = () => {
        setShowModal(false);
    };

    // Functions
    const destroy = (e) => {
        e.preventDefault();
        router.delete(route("api.products.destroy", deletionTarget));
        getProducts();
        /*         axios
            .get("http://127.0.0.1:8000/api/products")
            .then((data) => setProducts(data.data))
            .catch((error) => console.log(error)); */
        closeModal();
    };

    return (
        <>
            <Modal show={showModal} onClose={closeModal}>
                <form onSubmit={destroy} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Confirm
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Are you sure you want to delete this product ?
                    </p>

                    <div className="mt-6 flex justify-end">
                        <ButtonStandard btn_style="danger" type="submit">
                            Delete
                        </ButtonStandard>
                        <ButtonStandard className="ms-3" onClick={closeModal}>
                            Cancel
                        </ButtonStandard>
                    </div>
                </form>
            </Modal>
        </>
    );
}
