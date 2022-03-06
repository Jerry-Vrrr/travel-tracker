//~~~~~~~~~~~~IMPORTS~~~~~~~~~~~~~~~~~~~
import {greetUser, displayYearlySpending, displayTrips, invalidLogin, loginSubmit} from './domUpdates.js';
import './css/styles.css';
import Destinations from './Destinations';
import Travelers from './Travelers';
import Traveler from './Traveler';
import Trip from './Trip';
import { getAllFetch, allTravelers, oneTraveler, allTrips, allDestinations, destinationsDropList } from './apiCalls.js'
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
//~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~

const todaysDate = () => {
const today = new Date();
const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
return date
}

const onLoad = () => {
  getAllFetch();
  Promise.all([allTravelers, oneTraveler, allTrips, allDestinations])
  .then(data => classInstantiation(data))
}

const classInstantiation = (data) => {
  let date = todaysDate()
  const destinationsRepo = new Destinations(data[3].destinations)
  const travelersRepo = new Travelers(data[0].travelers, date)
  const traveler = new Traveler(data[0].travelers[1], date)
  const tripRepo = data[2].trips
  destinationsDropList(destinationsRepo.destinations)
  manageTravelerData(traveler, tripRepo, destinationsRepo)
}

const manageTravelerData = (traveler, tripRepo, destinationsRepo) => {
  greetUser(traveler.getUserName())
  displayYearlySpending(traveler.calculateYearlyTravelCost())
  traveler.makeAllTrips(tripRepo, destinationsRepo.destinations)
  displayTrips(traveler)
  // console.log(traveler.makeAllTrips(tripRepo, destinationsRepo.destinations))
}

const verifyUser = () => {
  let userLogin = username.value.slice(0,8)
  if (userLogin == 'traveler' && password.value ==  'travel') {
    loginSubmit()
  } else {
    invalidLogin()
  }
}

submitLoginBtn.addEventListener('click', verifyUser)
window.addEventListener('load', onLoad)
