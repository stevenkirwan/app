import React from "react";
import PropTypes from 'prop-types';

// components
import Button from "../button/Button";

// styles
import {BannerWrapper} from "./Banner.styled";

const Banner = ({ title, onClick, showButton }) => (
  <BannerWrapper>
    <h1>{title}</h1>
    {showButton && <Button type="button" onClick={onClick}>Show another beer</Button>}
  </BannerWrapper>
);

export default Banner;

Banner.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  showButton: PropTypes.bool
}

Banner.defaultProps = {
  showButton: false
}