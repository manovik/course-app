export const convertDate = (date) => {
  const [dd, mm, yyyy] = date.split('/');
  const date1 = [mm, dd, yyyy].join('/');

  return new Date(date1).toLocaleDateString('ru-RU');
};
