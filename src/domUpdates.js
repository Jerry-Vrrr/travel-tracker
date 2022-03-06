
//~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~
const greeting = document.querySelector("#greeting")
const spending = document.querySelector("#spending")
const tripCards = document.querySelector('.card-container');


const greetUser = (greetings) => {
  // console.log(greeting)
  greeting.innerText = greetings
}

const displayYearlySpending = (total) => {
  spending.innerText = total
}

const displayTrips = (currentUser) => {
    tripCards.innerHTML = '';
    let tripInfo = '';
    if (currentUser.allTrips.length > 0) {
      currentUser.allTrips.forEach(trip => {
        const formattedDate = this.formatDate(trip.date);
        tripInfo += `
        <article class="trip-cards">
        <div class="img-wrap">
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}>
        </div>
        <h3 class="destination-name">${trip.destination.destination}</h3>
        <p>Trip date: ${formattedDate} <br>
        Travelers: ${trip.travelerCount} <br>
        Duration: ${trip.duration} <br>
        Status: ${trip.status} <br> </p>
        <a>Request activities from your travel agent!</a>
        </article>
        `;
      })
    } else {
      tripInfo = `
        <h3 class="no-trips">You do not have any trips :( <br>
        Plan one above!</h3>`;
    }
    tripCards.insertAdjacentHTML('beforeend', tripInfo);
  }

export {greetUser, displayYearlySpending, displayTrips}
