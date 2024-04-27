import MainLayout from "@/components/MainLayout/MainLayout"
import Sidebar from "@/components/UiComponents/Sidebar/Sidebar"
import styles from "./authlayout.module.css"
import LogoImage from "../../../public/images/Frame 1686560207.svg"
import Image from "next/image"


export default function AuthLayout({ children, image, classname }:
    { children: React.ReactNode, image: string, classname: string }) {
    return (

        <MainLayout>
            <div className={styles["container"]}>
                <Sidebar sidebarImage={image} classname={classname} />

                <div className={styles["right__side"]}>

                    <div className={styles["right__side__logo__img"]}>
                        <Image src={LogoImage} alt="" />
                    </div>

                    {children}

                </div>
            </div>
        </MainLayout>

    )
}

