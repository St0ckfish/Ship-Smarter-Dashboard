import Image from "next/image"
import styles from "./Login.module.css"
import LoginForm from "./components/LoginForm"
import Sidebar from "@/components/UiComponents/Sidebar/Sidebar"
import AuthLayout from "../AuthLayout"
import TruckImage from "../.../../../../../public/images/3d-casual-life-delivery-truck-back-side-view 1.svg";



function LoginPage() {
    return (
        <>
            <AuthLayout image={TruckImage} classname="sidebar__featured__img__variant">
                <div className={styles["form__container"]}>
                    {/* <form className={styles["form"]} >
                    </form> */}
                    <div className={styles["right__side__text"]}>
                        <h2>Log in</h2>
                        <p>Log in if you have an account in here</p>
                    </div>

                    <LoginForm />
                </div>
            </AuthLayout>
        </>
    )
}

export default LoginPage