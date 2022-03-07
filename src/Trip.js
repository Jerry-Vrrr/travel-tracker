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

  estimatedTripCost() {
      const totalLodging = this.destination.estimatedLodgingCostPerDay * this.duration;
      const totalFlight = this.destination.estimatedFlightCostPerPerson * this.travelerCount;
      const tripCost = totalLodging + totalFlight;
      const costWithAgentFee = tripCost + (tripCost * .10);
      this.tripCost = costWithAgentFee;
      return costWithAgentFee;
    }

    findTripDuration() {
      let tripStart = new Date(this.date);
      let tripEnd = new Date(this.date)
      this.tripStartDate = tripStart;
      this.tripEndDate = tripEnd;
    }

}

export default Trip;
