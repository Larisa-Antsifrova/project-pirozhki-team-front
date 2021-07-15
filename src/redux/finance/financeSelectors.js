export const transactions = state => state.finance.transactions?.transactions;
export const totals = state => state.finance.transactions?.totals;
export const pagination = state => state.finance.transactions.pagination;
export const getStatistics = state => state.finance.statistics?.statistics;
export const costsIncomeTotals = state => state.finance.statistics?.totals;
export const isLoadingStatistic = state => state.finance.isLoadingStatistic;
