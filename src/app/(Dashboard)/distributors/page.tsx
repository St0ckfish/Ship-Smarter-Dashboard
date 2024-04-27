import { Divider } from "@mantine/core"
import DistributorsTable from "./components/Table/Table"
import styles from "./Distributors.module.css"

function Distributors() {
    return (
        <>
            <Divider h={60} />
            <div className={styles["wrap"]}>
                <DistributorsTable />
            </div>

        </>
    )
}

export default Distributors