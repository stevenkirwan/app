import React, { useState, useEffect } from "react";

// services
import { getRandomBeer, getBeer } from "../../services/api";

// components
import Loader from "../global/Loader/Loader";
import Banner from "../global/banner/Banner";
import BeerDetails from "../BeerDetails/BeerDetails";

const RandomBeer = () => {
  // state to hold the random beer
  const [beer, setBeer] = useState({});

  /*
   * when component mounts check if a beer id exists in localStorage
   * if it does display that beer if it doesn't get a random beer
   */
  useEffect(() => {
    const curBeer = localStorage.getItem("beerId");
    if (curBeer) {
      getBeer(curBeer).then(data => setBeer(data));
    } else {
      getRandomBeer().then(data => setBeer(data[0]));
    }
  }, []);

  // when the beer state updates add its Id to localstorage 
  useEffect(() => {
    localStorage.setItem("beerId", `${beer.id}`);
  }, [beer]);

  // function to get another random beer
  const getAnotherBeer = () => {
    getRandomBeer().then(data => setBeer(data[0]));
  };

  return (
    <section>
      <Banner
        onClick={getAnotherBeer}
        title="The Random Beer App"
        showButton={true}
        btnText="Show another beer"
      />
      {Object.keys(beer).length === 0 ? (
        <Loader />
      ) : (
        <BeerDetails
          name={beer.nameDisplay}
          description={beer.description}
          id={beer.breweries[0].id}
          brewery={beer.breweries}
          img={beer.labels && beer.labels.large}
        />
      )}
    </section>
  );
};

export default RandomBeer;
