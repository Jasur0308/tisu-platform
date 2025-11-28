import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import langReducer from "./langSlice";
import authReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
        lang: langReducer,
    },
});