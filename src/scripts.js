//~~~~~~~~~~~~IMPORTS~~~~~~~~~~~~~~~~~~~
import {greetUser, displayYearlySpending, displayAllTrips, displayUpcomingTrips,
  displayPastTrips, displayPendingTrips, invalidLogin, loginSubmit, addDestinationsToForm} from './domUpdates.js';
import './css/styles.css';
import Destinations from './Destinations';
import Travelers from './Travelers';
import Traveler from './Traveler';
import { getAllFetch, allTravelers, oneTraveler, allTrips, allDestinations, postTripRequest} from './apiCalls.js'
import './images/airplane-plane-pngrepo-com.png'

//~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~

const upcomingTrp = document.querySelector("#upcomingTrp")
const allTrp = document.querySelector("#allTrp")
const pendingTrp = document.querySelector("#pendingTrp")
const pastTrp = document.querySelector("#pastTrp")
const submitLoginBtn = document.querySelector("#submitLoginBtn")
const logoutBtn = document.querySelector("#logoutBtn")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const startDate = document.querySelector("#startDate")
const tripDuration = document.querySelector("#tripDuration")
const numTravelers = document.querySelector("#numTravelers")
const bookBtn = document.querySelector("#bookBtn")

//~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~

let currentUserId;
let today = new Date().getTime();
let destinationsRepo;
let traveler;

const getUserId = () => {
  currentUserId = username.value.slice(8) - 1
  verifyUser()
  promiseAll()
}

const verifyUser = () => {
  let userLogin = username.value.slice(0,8)
  if (userLogin === 'traveler' && password.value ===  'travel') {
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
  traveler = new Traveler(data[0].travelers[currentUserId], today)
  const tripRepo = data[2].trips
  manageTravelerData(traveler, tripRepo, destinationsRepo)
}

const manageTravelerData = (traveler, tripRepo, destinationsRepo) => {
  greetUser(traveler.getUserName())
  traveler.makeAllTrips(tripRepo, destinationsRepo.destinations)
  displayAllTrips(traveler)
  addDestinationsToForm(destinationsRepo.destinations)
  displayYearlySpending(traveler)
  traveler.sortTrips()
}

const getDestinationId = (destination) => {
const destinationID = destinationsRepo.destinations.filter(place => place.destination === destination)
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
  postTripRequest(tripInfo).then((data) => {
    resetInputs()
  })
}

const resetInputs = () => {
  startDate.value = ''
  tripDuration.value = ''
  numTravelers.value = ''
  destinationDropDown.value = ''
  displayPendingTrips(traveler)
}

const logoutUser = () => {
  location.reload()
}

const sendAllTrips = () => {
  displayAllTrips(traveler)
}
const sendUpcomingTrips = () => {
  displayUpcomingTrips(traveler)
}
const sendPastTrips = () => {
  displayPastTrips(traveler)
}
const sendPendingTrips = () => {
  displayPendingTrips(traveler)
}

upcomingTrp.addEventListener('click', sendUpcomingTrips)
allTrp.addEventListener('click', sendAllTrips)
pastTrp.addEventListener('click', sendPastTrips)
pendingTrp.addEventListener('click', sendPendingTrips)
bookBtn.addEventListener('click', submitTripRequest)
submitLoginBtn.addEventListener('click', getUserId)
logoutBtn.addEventListener('click', logoutUser)
export {resetInputs, promiseAll}
