"use client"
import Link from "next/link"
import styles from "./SidebarMenuIcon.module.css"
import { usePathname } from "next/navigation"



export default function SidebarMenuIcon({ menuItem }:
    { menuItem: { path: string, icon: React.ReactNode } }) {

    const activeMenuIcon = menuItem.path

    const pathname = usePathname()

    return (
        <Link
            href={menuItem.path}
            className={`${styles["menu__item__link"]} ${styles[`${pathname === activeMenuIcon ? "active" : ""}`]} `}
        >
            {menuItem.icon}
        </ Link>
    )
}

