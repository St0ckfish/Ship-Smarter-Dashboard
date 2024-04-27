"use client"
import Link from "next/link"
import styles from "./SidebarMenuLink.module.css"
import { usePathname } from "next/navigation"



function SidebarMenuLink({ menuItem }:
    { menuItem: { path: string, icon: React.ReactNode, title: string } }) {

    const pathname = usePathname()
    const activeMenuItem = menuItem.path


    return (
        <Link
            href={menuItem.path}
            className={`${styles["menu__item__link"]} ${styles[`${pathname === activeMenuItem ? "active" : ""}`]} `}
        >
            {menuItem.icon}
            {menuItem.title}
        </ Link>
    )
}

export default SidebarMenuLink