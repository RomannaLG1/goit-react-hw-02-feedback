import Box from 'components/Box';
import { FeedbackTitle } from './FeedbackForm.styled';
import PropTypes from 'prop-types';

export const FeedbackForm = ({ title, children }) => (
  <Box display="grid" justifyItems="center" as="section">
    <FeedbackTitle>{title}</FeedbackTitle>
    <Box display="flex" justifyContent="center" gridGap={3} m={3}>
      {children}
    </Box>
  </Box>
);

FeedbackForm.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
