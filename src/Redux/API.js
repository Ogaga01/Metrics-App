import axios from 'axios';

const FetchCryptos = async () => {
  let data;
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: {
      'X-RapidAPI-Key': 'coinranking18a6f4ae791995ce47cdc583340e2c2de6066f84a8a55d06',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };

  await axios.request(options).then((response) => {
    data = response.data.data.coins.slice(0, 50);
  }).catch((error) => {
    data = error;
  });

  return data;
};

export default FetchCryptos;
