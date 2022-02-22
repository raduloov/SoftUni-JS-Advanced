function solve() {
  const sections = Array.from(document.querySelectorAll('section'));
  const resultEl = document.getElementById('results');

  let rightAnswers = 0;

  for (let i = 0; i < 3; i++) {
    const answer1 = Array.from(sections[i].querySelectorAll('.answer-text'))[0];
    const answer2 = Array.from(sections[i].querySelectorAll('.answer-text'))[1];

    answer1.addEventListener('click', () => {
      if (i !== 1) {
        rightAnswers++;
      }
      sections[i].style.display = 'none';
      if (!sections[i + 1]) {
        resultEl.style.display = 'block';
        if (rightAnswers === 3) {
          resultEl.querySelector('h1').innerText =
            'You are recognized as top JavaScript fan!';
        } else {
          resultEl.querySelector(
            'h1'
          ).innerText = `You have ${rightAnswers} right answers`;
        }
        return;
      } else {
        sections[i + 1].style.display = 'block';
      }
    });
    answer2.addEventListener('click', () => {
      if (i === 1) {
        rightAnswers++;
      }
      sections[i].style.display = 'none';
      if (!sections[i + 1]) {
        resultEl.style.display = 'block';
        if (rightAnswers === 3) {
          resultEl.querySelector('h1').innerText =
            'You are recognized as top JavaScript fan!';
        } else {
          resultEl.querySelector(
            'h1'
          ).innerText = `You have ${rightAnswers} right answers`;
        }
        return;
      } else {
        sections[i + 1].style.display = 'block';
      }
    });
  }
}
