import styles from "./MainLayout.module.css";

// Components Import

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return <main className={styles["main__container"]}>{children}</main>;
}
