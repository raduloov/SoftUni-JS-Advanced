async function attachEvents() {
  const locationInput = document.getElementById('location');
  const getBtn = document.getElementById('submit');
  const forecastEl = document.getElementById('forecast');
  const current = document.querySelector('#current');
  const upcoming = document.querySelector('#upcoming');

  const symbols = {
    Sunny: '&#x2600;',
    'Partly sunny': '&#x26C5;',
    Overcast: '&#x2601;',
    Rain: '&#x2614;',
  };

  const getData = async () => {
    try {
      const response = await fetch(
        'http://localhost:3030/jsonstore/forecaster/locations'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getBtn.addEventListener('click', async () => {
    try {
      const curLocation = (await getData()).find(
        location => location.name === locationInput.value
      );

      const todayRes = await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${curLocation.code}`
      );
      const todayData = await todayRes.json();

      const upcomingRes = await fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${curLocation.code}`
      );
      const upcomingData = await upcomingRes.json();

      forecastEl.style.display = 'block';
      current.innerHTML += `
      <div class="forecasts">
        <span class="condition symbol">${
          symbols[todayData.forecast.condition]
        }</span>
        <span class="condition">
          <span class="forecast-data">${todayData.name}</span>
          <span class="forecast-data">${todayData.forecast.low}&#176;/${
        todayData.forecast.high
      }&#176;</span>
          <span class="forecast-data">${todayData.forecast.condition}</span>
        </span>
      </div>
      `;
      upcoming.innerHTML += `
      <div class="forecast-info">
        ${upcomingData.forecast
          .map(
            day => `
          <span class="upcoming">
            <span class="symbol">${symbols[day.condition]}</span>
            <span class="forecast-data">${day.low}&#176;/${day.high}&#176;</span>
            <span class="forecast-data">${day.condition}</span>
          </span>
        `
          )
          .join('\n')}
        
      </div>
      `;
    } catch (error) {
      forecastEl.style.display = 'block';
      forecastEl.innerText = 'Error';
    }
  });
}

attachEvents();
