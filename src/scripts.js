
import './css/styles.css';
import { getAllFetch, allTravelers, oneTraveler, allTrips, allDestinations } from './apiCalls.js'

// import './images/turing-logo.png'

const onLoad = () => {
  getAllFetch();
  Promise.all([allTravelers, oneTraveler, allTrips, allDestinations])
  .then(data => classInstantiation(data))
}

const classInstantiation = (data) => {
console.log(data)
}

window.addEventListener('load', onLoad)
