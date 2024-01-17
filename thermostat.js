class Thermostat {

    constructor() {
        this.temperature = 20;
        this.powerSavingMode = true;
        this.energyUsage = 'Medium-usage'
    }

    getTemperature() {
        return this.temperature;
    };

    get getEnergyUsage() {
        this.setEnergyUsage()
        return this.energyUsage;
    }

    setEnergyUsage(temperature) {
        if (this.getTemperature() < 18) {
            this.energyUsage = "Low-usage";
        } else if (this.getTemperature() <= 25) {
            this.energyUsage = "Medium-usage"
        } else {
            this.energyUsage = "High-usage"
        }
    };

    up() {
        if (this.powerSavingMode == true && this.getTemperature() == 25) {
            return;
        } else if (this.powerSavingMode == false && this.getTemperature() == 32) {
            return;
        };

        this.temperature++;

        
    };

    down() {
        if (this.temperature > 10) {
            this.temperature--;
        };

    };

    setPowerSavingMode(mode) {
        this.powerSavingMode = mode;

        if (this.powerSavingMode == true && this.getTemperature() > 25) {
            this.temperature = 20
        }
    };

    reset() {
        this.temperature = 20;
    };

    
}

module.exports = Thermostat;