import PropTypes from 'prop-types';
import {
  OptionsControlBox,
  OptionsControl,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsControlBox>
      {options.map((option, index) => (
        <OptionsControl
          type="button"
          key={index}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </OptionsControl>
      ))}
    </OptionsControlBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
