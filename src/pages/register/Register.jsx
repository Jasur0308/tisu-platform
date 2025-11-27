import React from "react";
import { useState } from "react";
import { registerUser } from "../../api/auth";
import { useTranslation } from "react-i18next";

export default function AuthorRegister() {
    const {t} = useTranslation();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        middleName: "",
        email: "",
        department: "",
        hemIS: "",
        orcid: "",
        rorId: "",
    });

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            await registerUser(form);
            setSuccess("Registration successful!");
        } catch (err) {
            setError(err.response?.data?.message || "Error occurred");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-10 border border-white/40 mt-20">

                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 tracking-tight">
                    Author Registration
                </h1>

                {error && <div className="mb-5 p-3 text-red-700 bg-red-100 border border-red-300 rounded-lg">{error}</div>}
                {success && <div className="mb-5 p-3 text-green-700 bg-green-100 border border-green-300 rounded-lg">{success}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="text-sm font-semibold text-gray-700">{t("firstName")} *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                required
                                placeholder="John"
                                className="mt-1 w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-300 outline-none"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-semibold text-gray-700">{t("lastName")} *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                required
                                placeholder="Doe"
                                className="mt-1 w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-300 outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="text-sm font-semibold text-gray-700">{t("middleName")}</label>
                            <input
                                type="text"
                                name="middleName"
                                value={form.middleName}
                                onChange={handleChange}
                                placeholder="Smith (Optional)"
                                className="mt-1 w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-300 outline-none"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-semibold text-gray-700">{t("email")} *</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="you@university.com"
                                className="mt-1 w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-300 outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="text-sm font-semibold text-gray-700">{t("department")}</label>
                            <select
                                name="department"
                                value={form.department}
                                onChange={handleChange}
                                className="mt-1 w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-300 outline-none"
                            >
                                <option value="">{t("selectDepartment")}</option>
                                <option value="CS">Computer Science</option>
                                <option value="Math">Mathematics</option>
                                <option value="Physics">Physics</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-semibold text-gray-700">HEMIS ID</label>
                            <input
                                type="text"
                                name="hemIS"
                                value={form.hemIS}
                                onChange={handleChange}
                                placeholder="e.g., U1812345 (Optional)"
                                className="mt-1 w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-300 outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="text-sm font-semibold text-gray-700">ORCID</label>
                            <input
                                type="text"
                                name="orcid"
                                value={form.orcid}
                                onChange={handleChange}
                                placeholder="0000-0000-0000-0000 (Optional)"
                                className="mt-1 w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-300 outline-none"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-semibold text-gray-700">ROR ID *</label>
                            <input
                                type="text"
                                name="rorId"
                                value={form.rorId}
                                onChange={handleChange}
                                required
                                placeholder="01tts0094"
                                className="mt-1 w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-300 outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all"
                    >
                        {t("register")}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-700">
                    Already have an account?
                    <a href="/login" className="ml-1 text-blue-600 font-semibold hover:underline">
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    );
}