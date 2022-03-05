import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler.js';
import Trip from '../src/Trip.js';
import {testDestinationsData, testTripsData, testTravelersData} from './test-data.js'

describe('Traveler', () => {
  let traveler;
  let traveler2;
  let today = new Date()
  let testTravelersData;
  let testTripsData;
  let testDestinationsData;
  // let today = new Date()
  beforeEach(() => {
  testTravelersData = [
    {
    "id": 44,
    "name": "Ham Leadbeater",
    "travelerType": "relaxer"
    },
    {
    "id": 2,
    "name": "Rachael Vaughten",
    "travelerType": "thrill-seeker"
  },
  {
  "id": 3,
  "name": "",
  "travelerType": "thrill-seeker"
  }];
  testTripsData = [
  {
  "id": 1,
  "userID": 44,
  "destinationID": 49,
  "travelers": 1,
  "date": "2022/09/16",
  "duration": 8,
  "status": "approved",
  "suggestedActivities": []
  },
  {
  "id": 2,
  "userID": 35,
  "destinationID": 25,
  "travelers": 5,
  "date": "2022/10/04",
  "duration": 18,
  "status": "approved",
  "suggestedActivities": []
  },
  {
  "id": 3,
  "userID": 3,
  "destinationID": 22,
  "travelers": 4,
  "date": "2022/05/22",
  "duration": 17,
  "status": "approved",
  "suggestedActivities": []
  },
  {
  "id": 4,
  "userID": 43,
  "destinationID": 14,
  "travelers": 2,
  "date": "2022/02/25",
  "duration": 10,
  "status": "approved",
  "suggestedActivities": []
 }
]
testDestinationsData = [
{
"id": 1,
"destination": "Lima, Peru",
"estimatedLodgingCostPerDay": 70,
"estimatedFlightCostPerPerson": 400,
"image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
"alt": "overview of city buildings with a clear sky"
},
{
"id": 2,
"destination": "Stockholm, Sweden",
"estimatedLodgingCostPerDay": 100,
"estimatedFlightCostPerPerson": 780,
"image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
"alt": "city with boats on the water during the day time"
},
{
"id": 3,
"destination": "Sydney, Austrailia",
"estimatedLodgingCostPerDay": 130,
"estimatedFlightCostPerPerson": 950,
"image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
"alt": "opera house and city buildings on the water with boats"
},
{
"id": 4,
"destination": "Cartagena, Colombia",
"estimatedLodgingCostPerDay": 65,
"estimatedFlightCostPerPerson": 350,
"image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
"alt": "boats at a dock during the day time"
},
{
"id": 5,
"destination": "Madrid, Spain",
"estimatedLodgingCostPerDay": 150,
"estimatedFlightCostPerPerson": 650,
"image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
"alt": "city with clear skys and a road in the day time"
},
{
"id": 6,
"destination": "Jakarta, Indonesia",
"estimatedLodgingCostPerDay": 70,
"estimatedFlightCostPerPerson": 890,
"image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
"alt": "lit up city at night"
},]

    traveler = new Traveler(testTravelersData[0], today);
    traveler2 = new Traveler(testTravelersData[1], today);
  })

  it('should be an instantiation of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
    expect(traveler2).to.be.an.instanceOf(Traveler);
  });

  it('should return a first name', () => {
    expect(traveler.getUserName()).to.equal('Ham');
    expect(traveler2.getUserName()).to.equal('Rachael');
  });

  it('should not return an empty name', () => {
    let traveler0 = new Traveler(testTravelersData[2], today)
    expect(traveler.getUserName()).to.equal('Ham');
    expect(traveler0.getUserName()).to.equal('Hi, Friend Please Add Your Name To Your User Profile');
  });

  it('should have an id, name, and traveler type', () => {
    expect(traveler.id).to.equal(44);
    expect(traveler.name).to.equal('Ham Leadbeater');
    expect(traveler.type).to.equal('relaxer');
    expect(traveler2.id).to.equal(2);
    expect(traveler2.name).to.equal('Rachael Vaughten');
    expect(traveler2.type).to.equal('thrill-seeker');
  });

  it('should create a list of instantiations of the users trips', () => {
    traveler.makeAllTrips(testTripsData, testDestinationsData);
    expect(traveler.allTrips[0]).to.be.an.instanceOf(Trip);
    expect(traveler2.allTrips.length).to.equal(0)
    expect(traveler.allTrips.length).to.equal(6)
    expect(traveler.allTrips[0]).to.deep.equal( {
  id: 1,
  userID: 44,
  destination: {
    id: 1,
    destination: 'Lima, Peru',
    estimatedLodgingCostPerDay: 70,
    estimatedFlightCostPerPerson: 400,
    image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
    alt: 'overview of city buildings with a clear sky'
  },
  travelerCount: 1,
  date: '2022/09/16',
  duration: 8,
  status: 'approved',
  activities: []
  })
})

  it.only('should be able to sort out present, upcoming, past, and pending trips', () => {
    traveler.makeAllTrips(testTripsData, testDestinationsData);
    traveler.sortAllTrips();
    expect(traveler.present.length).to.equal(1);
    expect(traveler.upcoming.length).to.equal(1);
    expect(traveler.pending.length).to.equal(1);
    expect(traveler.past.length).to.equal(1);

    traveler2.makeAllTrips(testTripsData, testDestinationsData);
    traveler2.sortAllTrips();
    expect(traveler2.present.length).to.equal(0);
    expect(traveler2.upcoming.length).to.equal(0);
    expect(traveler2.pending.length).to.equal(1);
    expect(traveler2.past.length).to.equal(4);
  })

  it('should be able to calculate amount of money spend in last 365 days', () => {
    traveler.makeAllTrips(testTripsData, testDestinationsData);
    expect(traveler.calculateYearlyTravelCost()).to.equal(9570);
  });
})
