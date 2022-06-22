const initialState = [];

const countryAPI = 'https://holidayapi.com/v1/countries?pretty&key=7328037f-a762-4564-98ea-5528896ce354';

export const addCountry = (country) => ({
  type: 'ADD_COUNTRY',
  country,
});

export const FetchCountry = () => (async (dispatch) => {
  const response = await fetch(countryAPI);
  const info = await response.json();
  const countryArray = [];
  info.countries.forEach((e) => {
    const country = {
      countryCode: e.code,
      countryName: e.name,
    };
    countryArray.push(country);
  });
  dispatch(addCountry(countryArray));
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTRY':
      return action.country;

    default:
      return state;
  }
};

export default reducer;
