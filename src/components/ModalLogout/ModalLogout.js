import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import './ModalLogout.scss';
import { useMediaPredicate } from 'react-media-hook';
import { getUserName } from '../../redux/auth/authSelectors';
import sprite from '../../images/sprite.svg';
import isModalLogoutOpenActions from '../../redux/isModalLogoutOpen/isModalLogoutOpenActions';
import selectors from '../../redux/isModalLogoutOpen/isModalLogoutOpenSelectors';
import operations from '../../redux/auth/authOperations';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => selectors.isModalLogoutOpen(state));
  const onToggleModal = () => dispatch(isModalLogoutOpenActions());

  const biggerThan767 = useMediaPredicate('(min-width: 768px)');

  const logout = () => {
    dispatch(operations.logout());
    onToggleModal();
    console.log('Ура вы вышли из этой финансовой пирамиды');
  };

  const userName = useSelector(getUserName);

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
        <h2 className="caption">Вы реально хотите выйти?</h2>
        <div className="modalBtn">
          <button className="btnYes" onClick={logout}>
            Да
          </button>
          <button className="btnNo" onClick={onToggleModal}>
            Нет
          </button>
        </div>
      </ReactModal>
    </>
  );
};

export default ModalLogout;
