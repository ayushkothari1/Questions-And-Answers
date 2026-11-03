const apiUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true";

let isLoading = true;
async function myFunction() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("error: " + response.status);
    }
    const data = await response.json();
    console.log("Temprature: ", data.current_weather.temperature);
  } catch (error) {
    console.error(error);
  } finally {
    // Runs once promise is settled

    isLoading = false;
  }
}
myFunction();
