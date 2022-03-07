//~~~~~~~~~~~~IMPORTS~~~~~~~~~~~~~~~~~~~
import {greetUser, displayYearlySpending, displayTrips, invalidLogin, loginSubmit, addDestinationsToForm} from './domUpdates.js';
import './css/styles.css';
import Destinations from './Destinations';
import Travelers from './Travelers';
import Traveler from './Traveler';
import Trip from './Trip';
import { getAllFetch, allTravelers, oneTraveler, allTrips, allDestinations, postTripRequest} from './apiCalls.js'
import './images/airplane-plane-pngrepo-com.png'

//~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~

const upcomingTrp = document.querySelector("#upcomingTrp")
const presentTrp = document.querySelector("#presentTrp")
const pendingTrp = document.querySelector("#destinationDropDown")
const pastTrp = document.querySelector("#numTravelers")
const submitLoginBtn = document.querySelector("#submitLoginBtn")
const loginPage = document.querySelector("#loginPage")
const mainPage = document.querySelector("#mainPage")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const startDate = document.querySelector("#startDate")
const tripDuration = document.querySelector("#tripDuration")
const numTravelers = document.querySelector("#numTravelers")
const bookBtn = document.querySelector("#bookBtn")

//~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~

let currentUserId;
let today = new Date().getTime()
let destinationsRepo;

const callOrder = () => {
getUserId()
}

const getUserId = () => {
  currentUserId = username.value.slice(8) - 1
  verifyUser()
  promiseAll()
}

const verifyUser = () => {
  let userLogin = username.value.slice(0,8)
  if (userLogin == 'traveler' && password.value ==  'travel') {
    loginSubmit()
  } else {
    invalidLogin()
  }
}

const promiseAll = () => {
  getAllFetch();
  Promise.all([allTravelers, oneTraveler, allTrips, allDestinations])
  .then(data => classInstantiation(data))
}

const classInstantiation = (data) => {
  destinationsRepo = new Destinations(data[3].destinations)
  const travelersRepo = new Travelers(data[0].travelers, today)
  const traveler = new Traveler(data[0].travelers[currentUserId], today)
  const tripRepo = data[2].trips
  manageTravelerData(traveler, tripRepo, destinationsRepo)
}

const manageTravelerData = (traveler, tripRepo, destinationsRepo) => {
  greetUser(traveler.getUserName())
  traveler.makeAllTrips(tripRepo, destinationsRepo.destinations)
  displayTrips(traveler)
  addDestinationsToForm(destinationsRepo.destinations)
  displayYearlySpending(traveler)
  traveler.sortTrips()
}

const getDestinationId = (destination) => {
const destinationID = destinationsRepo.destinations.filter(place => place.destination == destination)
return destinationID[0].id
}

const submitTripRequest = () => {
  const tripInfo = {
    id: Date.now(),
    userID: parseInt(currentUserId),
    destinationID: getDestinationId(destinationDropDown.value),
    travelers: parseInt(numTravelers.value),
    date: startDate.value.split("-").join("/"),
    duration: parseInt(tripDuration.value),
    status: 'pending',
    suggestedActivities: []
  };
  postTripRequest(tripInfo);
}

const resetInputs = () => {
  startDate.value = ''
  tripDuration.value = ''
  numTravelers.value = ''
  destinationDropDown.value = ''
}

bookBtn.addEventListener('click', submitTripRequest)
submitLoginBtn.addEventListener('click', callOrder)
export {resetInputs}
