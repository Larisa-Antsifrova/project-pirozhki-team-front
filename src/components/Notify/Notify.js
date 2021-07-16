import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notify = () => {
  return (
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
  );
};

export default Notify;
