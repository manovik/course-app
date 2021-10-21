const formatWithZero = (val) => (val < 10 ? `0${val}` : val.toString());

export const convertMinutesToTime = (givenMinutes) => {
  const minutesInHour = 60;
  const hours = Math.floor(givenMinutes / minutesInHour);
  const minutes = givenMinutes % minutesInHour;

  const resHours = formatWithZero(hours);
  const resMinutes = formatWithZero(minutes);
  return hours > 0
    ? `${resHours}:${resMinutes} hours`
    : `${resMinutes} minutes`;
};
