class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForCamp = {
      child: 150,
      student: 300,
      collegian: 500,
    };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForCamp[condition]) {
      throw new Error('Unsuccessful registration at the camp.');
    }

    if (this.listOfParticipants.find(participant => participant.name === name)) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    this.listOfParticipants.push({
      name,
      condition,
      power: 100,
      wins: 0,
    });
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    const participant = this.listOfParticipants.find(
      participant => participant.name === name
    );

    if (!participant) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants = this.listOfParticipants.filter(
      participant => participant.name !== name
    );
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, ...participants) {
    const p1 = this.listOfParticipants.find(p => p.name === participants[0]);
    const p2 = this.listOfParticipants.find(p => p.name === participants[1]);

    if (participants.length === 1) {
      if (!p1) {
        throw new Error('Invalid entered name/s.');
      }

      if (typeOfGame === 'Battleship') {
        p1.power += 20;
        return `The ${p1.name} successfully completed the game ${typeOfGame}.`;
      }
    }

    if (participants.length === 2) {
      if (!p1 || !p2) {
        throw new Error('Invalid entered name/s.');
      }

      if (p1.condition !== p2.condition) {
        throw new Error('Choose players with equal condition.');
      }

      if (typeOfGame === 'WaterBalloonFights') {
        if (p1.power > p2.power) {
          p1.wins++;
          return `The ${p1.name} is winner in the game ${typeOfGame}.`;
        }

        if (p1.power < p2.power) {
          p2.wins++;
          return `The ${p2.name} is winner in the game ${typeOfGame}.`;
        }

        return 'There is no winner.';
      }
    }
  }

  toString() {
    return `${this.organizer} will take ${
      this.listOfParticipants.length
    } participants on camping to ${this.location}\n${this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .map(p => `${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
      .join('\n')}`;
  }
}

const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
console.log(summerCamp.timeToPlay('Battleship', 'Petar Petarson'));
console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));
// console.log(
//   summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Sara Dickinson')
// );
console.log(summerCamp.registerParticipant('Dimitur Kostov', 'student', 300));
console.log(
  summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov')
);

console.log(summerCamp.toString());
