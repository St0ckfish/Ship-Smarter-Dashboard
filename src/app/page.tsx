import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Shipping Smart Home</h1>
      <div>
        <menu className={styles["menu"]}>
          <li>
            <a href="/confirmation">Confirmation</a>
          </li>
          <li>
            <a href="/shipping-company">Shipping Company</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/new-collection">New Collection</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/forget-password">Forget Password</a>
          </li>
          <li>
            <a href="/reset-password">Reset Password</a>
          </li>
        </menu>
      </div>
    </main>
  );
}
