import axios from "axios";

export const fetchData = async (movie) => {
  const movieFetch = await axios.get(
    `https://api.tvmaze.com/singlesearch/shows/?q=${movie}&embed=episodes`
  );
  return movieFetch.data;
};

export const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};

export const stringShortener = (number) => {
  if (number.summary.length > 100 && number.summary !== null) {
    return number.summary.substring(3, 100) + "...";
  }
  return number.summary;
};
