class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = {
      picture: 200,
      photo: 50,
      item: 250,
    };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(model, name, quantity) {
    if (
      !Object.keys(this.possibleArticles).find(
        key => key.toLowerCase() === model.toLowerCase()
      )
    ) {
      throw new Error('This article model is not included in this gallery!');
    }

    const article = this.listOfArticles.find(art => art.name === name);

    if (article) {
      article.quantity += quantity;
    } else {
      this.listOfArticles.push({
        model: model.toLowerCase(),
        name,
        quantity,
      });
    }

    return `Successfully added article ${name} with a new quantity- ${quantity}.`;
  }

  inviteGuest(name, personality) {
    const guest = this.guests.find(guest => guest.name === name);

    if (guest) {
      throw new Error(`${name} has already been invited.`);
    }

    const points = personality === 'Vip' ? 500 : personality === 'Middle' ? 250 : 50;

    this.guests.push({
      name,
      points,
      purchaseArticle: 0,
    });

    return `You have successfully invited ${name}!`;
  }

  buyArticle(model, articleName, guestName) {
    const article = this.listOfArticles.find(art => art.name === articleName);
    const guest = this.guests.find(guest => guest.name === guestName);

    if (!article || article.model !== model) {
      throw new Error('This article is not found.');
    }

    if (article.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    if (!guest) {
      return 'This guest is not invited.';
    }

    if (!guest.points >= this.possibleArticles[model]) {
      return 'You need to more points to purchase the article.';
    }

    guest.points -= this.possibleArticles[model];
    guest.purchaseArticle++;
    article.quantity--;

    return `${guestName} successfully purchased the article worth ${this.possibleArticles[model]} points.`;
  }

  showGalleryInfo(criteria) {
    if (criteria === 'article') {
      const articles = this.listOfArticles.map(
        art => `${art.model} - ${art.name} - ${art.quantity}`
      );

      return `Articles information:\n${articles.join('\n')}`;
    }

    if (criteria === 'guest') {
      const guests = this.guests.map(
        guest => `${guest.name} - ${guest.purchaseArticle}`
      );

      return `Guests information:\n${guests.join('\n')}`;
    }
  }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('pictur', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
