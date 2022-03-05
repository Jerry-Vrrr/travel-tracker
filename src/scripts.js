//~~~~~~~~~~~~IMPORTS~~~~~~~~~~~~~~~~~~~

import {greetUser} from './domUpdates.js';
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
const onLoad = () => {
  getAllFetch();
  Promise.all([allTravelers, oneTraveler, allTrips, allDestinations])
  .then(data => classInstantiation(data))
}

const classInstantiation = (data) => {
  const destinationsRepo = new Destinations(data[3].destinations)
  const travelersRepo = new Travelers(data[0].travelers)
  destinationsDropList(destinationsRepo.destinations)
  manageTravelerData(travelersRepo)
}

const manageTravelerData = () => {

  greetUser()
}
// const getTodaysDate =() {
//   today = new Date();
// }
const loginSubmit = () => {
  show(mainPage)
  hide(loginPage)
  verifyUser()
  // console.log('banana')
}

const verifyUser = (e) => {
  // e.preventDefault();
  const formData = new FormData(e.target);
  const userLogin = {
  username: formData.get('#username'),
  password: formData.get('#password'),
  }
  console.log(userLogin)
  e.target.reset();
  loginSubmit()
}

const hide = (section) => {
  section.classList.toggle('hidden')
}

const show = (section) => {
  section.classList.toggle('hidden')
}

submitLoginBtn.addEventListener('click', verifyUser)
window.addEventListener('load', onLoad)
