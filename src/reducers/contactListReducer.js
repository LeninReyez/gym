import fetchData from "../api/ApiTest";

const initialState = {
  listData: null
};

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      console.log(
        `**************************contactListReducer =  ${state.listData}`
      );

      return getData(state);
    default:
      return state;
  }
};

const getData = (state, action) => {
  return Object.assign({}, state, {
    listData: action.result
  });
};

export default contactListReducer;
