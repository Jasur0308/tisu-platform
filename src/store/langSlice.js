import { createSlice } from "@reduxjs/toolkit";

const initialLang = localStorage.getItem("lang") || "en";

const langSlice = createSlice({
    name: "lang",
    initialState: {
        value: initialLang,
    },
    reducers: {
        changeLang(state, action) {
            state.value = action.payload;
            localStorage.setItem("lang", action.payload);
        },
    },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;