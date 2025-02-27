import { useState, useEffect } from "react";

import { Link, Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Show({ auth, id }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/products/" + id)
            .then((data) => setProduct(data.data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Product Information Page
                    </h2>
                }
            >
                <Head title="Dashboard" />
                <div>
                    {product ? (
                        <>
                            <div className="py-6">
                                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                        <header>
                                            <h2 className="text-lg font-medium text-gray-900">
                                                Information
                                            </h2>
                                        </header>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 py-4">
                                            <div>
                                                <img
                                                    src={product.image}
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <div className="py-2">
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        Name
                                                    </div>
                                                    <div className="text-gray-500 dark:text-gray-400">
                                                        {product.name}
                                                    </div>
                                                </div>
                                                <div className="py-2">
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        Description
                                                    </div>
                                                    <div className="text-gray-500 dark:text-gray-400">
                                                        {product.description}
                                                    </div>
                                                </div>
                                                <div className="py-2">
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        Price
                                                    </div>
                                                    <div className="text-gray-500 dark:text-gray-400">
                                                        {product.price} €
                                                    </div>
                                                </div>
                                                <div className="py-2">
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        Stock
                                                    </div>
                                                    <div className="text-gray-500 dark:text-gray-400">
                                                        {product.stock}
                                                    </div>
                                                </div>
                                                <div className="py-2">
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        Rank
                                                    </div>
                                                    <div className="text-gray-500 dark:text-gray-400">
                                                        {product.rank}
                                                    </div>
                                                </div>
                                                <div className="py-2">
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        ID
                                                    </div>
                                                    <div className="text-gray-500 dark:text-gray-400">
                                                        {product.id}
                                                    </div>
                                                </div>
                                                <div className="py-2">
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        Created At
                                                    </div>
                                                    <div className="text-gray-500 dark:text-gray-400">
                                                        {product.created_at.slice(
                                                            0,
                                                            10
                                                        )}{" "}
                                                        {product.created_at.slice(
                                                            11,
                                                            19
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="py-2">
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        Updated At
                                                    </div>
                                                    <div className="text-gray-500 dark:text-gray-400">
                                                        {product.updated_at.slice(
                                                            0,
                                                            10
                                                        )}{" "}
                                                        {product.updated_at.slice(
                                                            11,
                                                            19
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>tak</>
                    )}
                </div>
            </AuthenticatedLayout>
        </>
    );
}
