import { FETCH_WEATHER } from '../actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data]);
      break;
    default:
      return state;
      break;
  }
};
