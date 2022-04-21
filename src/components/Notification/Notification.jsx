import PropTypes from 'prop-types';
import { NotificationText } from 'components/Notification/Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationText>{message}</NotificationText>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
