class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    }

    if (this._likes.length === 1) {
      return `${this._likes[0]} likes this story!`;
    }

    return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    }

    if (username === this.creator) {
      throw new Error("You can't like your own story!");
    }

    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (!this._likes.includes(username)) {
      throw new Error("You can't dislike this story!");
    }

    this._likes = this._likes.filter(user => user !== username);
    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    const comment = this._comments.find(comment => comment.id === id);

    if (!id || !comment) {
      this._comments.push({
        id: this._comments.length + 1,
        username,
        content,
        replies: [],
      });

      return `${username} commented on ${this.title}`;
    }

    comment.replies.push({
      id: Number(`${comment.id}.${comment.replies.length + 1}`),
      username,
      content,
    });

    return 'You replied successfully';
  }

  toString(sortingType) {
    let output = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`;

    if (sortingType === 'asc') {
      this._comments
        .sort((a, b) => a.id - b.id)
        .forEach(comment => {
          output += `\n-- ${comment.id}. ${comment.username}: ${comment.content}`;
          if (comment.replies.length > 0) {
            comment.replies
              .sort((a, b) => a.id - b.id)
              .forEach(reply => {
                output += `\n--- ${reply.id}. ${reply.username}: ${reply.content}`;
              });
          }
        });
    }

    if (sortingType === 'desc') {
      this._comments
        .sort((a, b) => b.id - a.id)
        .forEach(comment => {
          output += `\n-- ${comment.id}. ${comment.username}: ${comment.content}`;
          if (comment.replies.length > 0) {
            comment.replies
              .sort((a, b) => b.id - a.id)
              .forEach(reply => {
                output += `\n--- ${reply.id}. ${reply.username}: ${reply.content}`;
              });
          }
        });
    }

    if (sortingType === 'username') {
      this._comments
        .sort((a, b) => a.username.localeCompare(b.username))
        .forEach(comment => {
          output += `\n-- ${comment.id}. ${comment.username}: ${comment.content}`;
          if (comment.replies.length > 0) {
            comment.replies
              .sort((a, b) => a.username.localeCompare(b.username))
              .forEach(reply => {
                output += `\n--- ${reply.id}. ${reply.username}: ${reply.content}`;
              });
          }
        });
    }

    return output;
  }
}

let art = new Story('My Story', 'Anny');
art.like('John');
console.log(art.likes);
// art.dislike('Sally');
art.like('Ivan');
art.like('Steven');
console.log(art.likes);
art.comment('Anny', 'Some Content');
art.comment('Ammy', 'New Content', 1);
art.comment('Zane', 'Reply', 2);
art.comment('Jessy', 'Nice :)');
art.comment('SAmmy', 'Reply@', 2);
console.log(art.toString('asc'));
