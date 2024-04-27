import styles from "./NewCollection.module.css"
import TableSort from "./components/table"

function page() {
    return (
        <div className={styles["container"]}>

            <div className={styles["wrapper"]}>
                <header className={styles["header"]}>
                    <h1>New Collection</h1>
                </header>

                <TableSort />

            </div>

        </div>
    )
}

export default page