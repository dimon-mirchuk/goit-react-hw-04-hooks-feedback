import PropTypes from "prop-types";
import styles from "./FeedbackStat.module.css";

const { list, item } = styles;

const FeedbackStat = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={list}>
      <li className={item}>Good: {good}</li>
      <li className={item}>Neutral: {neutral}</li>
      <li className={item}>Bad: {bad}</li>
      <li className={item}>Total: {total}</li>
      <li className={item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

FeedbackStat.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default FeedbackStat;
