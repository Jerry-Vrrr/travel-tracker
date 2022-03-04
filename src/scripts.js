//~~~~~~~~~~~~IMPORTS~~~~~~~~~~~~~~~~~~~

import {greetUser, } from './domUpdates.js';
import './css/styles.css';
import Destinations from './Destinations';
import Travelers from './Travelers';
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

//~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~
const onLoad = () => {
  getAllFetch();
  Promise.all([allTravelers, oneTraveler, allTrips, allDestinations])
  .then(data => classInstantiation(data))
}

const classInstantiation = (data) => {
  const destinationsRepo = new Destinations(data[3].destinations)
  const travelersRepo = new Travelers(data[0].travelers)
  const tripRepo = new Trip(data[2])
  console.log()
  destinationsDropList(destinationsRepo.destinations)
}

// const getTodaysDate =() {
//   today = new Date();
// }
const loginSubmit = () => {
  show(mainPage)
  hide(loginPage)
  greetUser()
  // console.log('banana')
}

const hide = (section) => {
  section.classList.toggle('hidden')
}

const show = (section) => {
  section.classList.toggle('hidden')
}

submitLoginBtn.addEventListener('click', loginSubmit)
window.addEventListener('load', onLoad)
