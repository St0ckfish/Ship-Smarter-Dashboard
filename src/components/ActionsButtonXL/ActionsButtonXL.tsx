import Link from "next/link"
import styles from "./ActionsButtonXL.module.css"


export default function ActionsButtonXL({ title }: { title: string }) {
    return (
        <>
            <Link href={"create-company"} className={styles["actions__button"]}>
                <span className={styles["button__icon"]}>+</span>
                <span className={styles["button__text"]}>
                    {title}
                </span>
            </Link>
        </>
    )
}

