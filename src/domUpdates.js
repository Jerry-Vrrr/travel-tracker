
//~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~
const greeting = document.querySelector("#greeting")
const spending = document.querySelector("#spending")
const tripCards = document.querySelector('#cardContainer');
const loginMessage = document.querySelector('#loginMessage');

const greetUser = (greetings) => {
  // console.log(greeting)
  greeting.innerText = greetings
}

const displayYearlySpending = (total) => {
  spending.innerText = total
}

const invalidLogin = () => {
  loginMessage.innerText = 'Invalid Login and/or Password. Try Again.'
}

const loginSubmit = () => {
  show(mainPage)
  hide(loginPage)
}

const displayTrips = (traveler) => {
  console.log(traveler)
    tripCards.innerHTML = '';
    let tripInfo = '';
    if (traveler.allTrips.length > 0) {
      traveler.allTrips.forEach(trip => {
        // const formattedDate = this.formatDate(trip.date);
        tripInfo += `
        <article class="trip-cards">
        <div class="img-wrap">
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}>
        </div>
        <h3 class="destination-name">${trip.destination.destination}</h3>
        <p>Trip date:  <br>
        Travelers: ${trip.travelerCount} <br>
        Duration: ${trip.duration} <br>
        Status: ${trip.status} <br> </p>
        <a>Request activities from your travel agent!</a>
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

  const hide = (section) => {
    section.classList.toggle('hidden')
  }

  const show = (section) => {
    section.classList.toggle('hidden')
  }
export {greetUser, displayYearlySpending, displayTrips, invalidLogin, loginSubmit}
