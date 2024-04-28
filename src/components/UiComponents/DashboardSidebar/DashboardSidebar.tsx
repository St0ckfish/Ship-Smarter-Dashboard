"use client";
import styles from "./DashboardSidebar.module.css";
import SidebarMenuLink from "./components/SidebarMenuLink/SidebarMenuLink";
import Image from "next/image";
import LogoImage from "../../../../public/images/Frame 1686560207.svg";
import DashboardIconSvg from "@/components/SvgIcons/DashboardSvgIcon";
import NewCollectionIconSvg from "@/components/SvgIcons/NewCollectionSvgIcon";
import AwaitingIconSvg from "@/components/SvgIcons/AwaitingCollectionSvgIcon";
import ShippingCompanyIconSvg from "@/components/SvgIcons/ShippingCompanySvgIcon";
import DistributorIconSvg from "@/components/SvgIcons/DistributorsSvgIcon";
import LogoutIconSvg from "@/components/SvgIcons/LogoutSvgIcon";
import BackArrowIconSvg from "@/components/SvgIcons/BackArrowSvgIcon";
import { useState } from "react";
import SidebarMenuIcon from "./components/SidebarMenuIcon/SidebarMenuIcon";
import Cookie from 'js-cookie'

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIconSvg width={24} height={24} />,
  },

  {
    title: "New Collection",
    path: "/new-collection",
    icon: <NewCollectionIconSvg width={24} height={24} />,
  },
  {
    title: "Awaiting Collection",
    path: "/awaiting-collection",
    icon: <AwaitingIconSvg width={24} height={24} />,
  },
  {
    title: "Shipping Company",
    path: "/shipping-company",
    icon: <ShippingCompanyIconSvg width={24} height={24} />,
  },
  {
    title: "Distributors",
    path: "/distributors",
    icon: <DistributorIconSvg width={24} height={24} />,
  },
  {
    title: "log-out",
    path: "/login",
    icon: <LogoutIconSvg width={24} height={24} />,
    onClick: () => handleLogout(),
  },
];
function handleLogout() {

  Cookie.remove('token');
}

function DashboardSidebar({
  sendToLayout,
}: {
  sendToLayout: (narrowSidebar: boolean) => void;
}) {
  const [icons, setIcons] = useState(false);
  const [narrowSidebar, setNarrowSidebar] = useState(false);

  function toggleIcons() {
    setIcons((prevState) => !prevState);
    setNarrowSidebar((prevState) => !prevState);
    sendToLayout(narrowSidebar);
  }

  return (
    <div
      className={
        styles[
          `${narrowSidebar ? "narrow__sidebar__wrapper" : "sidebar__wrapper"}`
        ]
      }
    >
      <aside
        className={styles[`${narrowSidebar ? "narrow__sidebar" : "sidebar"}`]}
      >
        <button className={styles["back__arrow__button"]} onClick={toggleIcons}>
          <BackArrowIconSvg
            className={styles[`${icons ? "right__arrow" : ""}`]}
          />
        </button>
        <div className={styles["logo__img"]}>
          {!icons && <Image src={LogoImage} alt="" />}
        </div>
        <nav className={styles["items__container"]}>
          {menuItems.map((item, index) => {
            return icons ? (
              <SidebarMenuIcon key={index} menuItem={item} />
            ) : (
              <SidebarMenuLink key={index} menuItem={item} />
            );
          })}
        </nav>
      </aside>
    </div>
  );
}

export default DashboardSidebar;
