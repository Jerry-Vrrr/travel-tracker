import Trip from './Trip.js';

class Traveler {
  constructor(travelerData, today) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.allTrips = [];
    this.upcoming = [];
    this.present = [];
    this.past = [];
    this.pending = [];
    this.todaysDate = 0;
  }

  makeAllTrips(trips, destinations) {
    let currentDestination;
    trips.forEach(trip => {
      destinations.forEach(location => {
          currentDestination = location;
          this.allTrips.push(new Trip(trip, currentDestination));
      })
    })
    console.log(this.allTrips)
    return this.allTrips
  }


}


export default Traveler;
