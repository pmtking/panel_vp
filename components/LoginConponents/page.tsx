"use client"; // Mark this as a Client Component

import useAuth from "@/hooks/useAuth";
import Api from "@/libs/axios";
import { typeLoginComponentType } from "@/types";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { usePathname } from "next/navigation"; // Import usePathname
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const LoginComponents = ({ type }: typeLoginComponentType) => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const pathname = usePathname(); // Use usePathname to get the current URL path

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault(); 
        console.log("Current Pathname:", pathname); // Log the current pathname

        try {
            const { data } = await Api.post('/v1/admin/adminvlnplogin', {
                email,
                password
            });

            if (data) {
                console.log("Response Data:", data.data);
                localStorage.setItem('token', data.data);
                toast.success('Login successful');
                // Add navigation logic as needed, e.g., redirect
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error('Login failed');
        }
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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