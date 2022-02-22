function getInfo() {
  const stopId = document.getElementById('stopId');
  const submitBtn = document.getElementById('submit');
  const stopName = document.getElementById('stopName');
  const buses = document.getElementById('buses');

  submitBtn.addEventListener('click', async () => {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`
      );
      const data = await response.json();

      stopName.innerText = data.name;
      buses.innerHTML += Object.entries(data.buses)
        .map(bus => `<li>Bus ${bus[0]} arrives in ${bus[1]} minutes</li>`)
        .join('\n');
    } catch (error) {
      stopName.innerText = 'Error';
    }
  });
}
