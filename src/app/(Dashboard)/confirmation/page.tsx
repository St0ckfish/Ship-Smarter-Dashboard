import Image from "next/image";
import styles from "./Confirmation.module.css";
import CompanyProfileImage from "../../../../public/images/company_profile_image.svg";
import PhoneArrowIconSvg from "@/components/SvgIcons/PhoneSvgIcon";
import LocationIconSvg from "@/components/SvgIcons/LocationSvgIcon";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";
import { TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { NumberInput } from "@mantine/core";

export default function Confirmation() {
  return (
    <div className={styles["container"]}>
      {/* <h1>Confirmation</h1> */}
      <section className={styles["inner__wrapper"]}>
        <header className={styles["header"]}>
          <div className={styles["header__brand"]}>
            <Image alt="" src={CompanyProfileImage} width={50} height={50} />
            <span className={styles["company__name"]}>Aramex</span>
          </div>

          <div className={styles["header__info"]}>
            <div className={styles["header__info__phone"]}>
              <PhoneArrowIconSvg width={24} height={24} />
              <span className={styles["phone"]}>+69 763754</span>
            </div>

            <div className={styles["header__info__location"]}>
              <LocationIconSvg width={24} height={24} />
              <span className={styles["location"]}>+Lake Wiltontown</span>
            </div>
          </div>
        </header>

        <div className={styles["form__wrapper"]}>
          <form className={styles["form"]} action="">
            <div className={styles["form__inner__wrapper"]}>
              <div className={styles["form__first__row"]}>
                <TextInput
                  className={styles["input"]}
                  label="Order Cost"
                  placeholder="Name"
                />
                <DateInput
                  className={styles["input"]}
                  label="Arriave Date"
                  placeholder="Date input"
                />
                <NumberInput
                  className={styles["input"]}
                  label="Weight (bykg)"
                  // description="Input description"
                  placeholder="Input placeholder"
                />
              </div>

              <div className={styles["form__second__row"]}>
                <TextInput
                  className={styles["input"]}
                  label="Shipping Address"
                  placeholder="Name"
                />
                <TextInput
                  className={styles["input"]}
                  label="Size"
                  placeholder="Name"
                />
              </div>
            </div>

            <div className={styles["buttons__wrapper"]}>
              <button
                className={`${styles["cancel__button"]} ${styles["form__button"]}`}
              >
                Cancel
              </button>
              <button
                className={`${styles["confirm__button"]} ${styles["form__button"]}`}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
