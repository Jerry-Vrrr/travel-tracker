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
    return this.allTrips
  }

  getUserName() {
  if (!this.name) {
    return 'Hi, Friend Please Add Your Name To Your User Profile'
  }
    let name = this.name
    let firstName = name.split(' ')
    return firstName[0]
  }

  calculateYearlyTravelCost() {
    let pastYearTrips = this.allTrips.filter(trip => {
      trip.findTripDuration();
      let yearStart = new Date(this.todaysDate).setDate(new Date(this.todaysDate).getDate() - 365);
      if (trip.tripStartDate > yearStart) {
        return trip;
      }
    });

    const annual = pastYearTrips.reduce((annualSpent, trip) => {
      trip.estimatedTripCost();
      annualSpent += trip.tripCost;
      return annualSpent;
    }, 0);

    return annual;
  
  }
}


export default Traveler;
