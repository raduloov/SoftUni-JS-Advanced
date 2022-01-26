function attachEventsListeners() {
  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  const daysBtn = document.getElementById('daysBtn');
  const hoursBtn = document.getElementById('hoursBtn');
  const minutesBtn = document.getElementById('minutesBtn');
  const secondsBtn = document.getElementById('secondsBtn');

  daysBtn.addEventListener('click', () => {
    const daysInput = days.value;
    hours.value = days * 24;
    minutes.value = days * 1440;
    seconds.value = days * 86400;
  });

  hoursBtn.addEventListener('click', () => {
    const hoursInput = hours.value;
    days.value = hoursInput / 24;
    minutes.value = hoursInput * 60;
    seconds.value = hoursInput * 60 * 60;
  });

  minutesBtn.addEventListener('click', () => {
    const minutesInput = minutes.value;
    hours.value = minutesInput / 60;
    days.value = minutesInput / 60 / 24;
    seconds.value = minutesInput * 60;
  });

  secondsBtn.addEventListener('click', () => {
    const secondsInput = seconds.value;
    hours.value = secondsInput / 60 / 60;
    minutes.value = secondsInput / 60;
    days.value = secondsInput / 60 / 60 / 24;
  });
}
