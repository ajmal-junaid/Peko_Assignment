import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Toast = ({ message, duration ,theme}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) {
    return null; // Don't render the toast if it's not visible
  }

  let icon = null;
  let bgColor = '';

  // Set the icon and background color based on the theme
  switch (theme) {
    case 'success':
      icon = 'check-circle';
      bgColor = 'bg-green-500';
      break;
    case 'failed':
      icon = 'times-circle';
      bgColor = 'bg-red-500';
      break;
    case 'warning':
      icon = 'exclamation-triangle';
      bgColor = 'bg-yellow-500';
      break;
    default:
      icon = 'bell';
      bgColor = 'bg-gray-800';
  }

  return (
    <div className={`fixed top-4 right-4 transition-opacity duration-300 opacity-100`}>
      <div className={`flex items-center ${bgColor} text-white px-4 py-2 rounded-md shadow-md`}>
        {icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d={
                icon === 'bell'
                  ? 'M10 18a2 2 0 01-2-2h4a2 2 0 01-2 2zm9.293-2.293l-1.414-1.414C18.9 13.047 20 10.702 20 8V7a7 7 0 00-14 0v1c0 2.702 1.1 5.047 2.828 6.586l-1.414 1.414a1 1 0 001.414 1.414l3.793-3.793A3.978 3.978 0 0010 16a3.978 3.978 0 003.793-2.586l3.793 3.793a1 1 0 001.414-1.414z'
                  : icon === 'check-circle'
                  ? 'M10 18a8 8 0 100-16 8 8 0 000 16zm4.293-10.293a1 1 0 00-1.414-1.414L9 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  : icon === 'times-circle'
                  ? 'M10 18a8 8 0 110-16 8 8 0 010 16zm2.707-10.293a1 1 0 00-1.414-1.414L10 8.586l-1.293-1.293a1 1 0 10-1.414 1.414 l2 2a1 1 0 001.414 0l1.293-1.293a1 1 0 00-1.414-1.414L10 10.586l-1.293-1.293a1 1 0 10-1.414 1.414l1.293 1.293L6.707 14.707a1 1 0 001.414 1.414L10 12.414l1.293 1.293a1 1 0 001.414-1.414L11.414 11l1.293-1.293a1 1 0 00-1.414-1.414z'
                  : icon === 'exclamation-triangle'
                  ? 'M10 1L1 19h18L10 1zm1 15h-2v-2h2v2zm0-4h-2V7h2v5z'
                  : ''
              }
              clipRule="evenodd"
            />
          </svg>
        )}
        {message}
      </div>
    </div>
  )
};

const showToast = (message, duration, theme) => {
  const toastContainer = document.getElementById('toast-container');
  const toastElement = document.createElement('div');
  toastContainer.appendChild(toastElement);
  
  ReactDOM.render(
  <Toast message={message} duration={duration} theme={theme} />,
  toastElement
  );
  };

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.string,
  theme:PropTypes.string
};

export default showToast;
