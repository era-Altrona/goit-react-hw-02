import styles from "./styles.module.css";
export default function Feedback({
  feedback,
  totalFeedback,
  positivePercentage,
}) {
  const { good, neutral, bad } = feedback;

  return (
    <div className={styles.feedback}>
      <p> Good: {good} </p>
      <p> Neutral: {neutral} </p>
      <p> Bad: {bad} </p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
