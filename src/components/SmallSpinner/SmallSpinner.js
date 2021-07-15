import { PuffLoader } from 'react-spinners';
import './SmallSpinner.scss';

const SmallSpinner = () => {
  return (
    <>
      <div className="smallSpinner">
        <PuffLoader color={'#6E78E8'} loading="true" size={80} />
      </div>
    </>
  );
};

export default SmallSpinner;
