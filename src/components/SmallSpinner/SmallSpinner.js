import { PuffLoader } from 'react-spinners';
import PropTypes from 'prop-types';

const SmallSpinner = ({ color, size }) => {
  return <PuffLoader color={color} size={size} loading="true" />;
};

SmallSpinner.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default SmallSpinner;
