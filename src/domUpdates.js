//~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~
const greeting = document.querySelector("#greeting")
const spending = document.querySelector("#spending")
const tripCards = document.querySelector('#cardContainer');
const loginMessage = document.querySelector('#loginMessage');
const loginSection = document.querySelector("#loginSection")
const destinationDropDown = document.querySelector("#destinationDropDown")

const greetUser = (greetings) => {
  greeting.innerText = greetings
}

const displayYearlySpending = (traveler) => {
  spending.innerText = traveler.getThisYearsTripCost()
}

const invalidLogin = () => {
  loginMessage.innerText = 'Invalid Login and/or Password. Try Again.'
}

const loginSubmit = () => {
  show(mainPage)
  hide(loginPage)
  hide(loginSection)
}

const displayTrips = (traveler) => {
    tripCards.innerHTML = '';
    let tripInfo = '';
    if (traveler.allTrips.length > 0) {
      traveler.allTrips.forEach(trip => {
        // const formattedDate = this.formatDate(trip.date);
        tripInfo += `
        <article class="trip-cards">
        <div class="img-wrap">
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}><hr>
        </div>
        <h3 class="destination-name">${trip.destination.destination}</h3><hr>
        <p>Trip date:  <br>
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
export {greetUser, displayYearlySpending, displayTrips, invalidLogin, loginSubmit, addDestinationsToForm}
