import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip.js';

describe('Trip', () => {
  let trip;
  let trip2;
  let tripData = [{
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
},
{
  id: 1,
  userID: 44,
  destination: {
    id: 2,
    destination: 'Stockholm, Sweden',
    estimatedLodgingCostPerDay: 100,
    estimatedFlightCostPerPerson: 780,
    image: 'https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    alt: 'city with boats on the water during the day time'
  },
  travelerCount: 1,
  date: '2022/09/16',
  duration: 8,
  status: 'approved',
  activities: []
}
]
  beforeEach(() => {
    trip = new Trip(tripData[0], destinationData[6]);
    trip2 = new Trip(tripData[3], destinationData[0]);
    done();
  })

  it('should instantiate a new Trip', () => {
    expect(trip).to.be.an.instanceof(Trip);
    expect(trip2).to.be.an.instanceof(Trip);
  })

  it('should have a trip id, userID, travelerCount, trip date, duration, status and suggested activities', () => {
    expect(trip.id).to.equal(1);
    expect(trip.userID).to.equal(38);
    expect(trip.travelerCount).to.equal(1);
    expect(trip.date).to.equal('2019/09/16');
    expect(trip.duration).to.equal(8);
  })
})
