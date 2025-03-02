//async await ------------------------------------
async function call_api2() {
    try {
      const response = await fetch(
        "https://handlers.education.launchcode.org/static/planets.json"
      );
      const planets = await response.json();
      const results = [];
      planets.forEach((planet) => {
        results.unshift(`<h6>${planet.name}</h6>`);
      });
      document.write(results.join(" "));
    } catch (error) {
      console.error(error);
    }
  }
  
  call_api2();

// call_apil();
//===========================================================
async function call_api2() {
    try {
      const response = await fetch(
        "https://handlers.education.launchcode.org/static/planets.json"
      );
      const planets = await response.json();
      const results = [];
      planets.forEach((planet) => {
        results.unshift(`<h6>${planet.name}</h6>`);
      });
      document.write(results.join(" "));
    } catch (error) {
      console.error(error);
    }
  }
  
  call_api2();