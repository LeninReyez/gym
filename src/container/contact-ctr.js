import Contact from "../components/Contact";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  //   console.log(
  //     `ContactContainer - mapStateToProps = ${state.contactListReducer.listData}`
  //   );
  return {
    // contactList: state.contactListReducer.listData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetData: () => {
      dispatch({ type: "GET_DATA" });
    }
  };
};

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;
