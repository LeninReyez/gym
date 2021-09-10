import apiCall from "../api/ApiTest";

const initialState = {
  listData: null
};

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      console.log("inside switch (reducer) ");
      return getData(state);
    default:
      return state;
  }
};

const getData = (state, action) => {
  console.log("Inside getData");
  let data = null;
  const apiResponse = apiCall().then((res) => (data = res));
  console.log("OUTISIDE THEN");
  console.log(apiResponse);
  return Object.assign({}, state, {
    listData: data
  });
};

export default contactListReducer;
