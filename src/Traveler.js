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

  sortTrips() {
    this.sortPresentTrips();
    this.sortPastTrips();
    this.sortPendingTrips();
    this.sortUpcomingTrips()
    console.log('past', this.past)
    console.log('pres', this.present)
    console.log('fut', this.upcoming)
    console.log('pen', this.pending)
  }

  sortPresentTrips() {
    this.allTrips.forEach(trip => {
      let today = this.todaysDate
      let tripDate = new Date(`${trip.date}`).getTime()
      if (tripDate == today && !this.present.includes(trip)) {
        this.present.push(trip);
      }
    })
  }

  sortUpcomingTrips() {
    this.allTrips.forEach(trip => {
      let tripDate = new Date(`${trip.date}`).getTime()
      let today = this.todaysDate
      console.log(today)
      if (tripDate < today && !this.past.includes(trip)) {
        this.past.push(trip);
      }
    })
  }

  sortPastTrips() {
    this.allTrips.forEach(trip => {
      let today = this.todaysDate
      let tripDate = new Date(`${trip.date}`).getTime()
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

  getThisYearsTripCost() {
  let date = new Date().toLocaleDateString("en-US").split("/")
  let yearlyTrips = this.allTrips.filter(trip => trip.date.includes(date[2]))
  let yearlyCost = yearlyTrips.reduce((acc, trip) => {
    trip.estimatedTripCost();
    acc += trip.tripCost;
    return acc;
  }, 0);
  return `You Have Spent $${yearlyCost} On Travel So Far This Year!`;
  }
}

export default Traveler;
