function solve() {
  const info = document.querySelector('.info');
  const departBtn = document.getElementById('depart');
  const arriveBtn = document.getElementById('arrive');

  let stopId = 'depot';

  const getData = async stopId => {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${stopId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  async function depart() {
    try {
      const data = await getData(stopId);

      info.innerText = `Next stop ${data.name}`;
      departBtn.disabled = true;
      arriveBtn.disabled = false;
    } catch (error) {
      info.innerText = 'Error';
    }
  }

  async function arrive() {
    try {
      const data = await getData(stopId);

      info.innerText = `Arriving at ${data.name}`;
      departBtn.disabled = false;
      arriveBtn.disabled = true;
      stopId = data.next;
    } catch (error) {
      info.innerText = 'Error';
    }
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
