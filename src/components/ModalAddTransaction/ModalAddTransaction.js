import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { modalAddTransactionOpen } from '../../redux/isModalAddTransactionOpen/isModalAddTransactionOpenActions';
import { addTransactionOperation } from '../../redux/isModalAddTransactionOpen/isModalAddTransactionOpenOperations';

import {
  categoriesSelector,
  tokenSelector,
} from '../../redux/isModalAddTransactionOpen/isModalAddTransactionOpenSelectors';

import 'react-datepicker/dist/react-datepicker.css';
import './ModalAddTransaction.scss';
import './transactionFormSelect.scss';
import './transactionFormDatepicker.scss';

const initialState = {
  date: Number(moment(new Date()).format('D')),
  month: moment(new Date()).format('MMMM'),
  year: Number(moment(new Date()).format('YYYY')),
  type: 'income',
  category: '',
  description: '',
  amount: '',
  balanceAfter: 0,
};

const TransactionForm = () => {
  const [transactionItem, setTransactionItem] = useState(initialState);
  const [startDate, setStartDate] = useState(new Date());
  const [optionsList, setOptionsList] = useState([]);
  const [checkedBox, setCheckedBox] = useState(false);
  const [errors, setErrors] = useState({});

  const token = useSelector(state => state.auth.user.token);
  const categoriesList = useSelector(state => state.categories);

  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalAddTransactionOpen());
  const onAddTransaction = () => dispatch(addTransactionOperation());

  const getCategoriesNames = list => {
    const namesList = list.map(item => ({
      name: item.name,
      // label: item.name.charAt(0).toUpperCase() + item.name.slice(1),
    }));
    return namesList;
  };

  useEffect(() => {
    setOptionsList(getCategoriesNames(categoriesList));
  }, [categoriesList]);

  const handleInputAmount = ({ target }) => {
    const { name, value } = target;
    if (Number(value) || value.length === 0) {
      setTransactionItem(state => ({
        ...state,
        [name]: value,
      }));
    }
  };

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setTransactionItem(state => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSelect = option => {
    setTransactionItem(state => ({
      ...state,
      category: option,
    }));
  };

  const handleCheckboxChange = () => {
    setCheckedBox(state => !state);
    const typeValue = !checkedBox ? 'expense' : 'income';
    setTransactionItem(state => ({ ...state, type: typeValue }));
  };

  const validate = (amount, category, type, description) => {
    const errors = {};
    if (amount.length === 0) {
      errors.amount = 'Введите число!';
    }
    if (type === 'expense' && category === '') {
      errors.category = 'Категория не выбрана!';
    }
    if (description.length > 24) {
      errors.description = 'Делай описание лаконичнее!';
    }
    setErrors(errors);
    return !!Object.keys(errors).length;
  };

  const handleDate = date => {
    setStartDate(date);
    const formatedDate = moment(date).format('DD/MMMM/yyyy');
    const dateD = moment(formatedDate).date();
    const month = moment(formatedDate).format('MMMM');
    const year = moment(formatedDate).year();
    setTransactionItem(state => ({
      ...state,
      date: dateD,
      month: month,
      year: year,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { type, amount, category, description } = transactionItem;

    const validateResult = validate(amount, category, type, description);

    if (!validateResult) {
      if (event.target[1].checked) {
        transactionItem.category = transactionItem.category.value;
      }
      transactionItem.amount = Number(transactionItem.amount);
      setTransactionItem(initialState);
      onAddTransaction(transactionItem, token);
      onToggleModal();
    }
    return validateResult;
  };

  return (
    <>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="form__title">Добавить транзакцию</h2>
        <button className="form__closeBtn" onClick={onToggleModal} />
        <div className="form__checkbox_wrapper">
          <label className="form__checkbox_label">
            <input
              id="check"
              type="checkbox"
              className="form__checkbox_input"
              onChange={handleCheckboxChange}
              checked={checkedBox}
            />
            <span className="form__checkbox_span"></span>
            <label className="form__checkbox_income" htmlFor="check">
              Доход
            </label>
            <label className="form__checkbox_consumption" htmlFor="check">
              Расход
            </label>
          </label>
        </div>
        {transactionItem.type === 'income' ? null : (
          <div className="form__errorsWrapper">
            <Select
              className="select"
              classNamePrefix="selectprefix"
              options={optionsList}
              noOptionsMessage={() => 'Категория не найдена'}
              placeholder="Выберите категорию"
              isSearchable={true}
              name="category"
              value={transactionItem.category}
              onChange={handleSelect}
            />
            {errors.category && (
              <span className="form__categoryError">{errors.category}</span>
            )}
          </div>
        )}
        <div className="form__acBox">
          <div className="form__errorsWrapper">
            <input
              type="text"
              className="form__amount"
              placeholder="0.00"
              name="amount"
              value={transactionItem.amount}
              onChange={handleInputAmount}
            />
            {errors.amount && (
              <span className="form__amountError">{errors.amount}</span>
            )}
          </div>
          <DatePicker
            id="select"
            className="form__calendar"
            selected={startDate}
            onChange={handleDate}
            dateFormat="dd.MM.yyyy"
          />
        </div>
        <div className="form__errorsWrapper">
          <input
            type="text"
            className="form__description"
            placeholder="Комментарий"
            name="description"
            value={transactionItem.description}
            onChange={handleInput}
            maxLength="24"
          />
          {errors.description && (
            <span className="form__descriptionError">{errors.description}</span>
          )}
        </div>
        <button className="form__add_btn">Добавить</button>
        <button className="form__cancel_btn" onClick={onToggleModal}>
          Отмена
        </button>
      </form>
      <div className="overlay" onClick={onToggleModal}></div>
    </>
  );
};

export default TransactionForm;
