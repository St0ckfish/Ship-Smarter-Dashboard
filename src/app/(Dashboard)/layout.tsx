"use client";

import MainLayout from "@/components/MainLayout/MainLayout";
import DashboardSidebar from "@/components/UiComponents/DashboardSidebar/DashboardSidebar";
import styles from "./DashboardLayout.module.css";
import { useState } from "react";
import HamburgerMenu from "./DashboardComponents/SidebarFlyout/HamburgerMenu/HamburgerMenu";
import SidebarFlyout from "./DashboardComponents/SidebarFlyout/SidebarFlyout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [width, setWidth] = useState(false);

  function sidebarWidth() {
    setWidth((prevState) => !prevState);
  }

  return (
    <MainLayout>
      <SidebarFlyout />
      <div
        className={styles["container"]}
      >
        <DashboardSidebar sendToLayout={sidebarWidth} />

        <div
                  className={
            styles[`${width ? "wide__right__side" : "right__side__wrapper"}`]
          }
        >
          <div className={styles["right__side"]}>
            {/* <div className={styles["right__side__logo__img"]}>
                            <Image src={LogoImage} alt="" />
                        </div> */}

            {children}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
