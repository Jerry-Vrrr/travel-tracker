
import './css/styles.css';
import Destinations from './Destinations';
import Travelers from './Travelers';
import Trip from './Trip';
import { getAllFetch, allTravelers, oneTraveler, allTrips, allDestinations } from './apiCalls.js'

// import './images/turing-logo.png'

//~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~

const upcomingTrp = document.querySelector("#upcomingTrp")
const presentTrp = document.querySelector("#presentTrp")
const pendingTrp = document.querySelector("#destinationDropDown")
const pastTrp = document.querySelector("#numTravelers")





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
}

// const getTodaysDate =() {
//   today = new Date();
// }

const show = (section) => {
  section.classList.toggle('hidden')
}

const hide = (section) => {
  section.classList.toggle('hidden')
}

window.addEventListener('load', onLoad)
