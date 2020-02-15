import React from "react";
import PropTypes from "prop-types";

// styles
import { ButtonWrapper } from "./Button.styled";

const Button = ({ children, onClick, type }) => (
  <ButtonWrapper type={type} onClick={onClick}>
    {children}
  </ButtonWrapper>
);

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string
};
