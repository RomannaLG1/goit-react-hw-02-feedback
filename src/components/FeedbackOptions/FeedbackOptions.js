import PropTypes from 'prop-types';
import { StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  icon: Icon,
  type = 'button',
  options,
  onFeedbackIncrement,
}) => {
  return options.map(name => (
    <StyledButton
      type={type}
      name={name}
      key={name}
      onClick={onFeedbackIncrement}
    >
      {Icon && <Icon size="35" />}
      {name}
    </StyledButton>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onFeedbackIncrement: PropTypes.func,
}