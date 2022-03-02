
import './css/styles.css';
import Destinations from './Destinations';
import Travelers from './Travelers';
import Trip from './Trip';
import { getAllFetch, allTravelers, oneTraveler, allTrips, allDestinations } from './apiCalls.js'

// import './images/turing-logo.png'

const onLoad = () => {
  getAllFetch();
  Promise.all([allTravelers, oneTraveler, allTrips, allDestinations])
  .then(data => classInstantiation(data))
}

const classInstantiation = (data) => {
  const destinationsRepo = new Destinations(data[3].destinations)
  const travelersRepo = new Travelers(data[0].travelers)
  const tripRepo = new Trip(data[2])
console.log(data[1])
}

window.addEventListener('load', onLoad)
