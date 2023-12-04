import TransactionForm from "../../Components/TransactionForm";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>거래 내역</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
}
