import Trip from './Trip.js';

class Traveler {
  constructor(travelerData, date) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.allTrips = [];
    this.upcoming = [];
    this.present = [];
    this.past = [];
    this.pending = [];
    this.todaysDate = date;
  }

  makeAllTrips(trips, destinations) {
    let currentDestination;
    let filteredTrips = trips.filter(trip => trip.userID === this.id);
    filteredTrips.forEach(trip => {
      destinations.forEach(location => {
        if (trip.destinationID === location.id) {
          currentDestination = location;
          this.allTrips.push(new Trip(trip, currentDestination));
        }
      })
    })
    return this.allTrips
  }

  getUserName() {
  if (!this.name) {
    return 'Hi, Friend! Please Add Your Name To Your User Profile!'
  }
    let name = this.name
    let firstName = name.split(' ')
    return `Welcome, ${firstName[0]}! Ready To Wander?`
  }

  calculateYearlyTravelCost() {
    let pastYearTrips = this.allTrips.filter(trip => {
      trip.findTripDuration();
      let yearStart = (this.todaysDate).setDate(new Date(this.todaysDate).getDate() - 365);
      if (trip.tripStartDate > yearStart) {
        return trip;
      }
    });
    const totalCost = pastYearTrips.reduce((annualSpent, trip) => {
      trip.estimatedTripCost();
      annualSpent += trip.tripCost;
      return annualSpent;
    }, 0);
    return `You Have Spent $${totalCost} On Travel So Far This Year! Keep Up The Good Work!`;
  }

  sortTrips() {
    this.sortPresentTrips();
    this.sortPastTrips();
    this.sortPendingTrips();
    this.sortUpcomingTrips()
    // console.log('past', this.past)
    // console.log('present', this.present)
    // console.log('future', this.upcoming)
  }

  sortPresentTrips() {
    this.allTrips.forEach(trip => {
      let today = this.todaysDate
      let tripDate = trip.date.split('/').join("")
      if (tripDate == today && !this.present.includes(trip)) {
        this.present.push(trip);
      }
    })
  }

  sortUpcomingTrips() {
    this.allTrips.forEach(trip => {
      let tripDate = trip.date.split('/').join("")
      let today = this.todaysDate
      if (tripDate < today && !this.past.includes(trip)) {
        this.past.push(trip);
      }
    })
  }

  sortPastTrips() {
    this.allTrips.forEach(trip => {
      let today = this.todaysDate
      let tripDate = trip.date.split('/').join("")
      if (tripDate > today && !this.upcoming.includes(trip)) {
        this.upcoming.push(trip);
      }
    })
  }

  sortPendingTrips() {
    let pendingTrips = this.allTrips.filter(trip => trip.status === 'pending');
    pendingTrips.forEach(trip => {
      if (!this.pending.includes(trip)) {
        this.pending.push(trip);
      }
    })
  }

}

export default Traveler;
