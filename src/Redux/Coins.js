const GET = 'GET_COINS';

// Reducers
export default function coinReducer(state = [], action = {}) {
  switch (action.type) {
    case GET:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export function SetCoins(coins) {
  return { type: GET, payload: coins };
}

export const CoinList = (state) => state.coins;
