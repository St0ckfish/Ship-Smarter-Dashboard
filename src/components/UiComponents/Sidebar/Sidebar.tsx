import styles from "./Sidebar.module.css"
import LogoImage from "../../../../public/images/Frame 1686560207.svg";
import truckImage from "../../../../public/images/3d-casual-life-delivery-truck-back-side-view 1.svg";
import Image from "next/image";


function Sidebar({ sidebarImage, classname }: { sidebarImage: string, classname: string }) {
    return (
        <aside className={styles["sidebar"]}>

            <div className={styles["logo__img"]}>
                <Image src={LogoImage} alt="" />
            </div>

            <div className={styles["sidebar__img__wrapper"]}>
                <Image className={styles[`${classname}`]}
                    src={sidebarImage} alt=""
                />
            </div>


            <p>&ldquo;Ship smarter, ship faster&rdquo;</p>

        </aside>
    )
}

export default Sidebar