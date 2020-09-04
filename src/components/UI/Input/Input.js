import styled from "styled-components";

export const Input = styled.input`
  width: 25vw;
  height: 7vh;
  border-radius: 5px;
  background-color: #d1d0d8;
  border: none;
  outline: none;
  font-family: "Alata", sans-serif;
  padding: 10px;
  font-size: 2.5vh;
  color: #312c49;
  letter-spacing: 0.2vw;

  :focus {
    border: 2px solid #312c49;
  }

  ::placeholder {
    font-family: "Alata", sans-serif;
    padding: 10px;
    font-size: 2vh;
    color: #60568f;
    letter-spacing: 0.2vw;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    opacity: 0;
  }
`;
