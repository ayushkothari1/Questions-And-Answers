const testPromise = new Promise((resolve, reject) => {
  const result = 5 + 5;
  if (result === 10) {
    resolve("Fulfilled");
  } else {
    reject({ message: "Something went wrong" });
  }
});

testPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

const apiUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true";
let isLoading = true;
fetch(apiUrl)
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error("error: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Temperature", data.current_weather.temperature);
  })
  .catch((error) => {
    console.error("error in catch", error);
  })
  .finally(() => {
    isLoading = false;
  });
