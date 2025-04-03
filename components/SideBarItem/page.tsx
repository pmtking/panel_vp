"use client"; 
import { NavitemType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct Next.js 13+ API
import './style.scss';

const SideBarItem = ({ icon, link, name }: NavitemType) => {
    const pathname = usePathname(); // Gets current path
    const isActive = pathname === link || pathname.startsWith(link);

    return (
        <li className={`flex justify-start items-center w-[200px] nav_item ${isActive ? 'bg-primary text-white shadow' : 'hover:bg-primary'}`}>
            <Link href={link} className="flex justify-start items-center gap-3 w-full p-2">
                <span>{icon}</span>
                {name}
            </Link>
        </li>
    );
};

export default SideBarItem;
