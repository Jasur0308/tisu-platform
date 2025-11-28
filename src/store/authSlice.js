// store/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/base";

// REGISTER (Create user)
export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (userData, thunkAPI) => {
        try {
            const res = await api.post("/user", userData);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || "Registration failed"
            );
        }
    }
);

// LOGIN
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, thunkAPI) => {
        try {
            const res = await api.get("/user/login", { params: credentials });

            // Agar token qaytsa, saqlash
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }

            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || "Login failed"
            );
        }
    }
);

// GET PROFILE (by username)
export const fetchProfile = createAsyncThunk(
    "auth/fetchProfile",
    async (username, thunkAPI) => {
        try {
            const res = await api.get(`/user/${username}`);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || "Failed to load profile"
            );
        }
    }
);

// UPDATE PROFILE
export const updateProfile = createAsyncThunk(
    "auth/updateProfile",
    async ({ username, data }, thunkAPI) => {
        try {
            const res = await api.put(`/user/${username}`, data);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || "Update failed"
            );
        }
    }
);

// DELETE USER
export const deleteUser = createAsyncThunk(
    "auth/deleteUser",
    async (username, thunkAPI) => {
        try {
            await api.delete(`/user/${username}`);
            return true;
        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || "Delete failed"
            );
        }
    }
);

// LOGOUT
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    try {
        await api.get("/user/logout");
        localStorage.removeItem("token");
        return true;
    } catch (err) {
        // Logout error bo'lsa ham tokenni o'chirish
        localStorage.removeItem("token");
        throw err;
    }
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
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // REGISTER
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                // Registration muvaffaqiyatli, keyin login qilish kerak
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // LOGIN
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user || action.payload;
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
                state.error = action.payload;
            })

            // UPDATE PROFILE
            .addCase(updateProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // DELETE USER
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
                state.isAuth = false;
                localStorage.removeItem("token");
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // LOGOUT
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuth = false;
                state.error = null;
            });
    },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;