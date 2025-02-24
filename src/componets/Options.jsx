import styles from "./styles.module.css";

export default function Options({
  options,
  onLeaveFeedback,
  onReset,
  totalFeedback,
}) {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button
          className={styles.button}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={styles.resetButton} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
