const API_KEY = process.env.REACT_APP_API_KEY; 
const API_URL = process.env.REACT_APP_API_URL; 

// return a random beer
export const getRandomBeer = async () => {
  const URL = `${API_URL}beers/?order=random&randomCount=1&withBreweries=Y&hasLabels=Y&key=${API_KEY}`;
  let response = await fetch(URL);
  let data = await response.json();
  return data.data;
};

// get a brewey by ID
export const getBrewery = async (brewery) => {
  const URL = `${API_URL}brewery/${brewery}/?hasLabels=Y&key=${API_KEY}`;
  let response = await fetch(URL);
  let data = await response.json();
  return data.data;
};

// get beer by ID
export const getBeer = async (beer) => {
  const URL = `${API_URL}beer/${beer}/?withBreweries=Y&hasLabels=Y&key=${API_KEY}`;
  let response = await fetch(URL);
  let data = await response.json();
  return data.data;
};
