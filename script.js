var API = "https://restcountries.com/v3.1/all";

var get = fetch(API)
  .then((response) => response.json())
  .then((data) => {
    data.map((countries) => {
       let properties ={
        ...countries,
        name: countries.name.common,
        flag: countries.flags.png,
        code: countries.cioc,
        capital: countries.capital,
        region: countries.region,
        population: countries.population,
        latitude: countries.latlng[0],
        longitude: countries.latlng[1]
       }
      country(properties);
    });
  });

  function country({ name, flag, code, capital, region, population,latitude,longitude }) {
   
    document.body.innerHTML +=
    `<div class=" container row ">
      <div class="card col-sm">
      <h1 id="title" class="text-center">${name}</h1>
      <img src="${flag}" class="flag" alt="${name}'Flag image">
      <p><span>Captial :</span> ${capital}</p>
      <p><span>Region :</span> ${region}</p>
      <p><span>Country Code :</span>${code}</p>
      <p><span>Population :</span>${population}</p>
       <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click for Weather</a>
       <div id=${name}> </div>
       </div>
       </div>`
        }

  function block(lat,lng,name){

    var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`
   console.log(name)
   fetch(WAPI)
   .then((response) => response.json())
   .then((data)=> {
       alert(`
                 For ${name.id}  
       Current Humidity is ${data.main.humidity}
       Current Pressure is ${data.main.pressure}
       Current Temperature is ${data.main.temp}`)
      })
  }
  document.addEventListener("click",(event) => event.preventDefault())

