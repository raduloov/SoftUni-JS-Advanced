class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = {
      child: 150,
      student: 300,
      collegian: 500,
    };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp[condition]) {
      throw new Error('Unsuccessful registration at the camp.');
    }

    if (this.listOfParticipants.some(participant => participant.name === name)) {
      return `The ${name} is already registered at the camp`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return 'The money is not enough to pay the stay at the camp.';
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
    if (!this.listOfParticipants.some(participant => participant.name === name)) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants.filter(participant => participant.name !== name);
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, ...participants) {
    participants.forEach(participant => {
      if (!this.listOfParticipants.find(p => p.name === participant)) {
        return 'Invalid entered name/s.';
      }
    });

    if (typeOfGame === 'WaterBalloonFights') {
      const [p1, p2] = participants;

      if (
        this.listOfParticipants.find(p => p.name === p1).condition !==
        this.listOfParticipants.find(p => p.name === p2).condition
      ) {
        throw new Error('Choose players with equal condition.');
      }

      if (
        this.listOfParticipants.find(p => p.name === p1).power >
        this.listOfParticipants.find(p => p.name === p2).power
      ) {
        this.listOfParticipants.find(p => p.name === p1).wins++;
        return `The ${p1} is winner in the game WaterBalloonFights.`;
      } else if (
        this.listOfParticipants.find(p => p.name === p1).power <
        this.listOfParticipants.find(p => p.name === p2).power
      ) {
        this.listOfParticipants.find(p => p.name === p2).wins++;
        return `The ${p2} is winner in the game WaterBalloonFights.`;
      } else {
        return 'There is no winner.';
      }
    }

    if (typeOfGame === 'Battleship') {
      const [player] = participants;

      this.listOfParticipants.find(p => p.name === player).power += 20;
      return `The ${player} successfully completed the game Battleship.`;
    }
  }

  toString() {
    const firstLine = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
    const nextLines = [];
    this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .forEach(participant => {
        nextLines.push(
          `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`
        );
      });

    return firstLine + nextLines.join('\n');
  }
}

const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
console.log(summerCamp.timeToPlay('Battleship', 'Petar Petarson'));
console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));
console.log(
  summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Sara Dickinson')
);
console.log(summerCamp.registerParticipant('Dimitur Kostov', 'student', 300));
console.log(
  summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov')
);

console.log(summerCamp.toString());
