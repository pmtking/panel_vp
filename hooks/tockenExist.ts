import { useState, useEffect } from "react";

const useAuthToken = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        const handleStorageChange = () => {
            setToken(localStorage.getItem("token"));
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange)
        }
    }, []);
    const saveToken = (newToken: any) => {
        localStorage.setItem("token", newToken)
        setToken(newToken);
    }
    const removeToken = () => {
        localStorage.removeItem("token");
        setToken(null)
    }

    return { token, saveToken, removeToken, isAuthenticated: !!token }
}

export default useAuthToken ; 