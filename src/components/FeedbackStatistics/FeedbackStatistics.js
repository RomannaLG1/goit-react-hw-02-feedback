import PropTypes from 'prop-types';
import { Item, List } from "./FeedbackStatistics.styled";

export const FeedbackStatistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <List>
    <Item>Good: {good}</Item>
    <Item>Neutral: {neutral}</Item>
    <Item>Bad: {bad}</Item>
    <Item>Total: {total}</Item>
    <Item>Positive feedback: {positivePercentage}</Item>
  </List>
);

FeedbackStatistics.propTypes = {
  good: PropTypes.number, 
  neutral:PropTypes.number, 
  bad:PropTypes.number, total:PropTypes.number, 
  positivePercentage:PropTypes.string,
}