import React from 'react'
import { useTranslation } from "react-i18next";
export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            <div className="min-h-screen dark:bg-gray-800 bg-gray-100 flex flex-col justify-between">

                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight drop-shadow-sm dark:text-white">
                        {t("homeTitle")}
                    </h1>
                    <p className="mt-5 text-lg text-gray-700 max-w-xl dark:text-white">
                        {t("homeText")}
                    </p>

                    <a
                        href="/login"
                        className="mt-8 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-2xl shadow-lg
                    hover:bg-blue-700 hover:shadow-xl active:scale-95 transition-all"
                    >
                        {t("homeLink")}
                    </a>
                </section>

                {/* Features Section */}
                {/* <section className="px-6 pb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-white">
                        What We Offer
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

                        <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Access</h3>
                            <p className="text-gray-700 text-sm">
                                Log in quickly as Admin, Staff, User or Author with secure authentication.
                            </p>
                        </div>

                        <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Content Management</h3>
                            <p className="text-gray-700 text-sm">
                                Create, manage, and publish articles and resources with ease.
                            </p>
                        </div>

                        <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Platform</h3>
                            <p className="text-gray-700 text-sm">
                                Your data is protected with modern security standards and safe login sessions.
                            </p>
                        </div>
                    </div>
                </section> */}

                {/* Footer */}
                <footer className="bg-white/60 backdrop-blur-xl border-t border-white/40 py-6 mt-20 text-center text-gray-700 text-sm dark:bg-gray-900 dark:text-white">
                    {t("footerText")}
                </footer>

            </div>
        </>
    );
}