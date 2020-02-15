import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// styles
import { BeerDetailsWrapper } from "./BeerDetails.styled";

const BeerDetails = ({ name, description, id, brewery, img }) => (
  <BeerDetailsWrapper>
    <div>
      <img
        src={
          img
            ? `${img}`
            : "https://beta.daft.ie/static/images/fallbacks/no-image-size740x480.jpg"
        }
        alt={name}
      />
    </div>
    <div>
      <h2>{name}</h2>
      <p>{description ? description : "Description coming soon"}</p>
      <Link
        to={{
          pathname: `/brewery/${id}`,
          state: id
        }}
      >
        {brewery[0].name}
      </Link>
    </div>
  </BeerDetailsWrapper>
);

export default BeerDetails;

BeerDetails.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  brewery: PropTypes.array,
  img: PropTypes.string
};
