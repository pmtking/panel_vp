"use client"; // Mark this as a Client Component

import useAuth from "@/hooks/useAuth";
import Api from "@/libs/axios";
import { GlobalStateContext } from "@/libs/GlobalStateProvider";
import { typeLoginComponentType } from "@/types";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { usePathname } from "next/navigation"; // Import usePathname
import { FormEvent, useContext, useState } from "react";
import toast from "react-hot-toast";

const LoginComponents = ({ type }: typeLoginComponentType) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pathname = usePathname(); // Use usePathname to get the current URL path
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("GlobalStateConext must be nused");
  }
  const handleLogin = async (e: FormEvent) => {
    const { isAdmin, setIsAdmin } = context;
    e.preventDefault();
    console.log("Current Pathname:", pathname); // Log the current pathname
    if (pathname === "/login@admin_2456") {
      toast("welcom admin");
      setIsAdmin(true);
      if (!isAdmin) {
        setIsAdmin(true);
      }
    }

    try {
      if (pathname === "/login@admin_2456") {
        const { data } = await Api.post("/v1/admin/adminvlnplogin", {
          email,
          password,
        });
        if (data) {
          localStorage.setItem("token", data.data);
          setIsAdmin(true);
          console.log("is admin", isAdmin);
          toast.success("Login successful");
          // Add navigation logic as needed, e.g., redirect
        }
      } else {
        const { data } = await Api.post("/v1/auth/login", {
          email,
          password,
        });
        if (data) {
          localStorage.setItem("token", data.data);
          setIsAdmin(false);
          console.log("is admin", isAdmin);
          //   location.replace("/");
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login failed");
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
