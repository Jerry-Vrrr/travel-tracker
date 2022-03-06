const getTravelers = 'http://localhost:3001/api/v1/travelers'
const getSingleTraveler = 'http://localhost:3001/api/v1/travelers/10'
const getTrips = 'http://localhost:3001/api/v1/trips'
const getDestinations = 'http://localhost:3001/api/v1/destinations'

//~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~
const startDate = document.querySelector("#startDate")
const tripDuration = document.querySelector("#tripDuration")
const numTravelers = document.querySelector("#numTravelers")
const bookBtn = document.querySelector("#bookBtn")

//~~~~~~~~~~~~GLOBAL VARIABLES~~~~~~~~~~~
let allTravelers;
let oneTraveler;
let allTrips;
let allDestinations;

//~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~


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

const postTripRequest = (tripInfo) => {
  fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tripInfo)
  })
  .then(response => {
    return checkErrors(response)
  })
  .catch((error) => displayError(error))
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

const buttonFnc = () => {
  console.log('banana')
}

const submitTripRequest = (e) => {
  // e.preventDefault();
  console.log('banana')
  const tripInfo = {
    id: Date.now(),
    userID: currentTraveler.id,
    destinationID: destination.id,
    travelers: numTravelers.value,
    date: startDate.value,
    duration: tripDuration.value,
    status: trip.status,
  };
  postTripRequest(tripInfo);
  e.target.reset();
}

bookBtn.addEventListener('load', buttonFnc)
export { getAllFetch, allTravelers, oneTraveler, allTrips, allDestinations}
