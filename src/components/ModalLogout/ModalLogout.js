import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import { useMediaPredicate } from 'react-media-hook';

import operations from '../../redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelectors';
import isModalLogoutOpenActions from '../../redux/isModalLogoutOpen/isModalLogoutOpenActions';
import selectors from '../../redux/isModalLogoutOpen/isModalLogoutOpenSelectors';

import sprite from '../../images/sprite.svg';
import './ModalLogout.scss';

const ModalLogout = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(state => selectors.isModalLogoutOpen(state));
  const userName = useSelector(getUserName);
  const biggerThan767 = useMediaPredicate('(min-width: 768px)');

  const onToggleModal = () => dispatch(isModalLogoutOpenActions());

  const onLogout = () => {
    dispatch(operations.logout());

    onToggleModal();
  };

  return (
    <>
      {biggerThan767 && <p className="userName">{userName}</p>}
      <button className="logoutBtn" onClick={onToggleModal}>
        {biggerThan767 && (
          <svg className="stickIcon">
            <use href={`${sprite}#stick`} />
          </svg>
        )}
        <svg className="logoutIcon">
          <use href={`${sprite}#logout-icon`} />
        </svg>
        <span className="logoutText">Выйти</span>
      </button>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={onToggleModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className="modalLogoutContent"
      >
        <h2 className="caption">Вы хотите выйти?</h2>

        <div className="modalBtnGroup">
          <button className="modalBtnConfirm" onClick={onLogout}>
            Да
          </button>
          <button className="modalBtnCancel" onClick={onToggleModal}>
            Нет
          </button>
        </div>
      </ReactModal>
    </>
  );
};

export default ModalLogout;
