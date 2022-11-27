import Box from "components/Box";
import { FeedbackTitle } from "./FeedbackForm.styled";
import PropTypes from 'prop-types';

export const FeedbackForm = ({title, children}) => (
  <Box>
    <FeedbackTitle>{title}</FeedbackTitle>
    {children}
  </Box>
);

FeedbackForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};