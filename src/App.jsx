import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setMode } from "./store/themeSlice";
import { fetchProfile } from "./store/authSlice";
import Profile from "./pages/profile/Profile";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem("mode");
    if (saved) dispatch(setMode(saved));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchProfile());
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors dark:text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;