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

  addArticle(articleModel, articleName, quantity) {
    if (!this.possibleArticles[articleModel.toLowerCase()]) {
      throw new Error('This article model is not included in this gallery!');
    }

    const article = this.listOfArticles.find(
      article => article.articleName === articleName
    );

    if (article && article.articleModel === articleModel) {
      article.quantity += quantity;
      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    this.listOfArticles.push({
      articleModel: articleModel.toLowerCase(),
      articleName,
      quantity,
    });
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    const guest = this.guests.find(guest => guest.guestName === guestName);

    if (guest) {
      throw new Error(`${guestName} has already been invited.`);
    }

    this.guests.push({
      guestName,
      points: personality === 'Vip' ? 500 : personality === 'Middle' ? 250 : 50,
      purchaseArticle: 0,
    });
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    const article = this.listOfArticles.find(
      article => article.articleName === articleName
    );
    const guest = this.guests.find(guest => guest.guestName === guestName);
    const articlePoints = this.possibleArticles[articleModel.toLowerCase()];

    if (!article || article.articleModel !== articleModel) {
      throw new Error('This article is not found.');
    }

    if (article.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    if (!guest) {
      return 'This guest is not invited.';
    }

    if (guest.points < articlePoints) {
      return 'You need to more points to purchase the article.';
    }

    guest.points -= articlePoints;
    guest.purchaseArticle++;
    article.quantity--;
    return `${guestName} successfully purchased the article worth ${articlePoints} points.`;
  }

  showGalleryInfo(criteria) {
    if (criteria === 'article') {
      return `Articles information:\n${this.listOfArticles
        .map(
          article =>
            `${article.articleModel} - ${article.articleName} - ${article.quantity}`
        )
        .join('\n')}`;
    }

    if (criteria === 'guest') {
      return `Guests information:\n${this.guests
        .map(guest => `${guest.guestName} - ${guest.purchaseArticle}`)
        .join('\n')}`;
    }
  }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
