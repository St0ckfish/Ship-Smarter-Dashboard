import NotificationsIconSvg from "@/components/SvgIcons/NotificationsSvgIcon"
import styles from "./dashbaord.module.css"
import Image from "next/image"
import DownArrowIconSvg from "@/components/SvgIcons/DownArrowSvgIcon"
import UserAvatar from "../../../../public/images/Ellipse 262.png"
import SucessIconSvg from "@/components/SvgIcons/SuccessSvgIcon"
import RightArrowIconSvg from "@/components/SvgIcons/RightArrowSvgIcon"
import SuccessOrderIconSvg from "@/components/SvgIcons/SuccessOrderSvgIcon"
import InProgressIconSvg from "@/components/SvgIcons/InProgressSvgIcon"
import InProgressOrderIconSvg from "@/components/SvgIcons/InProgressOrderSvgIcon"
import FailedIconSvg from "@/components/SvgIcons/FailedSvgIcon"
import FailedOrderIconSvg from "@/components/SvgIcons/FailedOrderSvgIcon"
import StatsCard from "./components/StatsCard/StatsCard"
import Chart from "./components/Chart/Chart"
import DatePickerVariant from "./components/DatePicker/DatePicker"


function dashbaord() {


    const cardsData = [

        {
            mainIcon: <SucessIconSvg width={24} height={24} />,
            title: "Success Delivered",
            total: 1500,
            statusIcon: <SuccessOrderIconSvg
                width={24} height={24}
            />,
            ordersCount: 50,
            colorClass: "success"
        },
        {
            mainIcon: <InProgressIconSvg width={24} height={24} />,
            title: "In progress",
            total: 350,
            statusIcon: <InProgressOrderIconSvg
                width={24} height={24}
            />,
            ordersCount: 50,
            colorClass: "progress"
        },
        {
            mainIcon: <FailedIconSvg width={24} height={24} />,
            title: "Failed Delivered",
            total: 200,
            statusIcon: <FailedOrderIconSvg
                width={24} height={24}
            />,
            ordersCount: 12,
            colorClass: "failed"
        },

    ]


    return (

        <div className={styles["container"]}>
            <header className={styles["header"]}>


                <div
                    className={styles["header__text"]}>
                    <span>Hello Admin.</span>
                    <h2>Good Morning</h2>
                </div>

                <div className={styles["user__info"]}>
                    <NotificationsIconSvg width={34} height={37} />
                    <Image src={UserAvatar} alt="" />
                    <span>Admin</span>
                    <DownArrowIconSvg />
                </div>

            </header>

            <div className={styles["cards__wrapper"]}>

                {
                    cardsData.map((card, index) => {
                        return (
                            <StatsCard key={index} card={card} />
                        )
                    })
                }

            </div>


            <div className={styles["chart__datepicker__container"]}>
                <h3>Shipment Over Time</h3>

                <div className={styles["chart__datepicker__wrapper"]}>
                    <Chart />

                    <DatePickerVariant />
                </div>
            </div>
        </div>

    )
}

export default dashbaord