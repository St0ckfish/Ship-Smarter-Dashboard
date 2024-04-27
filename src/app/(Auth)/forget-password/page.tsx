import AuthLayout from "../AuthLayout"
import styles from "./ForgetPassword.module.css"
import ForgetPasswordForm from "./components/ForgetPasswordForm/ForgetPasswordForm"
import ProjectImage from "../.../../../../../public/images/DrawKit Vector Illustration Project Manager (10) 1.svg";

function ForgetPasswordPage() {
    return (
        <>
            <AuthLayout image={ProjectImage} classname="sidebar__featured__img">
                <div className={styles["form__container"]}>
                    {/* <form className={styles["form"]} >
                    </form> */}
                    <div className={styles["right__side__text"]}>
                        <h2>Forget password</h2>
                        {/* <p>Log in if you have an account in here</p> */}
                    </div>

                    <ForgetPasswordForm />
                </div>
            </AuthLayout>
        </>
    )
}

export default ForgetPasswordPage