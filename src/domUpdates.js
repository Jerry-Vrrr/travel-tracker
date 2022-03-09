//~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~

const greeting = document.querySelector("#greeting")
const spending = document.querySelector("#spending")
const tripCards = document.querySelector('#cardContainer');
const loginMessage = document.querySelector('#loginMessage');
const loginSection = document.querySelector("#loginSection")
const mainPage = document.querySelector("#mainPage")

//~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~
const greetUser = (greetings) => {
  greeting.innerText = greetings
}

const displayError = (error) => {
  if (error.message === "Failed to fetch!") {
    errorTag.innerText = "OPPS, SORRY! Something went wrong!";
  } else {
    errorTag.innerText = error.message;
  }
}

const displayYearlySpending = (traveler) => {
  spending.innerText = traveler.getThisYearsTripCost()
}

const invalidLogin = () => {
  loginMessage.innerText = 'Invalid Login and/or Password. Try Again.'
}

const loginSubmit = () => {
  show(mainPage)
  hide(loginSection)
}

const displayAllTrips = (traveler) => {
  tripCards.innerHTML = '';
  let tripInfo = '';
  if (traveler.allTrips.length > 0) {
    traveler.allTrips.forEach(trip => {
      tripInfo += `
        <article class="trip-cards">
        <h2 class="filtered-trips">All Trips</h2>
        <div class="img-wrap">
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}><hr>
        </div>
        <h3 class="destination-name">${trip.destination.destination}</h3><hr>
        <p>Trip date: ${trip.date} <br>
        Travelers: ${trip.travelerCount} <br>
        Duration: ${trip.duration} <br>
        Status: ${trip.status} <br> </p>
        <a>Request activities from your travel agent!</a><hr>
        </article>
        `;
    })
  } else {
    tripInfo = `
        <h3 class="no-trips">You have no trips currently booked... <br>
        Use our nifty booking tool above to change that!</h3>`;
  }
  tripCards.insertAdjacentHTML('beforeend', tripInfo);
}

const displayUpcomingTrips = (traveler) => {
  tripCards.innerHTML = '';
  let tripInfo = '';
  if (traveler.upcoming.length > 0) {
    traveler.upcoming.forEach(trip => {
      tripInfo += `
          <article class="trip-cards">
          <h2 class="filtered-trips">Upcoming Trips</h2>
          <div class="img-wrap">
          <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}><hr>
          </div>
          <h3 class="destination-name">${trip.destination.destination}</h3><hr>
          <p>Trip date: ${trip.date} <br>
          Travelers: ${trip.travelerCount} <br>
          Duration: ${trip.duration} <br>
          Status: ${trip.status} <br> </p>
          <a>Request activities from your travel agent!</a><hr>
          </article>
          `;
    })
  } else {
    tripInfo = `
        <h3 class="no-trips">You have no trips currently booked... <br>
        Use our nifty booking tool above to change that!</h3>`;
  }
  tripCards.insertAdjacentHTML('beforeend', tripInfo);
}

const displayPastTrips = (traveler) => {
  tripCards.innerHTML = '';
  let tripInfo = '';
  if (traveler.past.length > 0) {
    traveler.past.forEach(trip => {
      tripInfo += `
          <article class="trip-cards">
          <h2 class="filtered-trips">Past Trips</h2>
          <div class="img-wrap">
          <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}><hr>
          </div>
          <h3 class="destination-name">${trip.destination.destination}</h3><hr>
          <p>Trip date: ${trip.date} <br>
          Travelers: ${trip.travelerCount} <br>
          Duration: ${trip.duration} <br>
          Status: ${trip.status} <br> </p>
          <a>Request activities from your travel agent!</a><hr>
          </article>
          `;
    })
  } else {
    tripInfo = `
          <h3 class="no-trips">You have no trips currently booked... <br>
          Use our nifty booking tool above to change that!</h3>`;
  }
  tripCards.insertAdjacentHTML('beforeend', tripInfo);
}

const displayPendingTrips = (traveler) => {
  tripCards.innerHTML = '';
  let tripInfo = '';
  if (traveler.pending.length > 0) {
    traveler.pending.forEach(trip => {
      tripInfo += `
        <article class="trip-cards">
        <h2 class="filtered-trips">Pending Trips</h2>
        <div class="img-wrap">
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}><hr>
        </div>
        <h3 class="destination-name">${trip.destination.destination}</h3><hr>
        <p>Trip date: ${trip.date} <br>
        Travelers: ${trip.travelerCount} <br>
        Duration: ${trip.duration} <br>
        Status: ${trip.status} <br> </p>
        <a>Request activities from your travel agent!</a><hr>
        </article>
        `;
    })
  } else {
    tripInfo = `
        <h3 class="no-trips">You have no pending trips.</h3>`;
  }
  tripCards.insertAdjacentHTML('beforeend', tripInfo);
}


const addDestinationsToForm = (destinations) => {
  const getDestination = destinations.forEach(destination => {
    const destinationOption = document.createElement('option');
    destinationOption.innerText = destination.destination;
    destinationOption.vale = destination.destination;
    destinationDropDown.appendChild(destinationOption);
  });
};

const hide = (section) => {
  section.classList.toggle('hidden')
}

const show = (section) => {
  section.classList.toggle('hidden')
}

export {
  greetUser,
  displayYearlySpending,
  displayAllTrips,
  displayUpcomingTrips,
  displayPastTrips,
  displayPendingTrips,
  invalidLogin,
  loginSubmit,
  addDestinationsToForm,
  displayError
}
