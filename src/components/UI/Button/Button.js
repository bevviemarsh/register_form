import styled from "styled-components";
import { getButtonType } from "../../../utils/utils";
import { types } from "../../../utils/types";

export const Button = styled.button`
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  background: ${(props) => props.theme.background};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  letter-spacing: ${(props) => props.theme.letterSpacing};
  font-family: "Alata", sans-serif;
  font-size: ${(props) => props.theme.fontSize};
  box-shadow: ${(props) => props.theme.boxShadow};
  cursor: pointer;
  outline: none;
  transition: ${(props) => props.theme.transition};
`;

Button.defaultProps = {
  theme: {
    width: "20vw",
    height: "10vh",
    background: "#f9f9f9",
    color: "#322b57",
    letterSpacing: "0.5vh",
    fontSize: "2.2vh",
    boxShadow: "0px 5px 5px 0px #322b57",
    transition: "none",
  },
};

export const theme = {
  width: "10vw",
  height: "7vh",
  background: "#f9f9f9",
  color: "#322b57",
  letterSpacing: "0.3vh",
  fontSize: "2vh",
  boxShadow: "none",
  transition: "0.3s",
};

export const CancelButton = getButtonType(types.CANCEL, styled, Button);
export const ClearButton = getButtonType(types.CLEAR, styled, Button);
export const ConfirmButton = getButtonType(types.CONFIRM, styled, Button);
