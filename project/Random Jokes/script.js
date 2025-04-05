// Function to fetch a new joke
function getNewJoke() {
  fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(response => response.json())
      .then(data => {
          const jokeText = `${data.setup} - ${data.punchline}`;
          document.getElementById('joke-text').textContent = jokeText;
      })
      .catch(error => {
          console.error("Error fetching joke:", error);
          document.getElementById('joke-text').textContent = "Sorry, something went wrong!";
      });
}

// Fetch a new joke when the page loads
window.onload = getNewJoke;

// Add an event listener to the button for fetching a new joke
document.getElementById('new-joke-btn').addEventListener('click', getNewJoke);
