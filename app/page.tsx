"use client";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useEffect } from "react";

import useAuthToken from "@/hooks/tockenExist";
import SideBar from "@/components/Sidebar/page";
import TimeLinePanel from "@/components/TimLinePanel/page";

export default function Home() {
  const { token, saveToken, removeToken, isAuthenticated } = useAuthToken();
  useEffect(() => {
    if (isAuthenticated === false ) {
      location.replace("/login");
    }
  }, []);
  return (
    <section className="flex  items-center justify-center gap-4 py-8 md:py-10">
      <SideBar />
     <div className="flex flex-col gap-2 bg-[#111516] w-full h-[92vh] rounded-2xl border border-gray-800 px-2 py-3 ">
      <TimeLinePanel />
     </div>
    </section>
  );
}
