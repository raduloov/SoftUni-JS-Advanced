function createAssemblyLine() {
  return {
    hasClima(object) {
      object.temp = 21;
      object.tempSettings = 21;
      object.adjustTemp = () => {
        if (this.temp < this.tempSettings) {
          this.temp++;
        } else if (this.temp > this.tempSettings) {
          this.temp--;
        }
      };
    },
  };
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: 'Toyota',
  model: 'Avensis',
};
