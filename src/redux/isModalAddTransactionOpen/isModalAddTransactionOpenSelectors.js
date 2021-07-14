const isModalAddTransactionOpen = state => state.isModalAddTransactionOpen;

const categoriesSelector = state => state.categories;
const tokenSelector = state => state.auth.user.token;

// eslint-disable-next-line import/no-anonymous-default-export
export default { isModalAddTransactionOpen, categoriesSelector, tokenSelector };
