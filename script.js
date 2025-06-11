function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "0bdf910239ff418eb0d231459251106";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const location = `${data.location.name}, ${data.location.country}`;
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;

      document.getElementById("result").innerHTML = `
        <strong>Location:</strong> ${location}<br>
        <strong>Temperature:</strong> ${temp}°C<br>
        <strong>Condition:</strong> ${condition}
      `;
    })
    .catch(error => {
      document.getElementById("result").innerHTML = "Error: " + error.message;
    });
}
