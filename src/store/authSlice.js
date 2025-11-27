import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/base";

// LOGIN
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, thunkAPI) => {
        try {
            const res = await api.post("/auth/login", credentials);

            localStorage.setItem("token", res.data.token);

            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || "Login failed"
            );
        }
    }
);

// GET PROFILE
export const fetchProfile = createAsyncThunk(
    "auth/fetchProfile",
    async (_, thunkAPI) => {
        try {
            const res = await api.get("/auth/me");
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || "Failed to load profile"
            );
        }
    }
);

// LOGOUT
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    localStorage.removeItem("token");
    return true;
});

// SLICE
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
        isAuth: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            // LOGIN
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user; // backend dataga qarab
                state.isAuth = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isAuth = false;
            })

            // FETCH PROFILE
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuth = true;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuth = false;
                state.error = action.payload;
            })

            // LOGOUT
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuth = false;
            });
    },
});

export default authSlice.reducer;