export const getDaysInMonth = (y, m) => {
  return m === 2
    ? y & 3 || (!(y % 25) && y & 15)
      ? 28
      : 29
    : 30 + ((m + (m >> 3)) & 1);
};

export const numberToLocalString = num => {
  return Number.isInteger(num)
    ? `${num.toLocaleString()}.00`
    : num.toLocaleString();
};

export const getMonth = today => String(today.getMonth() + 1).padStart(2, '0');
export const getYear = today => today.getFullYear();
