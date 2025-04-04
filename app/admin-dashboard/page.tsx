"use client";

import { useContext, useEffect } from "react";
import useAuthToken from "@/hooks/tockenExist";
import SideBar from "@/components/Sidebar/page";
import TimeLinePanel from "@/components/TimLinePanel/page";
import TabelInbunds from "@/components/TabelInbounds/page";
import { GlobalStateContext } from "@/libs/GlobalStateProvider";

export default function AdminDashboard() {
  const { token, saveToken, removeToken, isAuthenticated } = useAuthToken();

  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("GlobalStateConext must be nused");
  }
  const { isAdmin, setIsAdmin } = context;
  useEffect(() => {
    if (isAuthenticated === false) {
      location.replace("/login");
    }
  }, []);
  return (
    <section className="flex items-center justify-center gap-4 py-8 md:py-10">
      <SideBar />
      <div className="flex flex-col gap-2 bg-[#111516] w-full h-[92vh] rounded-2xl border border-gray-800 px-2 py-3 ">
        <TimeLinePanel />
        <TabelInbunds type={'admin'} />
      </div>
    </section>
  );
}
