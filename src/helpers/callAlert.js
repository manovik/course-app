export const callAlert = (fields) => {
  alert(
    `Please check next fields:\n${fields
      .map(([k, v]) => ` ${k} is "${v}"`)
      .join(',\n')}`
  );
};
