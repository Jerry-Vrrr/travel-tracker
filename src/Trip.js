class Trip {
  constructor(trip, destination) {
    this.id = trip.id;
  this.userID = trip.userID;
  this.destination = destination;
  this.travelerCount = trip.travelers;
  this.date = trip.date;
  this.duration = trip.duration;
  this.status = trip.status;
  this.activities = trip.suggestedActivities;
  this.tripStartDate;
  this.tripEndDate;
  this.tripCost;
  }
}


export default Trip;
