import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Home.module.css";

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore("transactions"); // 삭제 메서드 가져오기

  // 가격을 세자리마다 쉼표로 구분
  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  // 합계 계산 함수
  const calculateTotal = () => {
    return transactions.reduce(
      (total, transaction) => total + Number(transaction.amount),
      0
    );
  };
  return (
    <div className={styles.transactions}>
      <div className={styles.total}>
        <label>
          <p>Total: {formatPrice(calculateTotal())}원</p>
        </label>
      </div>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>
              {formatPrice(Number(transaction.amount))}원
            </p>
            {/* 삭제하기 버튼  */}
            <button onClick={() => deleteDocument(transaction.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
