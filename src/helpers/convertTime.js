const formatWithZero = (val) => (val < 10 ? `0${val}` : val.toString());

export const convertMinutesToTime = (givenMinutes) => {
  if (!parseInt(givenMinutes)) {
    return `00:00 hours`;
  }
  const minutesInHour = 60;
  const hours = Math.floor(givenMinutes / minutesInHour);
  const minutes = givenMinutes % minutesInHour;

  const resHours = formatWithZero(hours);
  const resMinutes = formatWithZero(minutes);
  return `${resHours}:${resMinutes} hours`;
};
