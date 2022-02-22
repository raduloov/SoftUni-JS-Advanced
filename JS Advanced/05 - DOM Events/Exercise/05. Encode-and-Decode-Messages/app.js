function encodeAndDecodeMessages() {
  const encode = document.querySelectorAll('button')[0];
  const decode = document.querySelectorAll('button')[1];
  const input = document.querySelectorAll('textarea')[0];
  const output = document.querySelectorAll('textarea')[1];

  encode.addEventListener('click', () => {
    const msg = input.value;
    const ascii = msg.split('').map(char => char.charCodeAt() + 1);
    const newMsg = String.fromCharCode(...ascii);

    input.value = '';
    output.value = newMsg;
  });

  decode.addEventListener('click', () => {
    const msg = output.value;
    const ascii = msg.split('').map(char => char.charCodeAt() - 1);
    const newMsg = String.fromCharCode(...ascii);

    output.value = newMsg;
  });
}
