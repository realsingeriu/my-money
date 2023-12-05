import { useState } from "react";
import TransactionForm from "../../Components/TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import styles from "./Home.module.css";
import TransactionList from "./TransactionList";

export default function Home() {
  const { user } = useAuthContext();
  const [sortOrder, setSortOrder] = useState("latest"); // 기본 정렬 순서 설정
  const { documents, error } = useCollection("transactions", [
    "uid",
    "==",
    user.uid,
  ]);

  // 정렬 함수
  const sortTransactions = (transactions, order) => {
    switch (order) {
      case "latest":
        return transactions.sort((a, b) => b.timestamp - a.timestamp);
      case "cost":
        return transactions.sort((a, b) => a.amount - b.amount);
      case "alphabetical":
        return transactions.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return transactions;
    }
  };

  // 정렬 순서 변경 핸들러
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.selectContainer}>
          <label htmlFor="sortOrder">정렬 순서:</label>
          <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
            <option value="latest">최신순</option>
            <option value="cost">비용순</option>
            <option value="alphabetical">가나다순</option>
          </select>
        </div>
        {error && <p>{error}</p>}
        {documents && (
          <TransactionList
            transactions={sortTransactions(documents, sortOrder)}
          />
        )}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
