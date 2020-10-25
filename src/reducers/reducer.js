const initialState = {
  counterData: 0
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("REDUCER - INCREMENT");
      return incrementData(state);
    case "DECREMENT":
      console.log("REDUCER - DECREMENT");
      return decrementData(state);
    default:
      return state;
  }
};

const incrementData = (state, action) => {
  return Object.assign({}, state, {
    counterData: state.counterData + 1
  });
};

const decrementData = (state, action) => {
  return Object.assign({}, state, {
    counterData: state.counterData - 1
  });
};

export default countReducer;
