import { connect } from "react-redux";
import App from "../App";

const MapStateToProps = (state) => {
  console.log(state);

  return {
    counterData: state.counterData
  };
};
const AppContainer = connect(MapStateToProps)(App);

export default AppContainer;
