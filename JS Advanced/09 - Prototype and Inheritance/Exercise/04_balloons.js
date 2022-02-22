function solve() {
  class Balloon {
    constructor(color, hasWeight) {
      this.color = color;
      this.hasWeight = hasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, hasWeight, ribbonColor, ribbonLength) {
      super(color, hasWeight);
      this.ribbonColor = ribbonColor;
      this.ribbonLength = ribbonLength;
    }

    get ribbon() {
      return {
        color: this.ribbonColor,
        length: this.ribbonLength,
      };
    }
  }

  class BirthdayBalloon extends Balloon {
    constructor(color, hasWeight, text) {
      super(color, hasWeight);
      this.text = text;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

const classes = solve();
const testBalloon = new classes.Balloon('yellow', 20.5);
const testPartyBalloon = new classes.PartyBalloon('yellow', 20.5, 'red', 10.25);
const testBirthdayBalloon = new classes.BirthdayBalloon('yellow', 20.5, 'text');
const ribbon = testPartyBalloon.ribbon;
const text = testBirthdayBalloon.text;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
console.log(text);
