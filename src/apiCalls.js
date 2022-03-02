const getTravelers = 'http://localhost:3001/api/v1/travelers'
const getSingleTraveler = 'http://localhost:3001/api/v1/travelers/10'
const getTrips = 'http://localhost:3001/api/v1/trips'
const getDestinations = 'http://localhost:3001/api/v1/destinations'

let allTravelers;
let oneTraveler;
let allTrips;
let allDestinations;

const getAllFetch = () => {
  allTravelers = fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  oneTraveler = fetch('http://localhost:3001/api/v1/travelers/10')
  .then(response => response.json())
  allTrips = fetch('http://localhost:3001/api/v1/trips')
  .then(response => response.json())
  allDestinations = fetch('http://localhost:3001/api/v1/destinations')
  .then(response => response.json())
  .catch((error) => {
    return displayError(error)
  })
}


const displayError = (error) => {
  if (error.message === "Failed to fetch!") {
    errorTag.innerText = "OPPS, SORRY! Something went wrong!";
  } else {
    errorTag.innerText = error.message;
  }
}

const checkErrors = (response) => {
  if (!response.ok) {
    throw new Error("Please make sure all fields are filled up!!!")
  } else {
    response.json()
  }
}
export { getAllFetch, allTravelers, oneTraveler, allTrips, allDestinations }
