import styles from "./ResetPassword.module.css"
import ProjectImage from "../../../../public/images/DrawKit Vector Illustration Project Manager (10) 1.svg"
import ResetPasswordForm from "./components/ResetPasswordForm/ResetPasswordForm"
import AuthLayout from "../AuthLayout"

function ResetPasswordPage() {
    return (

        <AuthLayout image={ProjectImage} classname="sidebar__featured__img">

            <div className={styles["form__container"]}>
                {/* <form className={styles["form"]} >
                    </form> */}
                <div className={styles["right__side__text"]}>
                    <h2>Reset your password</h2>
                    {/* <p>Log in if you have an account in here</p> */}
                </div>

                <ResetPasswordForm />
            </div>

        </AuthLayout>

    )
}

export default ResetPasswordPage