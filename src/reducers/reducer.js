const initialState = {
  counterData: 1
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return incrementData(state, action);
    default:
      return state;
  }
};

const incrementData = (state, action) => {
  return Object.assign({}, state, {
    counterData: state.counterData + 1
  });
};

export default countReducer;
