import React, { Component } from "react";
import classes from "./RegisterForm.module.css";
import { Formik, Form } from "formik";
import LabelContainer from "../../../containers/FormContainer/LabelContainer/LabelContainer";
import InputContainer from "../../../containers/FormContainer/InputContainer/InputContainer";
import { ThemeProvider } from "styled-components";
import {
  CancelButton,
  ClearButton,
  ConfirmButton,
  theme,
} from "../Button/Button";
import { Input } from "../Input/Input";
import {
  inputFactory,
  labelFactory,
  validationSchema,
} from "../../../utils/utils";
import { inputTypes, placeholderValues } from "../../../utils/types";

class RegisterForm extends Component {
  render() {
    return (
      <div className={classes.RegisterForm}>
        <h1 className={classes.Header}>Registration</h1>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            dateOfBirth: "",
            city: "",
            country: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setTimeout(() => {
              console.log(values);
            }, 400);
          }}
        >
          {({ values, isSubmitting, handleReset }) => (
            <Form className={classes.Form}>
              <div className={classes.InputsAndLabels}>
                <LabelContainer>
                  {labelFactory(inputTypes.FIRSTNAME)}
                  {labelFactory(inputTypes.LASTNAME)}
                  {labelFactory(inputTypes.EMAIL)}
                  {labelFactory(inputTypes.DATE)}
                  {labelFactory(inputTypes.CITY)}
                  {labelFactory(inputTypes.COUNTRY)}
                </LabelContainer>

                <InputContainer>
                  {inputFactory(
                    classes.FieldErrorContainer,
                    inputTypes.FIRSTNAME,
                    inputTypes.TEXT,
                    classes.Field,
                    Input,
                    placeholderValues.GEORGES,
                    inputTypes.FIRSTNAME
                  )}

                  {inputFactory(
                    classes.FieldErrorContainer,
                    inputTypes.LASTNAME,
                    inputTypes.TEXT,
                    classes.Field,
                    Input,
                    placeholderValues.VILLON,
                    inputTypes.LASTNAME
                  )}

                  {inputFactory(
                    classes.FieldErrorContainer,
                    inputTypes.EMAIL,
                    inputTypes.EMAIL,
                    classes.Field,
                    Input,
                    placeholderValues.EMAIL,
                    inputTypes.EMAIL
                  )}

                  {inputFactory(
                    classes.FieldErrorContainer,
                    inputTypes.BIRTHDATE,
                    inputTypes.DATE,
                    classes.Field,
                    Input,
                    placeholderValues.BIRTHDATE,
                    inputTypes.DATE
                  )}

                  {inputFactory(
                    classes.FieldErrorContainer,
                    inputTypes.CITY,
                    inputTypes.TEXT,
                    classes.Field,
                    Input,
                    placeholderValues.PARIS,
                    inputTypes.CITY
                  )}

                  {inputFactory(
                    classes.FieldErrorContainer,
                    inputTypes.COUNTRY,
                    inputTypes.TEXT,
                    classes.Field,
                    Input,
                    placeholderValues.FRANCE,
                    inputTypes.COUNTRY
                  )}
                </InputContainer>
              </div>

              <div className={classes.ConfirmationContainer}>
                <div className={classes.EmptyContainer}></div>
                <div className={classes.ConfirmationAlert}>
                  {isSubmitting
                    ? `Hello ${values.firstName}! You've registered successfully :)`
                    : null}
                </div>
              </div>

              <div className={classes.SubmitContainer}>
                <div className={classes.EmptyContainer}></div>
                <div className={classes.Buttons}>
                  <ThemeProvider theme={theme}>
                    <CancelButton onClick={this.props.clicked}>
                      Cancel
                    </CancelButton>
                    <ClearButton type="reset" onClick={handleReset}>
                      Clear
                    </ClearButton>
                    <ConfirmButton type="submit" disabled={isSubmitting}>
                      Confirm
                    </ConfirmButton>
                  </ThemeProvider>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default RegisterForm;
