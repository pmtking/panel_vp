"use client"; // Mark this as a Client Component

import useAuth from "@/hooks/useAuth";
import { typeLoginComponentType } from "@/types";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { FormEvent, useState } from "react";

const LoginComponents = ({ type }: typeLoginComponentType) => {
    // const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: FormEvent) => {
        e.preventDefault(); // Prevent form submission from reloading the page
        
        localStorage.setItem("token", "textt");
        location.replace("/");
    };

    return (
        <>
            {type === "login" ? (
                <form
                    onSubmit={handleLogin}
                    className="flex flex-col justify-center items-center gap-5 px-10 py-10 border border-primary rounded-2xl shadow-lg shadow-gray-700 w-[400px]"
                >
                    <h1 className="text-2xl">Login</h1>
                    <p className="text-gray-400 text-sm">Please log in to your panel</p>
                    <Input
                        variant="bordered"
                        color="primary"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        variant="bordered"
                        type="password"
                        color="primary"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" color="primary" fullWidth>
                        Login
                    </Button>
                </form>
            ) : null}
        </>
    );
};

export default LoginComponents;
