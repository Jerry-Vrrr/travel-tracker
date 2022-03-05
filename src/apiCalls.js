const getTravelers = 'http://localhost:3001/api/v1/travelers'
const getSingleTraveler = 'http://localhost:3001/api/v1/travelers/10'
const getTrips = 'http://localhost:3001/api/v1/trips'
const getDestinations = 'http://localhost:3001/api/v1/destinations'

//~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~
const startDate = document.querySelector("#startDate")
const tripDuration = document.querySelector("#tripDuration")
const destinationDropDown = document.querySelector("#destinationDropDown")
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
    // console.log(tripInfo)
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

const submitTripRequest = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const activityLog = {
    id: parseInt(formData.get('activity-id')),
    destinationID: parseInt(formData.get('destinationDropDown')),
    travelers: parseInt(formData.get('numTravelers')),
    date: formData.get('startDate'),
    duration: parseInt(formData.get('tripDuration')),
    status: formData.get('startDate'),
  };
  postTripRequest(tripInfo);
  e.target.reset();
  destinationDropDown()
}

const destinationsDropList = (destinations) => {
  let destinationList = destinations.map(destination => destination.destination)
  // dd1.innerHTML = '';
  // let loopList = destinationList.forEach(destination => {
  //   let newOption = document.createElement('option')
  //   newOption.value = destination.toLowerCase
  //   dd1.options.add(newOption)

  }

// console.log(destinationDropDown)
bookBtn.addEventListener('load', submitTripRequest)
export { getAllFetch, allTravelers, oneTraveler, allTrips, allDestinations, destinationsDropList }
