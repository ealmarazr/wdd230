
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption-desc');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=49.74880&lon=6.63401&units=imperial&appid=648276dc852d1411613be08976455040"
async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data); 
      console.log(data); 
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }

}

function  displayResults(data) {
  currentTemp.innerHTML = `<h2>${data.list[0].main.temp}&deg;F</h2>`;
  
   captionDesc.innerHTML = `<h3>${data.list[0].weather[0].description}</h3>`; 
  
   const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`; 
   weatherIcon.innerHTML = iconsrc;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  captionDesc.textContent = descArr; 
   
}

apiFetch();
