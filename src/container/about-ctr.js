import About from "../components/About";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(`mapStateToProps = ${state.counterData}`);
  return {
    counterData: state.counterData
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
