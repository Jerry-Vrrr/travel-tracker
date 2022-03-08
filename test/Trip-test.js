// import chai from 'chai';
// const expect = chai.expect;
// import Trip from '../src/Trip.js';
//
// describe('Trip', () => {
//   let trip;
//   let trip2;
//   let testTravelersData;
//   let testTripsData;
//   let testDestinationsData;
//   let tripData = [{
// id: 1,
// userID: 44,
// destination: {
//   id: 1,
//   destination: 'Lima, Peru',
//   estimatedLodgingCostPerDay: 70,
//   estimatedFlightCostPerPerson: 400,
//   image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
//   alt: 'overview of city buildings with a clear sky'
// },
// travelerCount: 1,
// date: '2022/09/16',
// duration: 8,
// status: 'approved',
// activities: []
// },
// {
//   id: 1,
//   userID: 44,
//   destination: {
//     id: 2,
//     destination: 'Stockholm, Sweden',
//     estimatedLodgingCostPerDay: 100,
//     estimatedFlightCostPerPerson: 780,
//     image: 'https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
//     alt: 'city with boats on the water during the day time'
//   },
//   travelerCount: 1,
//   date: '2022/09/16',
//   duration: 8,
//   status: 'approved',
//   activities: []
// }
// ]
//   beforeEach(() => {
//     testTravelersData = [
//       {
//       "id": 44,
//       "name": "Ham Leadbeater",
//       "travelerType": "relaxer"
//       },
//       {
//       "id": 2,
//       "name": "Rachael Vaughten",
//       "travelerType": "thrill-seeker"
//     },
//     {
//     "id": 3,
//     "name": "",
//     "travelerType": "thrill-seeker"
//     }];
//     testTripsData = [
//     {
//     "id": 1,
//     "userID": 44,
//     "destinationID": 49,
//     "travelers": 1,
//     "date": "2022/09/16",
//     "duration": 8,
//     "status": "approved",
//     "suggestedActivities": []
//     },
//     {
//     "id": 2,
//     "userID": 35,
//     "destinationID": 25,
//     "travelers": 5,
//     "date": "2022/10/04",
//     "duration": 18,
//     "status": "approved",
//     "suggestedActivities": []
//     },
//     {
//     "id": 3,
//     "userID": 3,
//     "destinationID": 22,
//     "travelers": 4,
//     "date": "2022/05/22",
//     "duration": 17,
//     "status": "approved",
//     "suggestedActivities": []
//     },
//     {
//     "id": 4,
//     "userID": 43,
//     "destinationID": 14,
//     "travelers": 2,
//     "date": "2022/02/25",
//     "duration": 10,
//     "status": "approved",
//     "suggestedActivities": []
//    }
//   ]
//   testDestinationsData = [
//   {
//   "id": 49,
//   "destination": "Lima, Peru",
//   "estimatedLodgingCostPerDay": 70,
//   "estimatedFlightCostPerPerson": 400,
//   "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
//   "alt": "overview of city buildings with a clear sky"
//   },
//   {
//   "id": 2,
//   "destination": "Stockholm, Sweden",
//   "estimatedLodgingCostPerDay": 100,
//   "estimatedFlightCostPerPerson": 780,
//   "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//   "alt": "city with boats on the water during the day time"
//   },
//   {
//   "id": 3,
//   "destination": "Sydney, Austrailia",
//   "estimatedLodgingCostPerDay": 130,
//   "estimatedFlightCostPerPerson": 950,
//   "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//   "alt": "opera house and city buildings on the water with boats"
//   },
//   {
//   "id": 4,
//   "destination": "Cartagena, Colombia",
//   "estimatedLodgingCostPerDay": 65,
//   "estimatedFlightCostPerPerson": 350,
//   "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
//   "alt": "boats at a dock during the day time"
//   },
//   {
//   "id": 5,
//   "destination": "Madrid, Spain",
//   "estimatedLodgingCostPerDay": 150,
//   "estimatedFlightCostPerPerson": 650,
//   "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//   "alt": "city with clear skys and a road in the day time"
//   },
//   {
//   "id": 6,
//   "destination": "Jakarta, Indonesia",
//   "estimatedLodgingCostPerDay": 70,
//   "estimatedFlightCostPerPerson": 890,
//   "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//   "alt": "lit up city at night"
//   },]
//     trip = new Trip(tripData[0], testDestinationsData[6]);
//     trip2 = new Trip(tripData[3], testDestinationsData[0]);
//   })
//
//   it('should instantiate a new Trip', () => {
//     expect(trip).to.be.an.instanceof(Trip);
//     expect(trip2).to.be.an.instanceof(Trip);
//   })
//
//   it.only('should have a trip id, userID, travelerCount, trip date, duration, status and suggested activities', () => {
//     expect(trip.id).to.equal(1);
//     expect(trip.userID).to.equal(38);
//     expect(trip.travelerCount).to.equal(1);
//     expect(trip.date).to.equal('2019/09/16');
//     expect(trip.duration).to.equal(8);
//   })
// })
