import { useState, useEffect } from "react";

export const useLanguage = () => {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem("lang") || "uz";
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const toggleLang = () => {
        setLang((prev) => (prev === "uz" ? "ru" : "uz"));
    };

    return { lang, setLang, toggleLang };
};