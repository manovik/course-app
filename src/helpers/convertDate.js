/* eslint-disable no-useless-escape */
export const convertDate = (date) =>
  new Date(date)
    .toLocaleString()
    .split(/\s/)[0]
    .replace(/[\\/\|\.]/g, '-')
    .replace(/,/, '');
