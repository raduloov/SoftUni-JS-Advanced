function attachEventsListeners() {
  const input = document.getElementById('inputDistance');
  const output = document.getElementById('outputDistance');
  const inputUnits = document.getElementById('inputUnits');
  const outputUnits = document.getElementById('outputUnits');
  const convertBtn = document.getElementById('convert');

  console.log(inputUnits.options[inputUnits.selectedIndex].text);

  const rates = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

  convertBtn.addEventListener('click', () => {
    const from = inputUnits.options[inputUnits.selectedIndex].value;
    const to = outputUnits.options[outputUnits.selectedIndex].value;

    const valueInMeters = input.value * rates[from];
    const convertedValue = valueInMeters / rates[to];

    output.value = convertedValue;
  });
}
