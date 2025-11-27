import API from "./base";

export const registerUser = (data) => API.post("/user", data);

export const loginUser = (data) => API.get("/user/login", data);

export const getProfile = (username) => API.get(`/user/${username}`);