function getArticleGenerator(articles) {
  const contentEl = document.getElementById('content');
  let counter = 0;

  return () => {
    articles.forEach(article => {
      if (counter === articles.length) return;

      const markup = `<article>${article}</article>`;
      contentEl.innerHTML += markup;
      counter++;
    });
  };
}
