import { useState } from "react";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login() {
    const { t } = useTranslation();
    const [form, setForm] = useState(
        {
            username: "",
            password: ""
        });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await loginUser(form);
            console.log("Login response:", res);

            localStorage.setItem("token", res.data.token);
            console.log("Token saved:", res.data.token);
            navigate("/profile");

        } catch (err) {
            console.error("Login error:", err.response?.data?.message || err);
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-10 border border-white/40">

                {/* Title */}
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
                    {t("signIn")}
                </h1>

                {error && (
                    <div className="mb-5 bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg text-sm font-medium">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="text-sm font-semibold text-gray-700">
                            {t("signUsername")}
                        </label>
                        <input
                            id="username"
                            name="username"
                            onChange={handleChange}
                            value={form.username}
                            required
                            type="text"
                            placeholder={t("signUsernamePlaceholder")}
                            className="mt-2 w-full px-4 py-3 border rounded-xl bg-white/50 border-gray-300 shadow-sm
                          focus:border-blue-600 focus:ring-2 focus:ring-blue-300 outline-none transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                            {t("signPassword")}
                        </label>
                        <input
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={form.password}
                            required
                            type="password"
                            placeholder={t("signPasswordPlaceholder")}
                            className="mt-2 w-full px-4 py-3 border rounded-xl bg-white/50 border-gray-300 shadow-sm
                         focus:border-blue-600 focus:ring-2 focus:ring-blue-300 outline-none transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg
                       hover:bg-blue-700 hover:shadow-xl active:scale-[0.97] transition-all"
                    >
                        {t("signInButton")}
                    </button>
                </form>

                {/* Bottom */}
                <div className="mt-8 pt-5 text-center border-t text-sm text-gray-700 border-gray-200">
                    <p>
                        {t("signInBottomText")}
                        <a
                            href="/register"
                            className="ml-1 font-semibold text-blue-600 hover:text-blue-700 hover:underline transition"
                        >
                            {t("signInBottomLink")}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}