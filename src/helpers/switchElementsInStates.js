export const switchElementsInStates =
  (stateFrom, setStateFrom, stateTo, setStateTo) => (entity) => {
    const newList = [...stateTo];
    newList.push(entity);
    setStateTo(newList);

    const filteredList = stateFrom.filter((a) => a.id !== entity.id);
    setStateFrom(filteredList);
  };
