import { HashLoader } from 'react-spinners';
import './Spinner.scss';

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <HashLoader color={'#24CCA7'} loading="true" size={120} />
      </div>
    </>
  );
};

export default Spinner;
