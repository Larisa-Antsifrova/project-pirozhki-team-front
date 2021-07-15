import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import authSelectors from '../../redux/auth/authSelectors';

const Notify = () => {
  const isError = useSelector(authSelectors.getIsError);

  return isError ? (
    <ToastContainer
      position="top-right"
      autoClose={false}
      limit={2}
      hideProgressBar
      newestOnTop={false}
      closeButton
      transition={Zoom}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
  ) : null;
};

export default Notify;
