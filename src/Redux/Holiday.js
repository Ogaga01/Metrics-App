const initialState = [];

export const addHoliday = (holiday) => ({
  type: 'ADD_HOLIDAY',
  holiday,
});

export const FetchHoliday = (code) => (async (dispatch) => {
  const holidayAPI = `https://holidayapi.com/v1/holidays?pretty&key=7328037f-a762-4564-98ea-5528896ce354&country=${code}&year=2021`;
  const response = await fetch(holidayAPI);
  const info = await response.json();
  const holidayArray = [];
  info.holidays.forEach((e) => {
    const holiday = {
      holidayName: e.name,
      holidayDate: e.date,
    };
    holidayArray.push(holiday);
  });
  dispatch(addHoliday(holidayArray));
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOLIDAY':
      return action.holiday;

    default:
      return state;
  }
};

export default reducer;