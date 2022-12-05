import PropTypes from 'prop-types';
import {
  BsFillEmojiSunglassesFill,
  BsFillEmojiExpressionlessFill,
  BsFillEmojiAngryFill,
} from 'react-icons/bs';
import { Button } from './FeedbackOptionsBtn';

const iconArray = [
  <BsFillEmojiSunglassesFill />,
  <BsFillEmojiExpressionlessFill />,
  <BsFillEmojiAngryFill />,
];

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map((name, idx) => {
    // console.log(name);
     return (
      <Button
        key={name}
        name={name}
        onClickHandle={onLeaveFeedback}
        icon={iconArray[idx]}
      >
        {name}
      </Button>
    );
  });

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
