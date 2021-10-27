export const validateString = (str) => {
  const error = {
    message: '',
  };

  const trimmedStr = str.trim();

  if (trimmedStr?.length < 1) {
    error.message = 'String is empty or contains only spaces.';
    return { error };
  }

  if (trimmedStr?.length < 3) {
    error.message = 'String contains less than 3 characters';
    return { error };
  }

  return {};
};
