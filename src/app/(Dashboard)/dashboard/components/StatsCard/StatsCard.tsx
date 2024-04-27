import RightArrowIconSvg from "@/components/SvgIcons/RightArrowSvgIcon"
import styles from "./StatsCard.module.css"


type CardPropsType = {
    mainIcon: React.ReactNode,
    title: string,
    total: number,
    statusIcon: React.ReactNode,
    ordersCount: number
    colorClass: string
}

function StatsCard({ card }: { card: CardPropsType }) {
    return (

        <div className={styles["card"]}>
            <div>
                {card.mainIcon}
            </div>
            <span className={styles["delivery__status"]}>
                {card.title}</span>
            <div className={styles["numbers"]}>
                <span
                    className={styles["total__amount"]}>
                    {card.total}$
                </span>
                <span className={styles["orders__count"]}>
                    {card.statusIcon}&nbsp;
                    <span className={styles[`${card.colorClass}`]}>
                        {card.ordersCount}&nbsp;</span>
                    <span>order</span>
                </span>
            </div>

            <a className={styles["show__orders__link"]} href="">
                <span>Show Orders&nbsp;</span>
                <RightArrowIconSvg
                    strokeWidth={2}
                    width={20} height={20}
                    viewBox="0 0 16 16"
                />
            </a>
        </div>
    )
}

export default StatsCard