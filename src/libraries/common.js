export const getYesterdaysDate = () => {
  // Return yesterday based on GMT+900 (Seoul time)
  var yesterday = new Date();
  yesterday.setTime(yesterday.getTime() + 9 * 60 * 60000);
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().slice(0, 10);
};

export const getMinMaxDate = () => {
  let tempdate = new Date();
  // Switch to GMT+900
  tempdate.setTime(tempdate.getTime() + 9 * 60 * 60000);
  const maxDate = tempdate.toISOString().slice(0, 10);
  tempdate.setDate(tempdate.getDate() - 10);
  const minDate = tempdate.toISOString().slice(0, 10);

  return { minDate, maxDate };
};
