import { useState } from 'react';
import { HashLoader } from 'react-spinners';
import './Spinner.scss';

const Spinner = () => {
  let [loading, setLoading] = useState(true);

  return (
    <>
      {/* врменно кнопка для просмотра Loader */}
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <div className="spinner">
        <HashLoader color={'#24CCA7'} loading={loading} size={120} />
      </div>
    </>
  );
};

export default Spinner;
