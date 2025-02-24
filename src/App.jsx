import "./App.css";
import { useState, useEffect } from "react";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Notification from "./components/Notification";
import styles from "./components/styles.module.css";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback-data");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback-data", JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = (type) => {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1,
    });
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={styles.app}>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
        onReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
