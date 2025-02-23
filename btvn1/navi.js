window.addEventListener("DOMContentLoaded", function() {
    const planetDataURL = "https://handlers.education.launchcode.org/static/planets.json";
    const destinationDiv = document.getElementById("destination");
  
    fetch(planetDataURL)
      .then(response => response.json())
      .then(planets => {
        let currentPlanetIndex = 0;
  
        function displayPlanet(index) {
          const planet = planets[index];
          destinationDiv.innerHTML = `
            <h3>${planet.name}</h3>
            <img src="${planet.image}" alt="${planet.name}" width="200">
          `;
        }
  
        displayPlanet(currentPlanetIndex);
  
        destinationDiv.addEventListener("click", function() {
          currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
          displayPlanet(currentPlanetIndex);
        });
      })
      .catch(error => {
        console.error("Lỗi khi lấy dữ liệu hành tinh:", error);
        destinationDiv.innerHTML = "<h3>Lỗi khi lấy dữ liệu.</h3>";
      });
  });