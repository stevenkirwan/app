import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

// services
import { getBrewery } from "../../services/api";

// component
import Banner from "../global/banner/Banner";
import Loader from "../global/Loader/Loader";

// styles
import { BeerDetailsWrapper } from "../BeerDetails/BeerDetails.styled";

const Brewery = () => {
  const [brewery, setBrewery] = useState({});
  const location = useLocation();

  // when component mounts get a random beer
  useEffect(() => {
    getBrewery(location.state).then(data => setBrewery(data));
  }, [location]);

  return Object.keys(brewery).length === 0 ? (
    <Loader />
  ) : (
    <>
      <Banner title="The Random Beer App" />
      <BeerDetailsWrapper>
        <div>
          <Link to="/">Back to beer</Link>
          <img
            src={brewery.images && brewery.images.large}
            alt={brewery.name}
          />
        </div>
        <div>
          <h2>{brewery.name}</h2>
          <p><strong>Established: {brewery.established}</strong></p>
          <p>{brewery.description}</p>
        </div>
      </BeerDetailsWrapper>
    </>
  );
};

export default Brewery;
