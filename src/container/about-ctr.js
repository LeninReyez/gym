import About from "../components/About";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counterData: state.counterData
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
//     handleDecrementClick: () => dispatch({ type: "DECREMENT" })
//   };
// };

const AboutContainer = connect(mapStateToProps)(About);

export default AboutContainer;
