import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { modalAddTransactionOpen } from '../../redux/isModalAddTransactionOpen/isModalAddTransactionOpenActions';
import { fetchCategories } from '../../redux/categories/categoriesOperations';
import {
  incomeCategories,
  expenseCategories,
} from '../../redux/categories/categoriesSelectors';
import { addTransaction } from '../../redux/transaction/transactionOperations';

import 'react-datepicker/dist/react-datepicker.css';
import './ModalAddTransaction.scss';
import './transactionFormSelect.scss';
import './transactionFormDatepicker.scss';

const initialState = {
  date: moment(new Date()).format('yyyy-MM-DD'),
  income: true,
  category: '',
  comment: '',
  sum: '',
};

const TransactionForm = () => {
  const dispatch = useDispatch();

  const incomeCategoriesList = useSelector(incomeCategories);
  console.log('incomeCategoriesList', incomeCategoriesList);

  const expenseCategoriesList = useSelector(expenseCategories);
  console.log('expenseCategoriesList', expenseCategoriesList);

  const [transactionItem, setTransactionItem] = useState(initialState);
  const [startDate, setStartDate] = useState(new Date());
  const [checkedBox, setCheckedBox] = useState(false);
  const [errors, setErrors] = useState({});

  console.log('transactionItem', transactionItem);

  useEffect(() => dispatch(fetchCategories()), [dispatch]);

  const onToggleModal = () => dispatch(modalAddTransactionOpen());

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

    setTransactionItem(state => ({ ...state, income: checkedBox }));
  };

  const validate = (sum, category, income, comment) => {
    const errors = {};

    if (sum.length === 0) {
      errors.sum = 'Введите число!';
    }

    if (income === true && category === '') {
      errors.category = 'Категория не выбрана!';
    }

    if (comment.length > 24) {
      errors.comment = 'Делай описание лаконичнее!';
    }

    setErrors(errors);

    return !!Object.keys(errors).length;
  };

  const handleDate = date => {
    setStartDate(date);

    const formatedDate = moment(date).format('yyyy-MM-DD');

    setTransactionItem(state => ({
      ...state,
      date: formatedDate,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const {
      date,
      income,
      sum,
      category: { value: category },
      comment,
    } = transactionItem;

    // const validateResult = validate(sum, category, income, comment);

    // if (!validateResult) {
    //   if (event.target[1].checked) {
    //     transactionItem.category = transactionItem.category.value;
    //   }

    transactionItem.sum = Number(transactionItem.sum);

    dispatch(
      addTransaction({
        date,
        income,
        sum,
        category,
        comment,
      }),
    );

    console.log('Sent transaction', {
      date,
      income,
      sum,
      category,
      comment,
    });

    // onToggleModal();
    // }
    // console.log('validateResult', validateResult);
    // return validateResult;
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
        <div className="form__errorsWrapper">
          <Select
            className="select"
            classNamePrefix="selectprefix"
            options={
              transactionItem.income
                ? incomeCategoriesList
                : expenseCategoriesList
            }
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

        <div className="form__acBox">
          <div className="form__errorsWrapper">
            <input
              type="text"
              className="form__amount"
              placeholder="0.00"
              name="sum"
              value={transactionItem.sum}
              onChange={handleInputAmount}
            />
            {errors.sum && (
              <span className="form__amountError">{errors.sum}</span>
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
            name="comment"
            value={transactionItem.comment}
            onChange={handleInput}
            maxLength="24"
          />
          {errors.comment && (
            <span className="form__descriptionError">{errors.comment}</span>
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
