import React, { Component } from "react";
import classes from "./MainContainer.module.css";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import FormContainer from "../FormContainer/FormContainer";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

class MainContainer extends Component {
  state = {
    isFormDisplayed: false,
    isBackdropDisplayed: false,
  };

  handleToggleFormAndBackdrop = () => {
    this.setState({
      isFormDisplayed: !this.state.isFormDisplayed,
      isBackdropDisplayed: !this.state.isBackdropDisplayed,
    });
  };

  render() {
    return (
      <div className={classes.MainContainer}>
        <ButtonContainer clicked={this.handleToggleFormAndBackdrop} />
        <FormContainer
          displayed={this.state.isFormDisplayed}
          clicked={this.handleToggleFormAndBackdrop}
        />
        <Backdrop
          displayed={this.state.isBackdropDisplayed}
          clicked={this.handleToggleFormAndBackdrop}
        />
      </div>
    );
  }
}

export default MainContainer;
