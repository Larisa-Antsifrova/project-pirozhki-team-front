import { useState } from 'react';
import ReactModal from 'react-modal';
import './ModalLogout.scss';
import sprite from '../../images/sprite.svg';

const ModalLogout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const logout = () => {
    console.log('Ура вы вышли из этой финансовой пирамиды');
    closeModal();
  };

  return (
    <>
      <button className="logoutBtn" onClick={openModal}>
        <svg className="logoutIcon">
          <use href={`${sprite}#logout-icon`} />
        </svg>
        <span className="logoutText">Выйти</span>
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className="modalContent"
      >
        <h2 className="caption">Вы реально хотите выйти?</h2>
        <div className="modalBtn">
          <button className="btnYes" onClick={logout}>
            Да
          </button>
          <button className="btnNo" onClick={closeModal}>
            Нет
          </button>
        </div>
      </ReactModal>
    </>
  );
};

export default ModalLogout;
