import axios from "axios";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Link, Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import ButtonStandard from "@/Components/ButtonStandard";

import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function Edit({ auth, id }) {
    const [item, setItem] = useState({});

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/products/" + id)
            .then((recivedData) => setData(recivedData.data))
            .catch((error) => console.log(error));
    }, []);

    const nameInput = useRef();
    const descriptionInput = useRef();
    const priceInput = useRef();
    const stockInput = useRef();
    const rankInput = useRef();
    const imageInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        name: item.name,
        description: item.description,
        price: item.price,
        stock: item.stock,
        rank: item.rank,
        image: item.image,
    });

    const change = (e) => {
        e.preventDefault();
        put(route("api.products.update", id), {
            preserveScroll: true,
            onSuccess: () => {
                window.open(route("products.index"), "_self");
            },
            onError: (errors) => {
                if (errors.name) {
                    reset("name");
                    nameInput.current.focus();
                }
                if (errors.description) {
                    reset("description");
                    descriptionInput.current.focus();
                }
                if (errors.price) {
                    reset("price");
                    priceInput.current.focus();
                }
                if (errors.stock) {
                    reset("stock");
                    stockInput.current.focus();
                }
                if (errors.rank) {
                    reset("rank");
                    rankInput.current.focus();
                }
                if (errors.image) {
                    reset("image");
                    imageInput.current.focus();
                }
            },
        });
    };

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit Product
                    </h2>
                }
            >
                <Head title="Edit Product" />
                {item.name != "" ? (
                    <>
                        <div className="flex flex-col justify-center items-center w-full">
                            <form
                                onSubmit={change}
                                className="p-6 grid grid-cols-2 gap-1 w-full md:w-4/5"
                            >
                                <h2 className="text-lg font-medium text-gray-900 col-span-2">
                                    Edit Item
                                </h2>

                                <hr className="h-px mt-2 mb-6 bg-gray-200 border-0 dark:bg-gray-700 col-span-2" />

                                {/* name */}
                                <div className="mt-2 col-span-2">
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        name="name"
                                        ref={nameInput}
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="mt-2 block w-full"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                {/* description */}
                                <div className="mt-2 col-span-2">
                                    <InputLabel
                                        htmlFor="description"
                                        value="Description"
                                    />
                                    <TextInput
                                        id="description"
                                        name="description"
                                        ref={descriptionInput}
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        className="mt-2 block w-full"
                                    />
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>

                                {/* price */}
                                <div className="mt-2 col-span-2">
                                    <InputLabel htmlFor="price" value="Price" />
                                    <TextInput
                                        id="price"
                                        name="price"
                                        ref={priceInput}
                                        value={data.price}
                                        onChange={(e) =>
                                            setData("price", e.target.value)
                                        }
                                        className="mt-2 block w-full"
                                    />
                                    <InputError
                                        message={errors.price}
                                        className="mt-2"
                                    />
                                </div>

                                {/* stock */}
                                <div className="mt-2 col-span-2">
                                    <InputLabel htmlFor="stock" value="Stock" />
                                    <TextInput
                                        id="stock"
                                        name="stock"
                                        ref={stockInput}
                                        value={data.stock}
                                        onChange={(e) =>
                                            setData("stock", e.target.value)
                                        }
                                        className="mt-2 block w-full"
                                    />
                                    <InputError
                                        message={errors.stock}
                                        className="mt-2"
                                    />
                                </div>

                                {/* rank */}
                                <div className="mt-2 col-span-2">
                                    <InputLabel htmlFor="rank" value="Rank" />
                                    <TextInput
                                        id="rank"
                                        name="rank"
                                        ref={rankInput}
                                        value={data.rank}
                                        onChange={(e) =>
                                            setData("rank", e.target.value)
                                        }
                                        className="mt-2 block w-full"
                                    />
                                    <InputError
                                        message={errors.rank}
                                        className="mt-2"
                                    />
                                </div>

                                {/* image */}
                                <div className="mt-2 col-span-2">
                                    <InputLabel htmlFor="image" value="Image" />
                                    <TextInput
                                        id="image"
                                        name="image"
                                        ref={imageInput}
                                        value={data.image}
                                        onChange={(e) =>
                                            setData("image", e.target.value)
                                        }
                                        className="mt-2 block w-full"
                                    />
                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="col-span-2 mt-6 flex justify-end">
                                    <ButtonStandard
                                        btn_style="green"
                                        disabled={processing}
                                        type="submit"
                                    >
                                        Update
                                    </ButtonStandard>
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </AuthenticatedLayout>
        </>
    );
}
