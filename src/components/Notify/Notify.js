import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getIsError } from '../../redux/auth/authSelectors';

const Notify = () => {
  const isError = useSelector(getIsError);

  return (
    isError && (
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeButton={false}
        transition={Zoom}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    )
  );
};

export default Notify;
