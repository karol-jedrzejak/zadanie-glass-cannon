import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <>
                            <Link
                                href={route("products.index")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Products
                            </Link>
                            <Link
                                href={route("dashboard")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-slate-900 my-2 p-6 rounded-lg">
                        <img
                            className="w-[200px]"
                            src="https://glasscannonunplugged.com/wp-content/uploads/2022/04/GCU-logo-light-2.svg"
                            alt=""
                        />
                    </div>
                    <div className="bg-slate-900 my-2 p-6 rounded-lg max-w-[200px]">
                        <img
                            className=""
                            src="https://karol-jedrzejak.github.io/static/media/portret_mobile_1.ff3e0a9ef1bd363dc688.jpg"
                            alt=""
                        />
                    </div>
                    <div className="bg-slate-200 my-2 p-6 rounded-lg">
                        Welcome to GlassCannon products example app created for
                        recruitment process app by Karol Jędrzejak.
                    </div>
                </div>
            </div>
        </>
    );
}
