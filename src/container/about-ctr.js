import About from "../components/About";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(
    `about-ctr - mapStateToProps = ${state.countReducer.counterData}`
  );
  return {
    counterData: state.countReducer.counterData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => {
      console.log(`Container-Increment`);
      dispatch({ type: "INCREMENT" });
    },
    handleDecrementClick: () => {
      console.log(`Container-Decrement`);
      dispatch({ type: "DECREMENT" });
    }
  };
};

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutContainer;
