import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import { changeLang } from "../../store/langSlice";
import { useTranslation } from "react-i18next";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const lang = useSelector((state) => state.lang.value);
    const { mode } = useSelector((state) => state.theme);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const hideLogin = location.pathname === "/login" || location.pathname === "/register";

    const handleLang = (v) => {
        dispatch(changeLang(v));
        i18n.changeLanguage(v);
    };

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-sm dark:bg-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white"
                >
                    TISU<span className="text-blue-600">.uz</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 font-medium">

                    {/* Languages */}
                    <li>
                        <select
                            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white cursor-pointer focus:outline-none"
                            value={lang}
                            onChange={(e) => handleLang(e.target.value)}
                        >
                            <option value="en">EN</option>
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                        </select>
                    </li>

                    {/* Dark/Light mode */}
                    <li>
                        <button
                            onClick={() => dispatch(toggleTheme())}
                            className="
                                w-11 h-11 flex items-center justify-center
                                rounded-full bg-gray-200 dark:bg-gray-700
                                shadow cursor-pointer hover:scale-110
                                transition-all duration-300
                            "
                        >
                            {mode === "light" ? (
                                <SunIcon className="w-6 h-6 text-yellow-500" />
                            ) : (
                                <MoonIcon className="w-6 h-6 text-gray-200" />
                            )}
                        </button>
                    </li>

                    {/* Login Button */}
                    <li>
                        {!hideLogin && (
                            <li>
                                <Link
                                    to="/login"
                                    className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
                                >
                                    {t("login")}
                                </Link>
                            </li>
                        )}
                    </li>
                </ul>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-800 dark:text-white"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white/80 dark:bg-gray-800 backdrop-blur-xl shadow-lg border-b border-white/40">
                    <ul className="flex flex-col space-y-4 py-6 px-6 text-lg font-medium">

                        {/* Mobile Lang */}
                        <li>
                            <select
                                className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded text-black dark:text-white"
                                value={lang}
                                onChange={(e) => handleLang(e.target.value)}
                            >
                                <option value="en">EN</option>
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                            </select>
                        </li>

                        {/* Mobile Theme */}
                        <li>
                            <button
                                onClick={() => dispatch(toggleTheme())}
                                className="w-full py-3 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center gap-2"
                            >
                                {mode === "light" ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-gray-200" />}
                                <span>{mode === "light" ? "Light Mode" : "Dark Mode"}</span>
                            </button>
                        </li>

                        {/* Login */}
                        <li>
                            {!hideLogin && (
                                <Link
                                    to="/login"
                                    onClick={() => setOpen(false)}
                                    className="w-full px-6 py-3 bg-blue-600 text-white text-center rounded-xl hover:bg-blue-700 transition shadow-md"
                                >
                                    {t("login")}
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}