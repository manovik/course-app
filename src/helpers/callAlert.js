export const callAlert = (fields) => {
  const fieldNotes = {
    title: {
      warn: 'Should have more then 2 characters.',
      name: 'Title',
    },
    description: {
      warn: 'Should be more then 2 characters.',
      name: 'Description',
    },
    duration: {
      warn: 'Should contain only numbers and be greater than 0.',
      name: 'Duration',
    },
    authors: {
      warn: 'Should contain at least 1 author.',
      name: 'Authors',
    },
  };

  alert(
    `Please check next fields:\n${fields
      .map(
        ([k, v]) => `${fieldNotes[k].name} is "${v}".\n${fieldNotes[k].warn}`
      )
      .join('\n\n')}`
  );
};
