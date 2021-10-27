export const validateCourseFields = (course) => {
  const mappedEntries = Object.entries(course).map(([key, val]) => {
    if (typeof val === 'string' && val.trim().length > 2) {
      return true;
    } else if (typeof +val === 'number' && val > 0) {
      return true;
    } else if (Array.isArray(val) && val.length > 0) {
      return true;
    }
    return [key, val];
  });
  return mappedEntries.filter((el) => el !== true);
};
