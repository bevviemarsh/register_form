import { types, inputTypes } from "./types";
import React from "react";
import { Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const getButtonType = (btnType, styledFn, componentName) => {
  switch (btnType) {
    case types.CANCEL:
      return styledFn(componentName)`
        color: #f9f9f9;
        background: #322b57;
        :hover {
          background: #120f1f;
        }
      `;
    case types.CLEAR:
      return styledFn(componentName)`
        color: #322b57;
        background: #d1d0d8;
        :hover {
          background: #a5a3b2;
        }
      `;
    case types.CONFIRM:
      return styledFn(componentName)`
        color: #f9f9f9;
        background: #0da1a1;
        :hover {
          background: #086363;
        }
      `;
    default:
      break;
  }
};

export const inputFactory = (
  mainContainerClass,
  inputName,
  inputType,
  inputClass,
  inputStyled,
  placeholderValue
) => {
  return (
    <div className={mainContainerClass}>
      <Field
        name={inputName}
        type={inputType}
        className={inputClass}
        as={inputStyled}
        placeholder={placeholderValue}
      />
      <ErrorMessage name={inputName} />
    </div>
  );
};

export const labelFactory = (labelType) => {
  switch (labelType) {
    case inputTypes.FIRSTNAME:
      return <label htmlFor={inputTypes.FIRSTNAME}>First name</label>;
    case inputTypes.LASTNAME:
      return <label htmlFor={inputTypes.LASTNAME}>Last Name</label>;
    case inputTypes.EMAIL:
      return <label htmlFor={inputTypes.EMAIL}>Email Address</label>;
    case inputTypes.DATE:
      return <label htmlFor={inputTypes.DATE}>Date of Birth</label>;
    case inputTypes.CITY:
      return <label htmlFor={inputTypes.CITY}>City</label>;
    case inputTypes.COUNTRY:
      return <label htmlFor={inputTypes.COUNTRY}>Country</label>;
    default:
      break;
  }
};

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(35, "Must be 35 characters or less")
    .required("First Name is required"),
  lastName: Yup.string()
    .max(35, "Must be 35 characters or less")
    .required("Last Name is required"),
  email: Yup.string().email("Invalid e-mail").required("E-mail is required"),
  dateOfBirth: Yup.date()
    .max(new Date(), "You can't be older...")
    .required("Date is required"),
  city: Yup.string()
    .max(40, "Must be 40 characters or less")
    .required("City is required"),
  country: Yup.string()
    .max(40, "Must be 40 characters or less")
    .required("Country is required"),
});
