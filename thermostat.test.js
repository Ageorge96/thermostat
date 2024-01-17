const Thermostat = require("./thermostat");

describe('Thermostat', () => {
    it('New thermostat has a temp of 20', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toBe(20)
    });

    it('Thermostat temperature goes up two when up method is used twice', () => {
        const thermostat = new Thermostat();
        thermostat.up()
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(22)
    });

    it('Thermostat temperature goes down two when down method is used twice', () => {
        const thermostat = new Thermostat();
        thermostat.down()
        thermostat.down()
        expect(thermostat.getTemperature()).toBe(18)
    });

    it('Thermostat does not execeed minium of 10', () => {
        const thermostat = new Thermostat();
        for (let i = 0; i <= 11; i++) {
            thermostat.down()
        }
        expect(thermostat.getTemperature()).toBe(10)
    });

    it('Thermostat does not execeed maximum of 25 when power saving mode is on', () => {
        const thermostat = new Thermostat();
        for (let i = 0; i <= 6; i++) {
            thermostat.up()
        }
        expect(thermostat.getTemperature()).toBe(25)
    });

    it('Thermostat does not execeed maximum of 32 when power saving mode is of', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0; i <= 12; i++) {
            thermostat.up();
        };
        expect(thermostat.getTemperature()).toBe(32);
    });

    it('When Thermostat temperature is changed it can be reset to 20', () => {
        const thermostat = new Thermostat();
        for (let i = 0; i <= 4; i++) {
            thermostat.up();
        };

        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20);
    })

    it('When power saving mode is off and temperature exceeds 25, temperature is set to 25', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0; i <= 12; i++) {
            thermostat.up();
        };
        expect(thermostat.getTemperature()).toBe(32);
        thermostat.setPowerSavingMode(true);
        expect(thermostat.getTemperature()).toBe(20);
    })

    it('Energy usage shows medium usage when in medium temperature range', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        expect(thermostat.getEnergyUsage).toBe("Medium-usage");
        thermostat.up();
        thermostat.up();
        expect(thermostat.getEnergyUsage).toBe("Medium-usage");
        thermostat.up();
        thermostat.up();
        expect(thermostat.getEnergyUsage).toBe("Medium-usage");

    });

    it('Energy usage shows low usage when in low temperature range', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        expect(thermostat.getEnergyUsage).toBe("Low-usage");
        thermostat.down();
        thermostat.down();
        expect(thermostat.getEnergyUsage).toBe("Low-usage");
        thermostat.down();
        thermostat.down();
        thermostat.down();
        expect(thermostat.getEnergyUsage).toBe("Low-usage");

    });

    it('Energy usage shows high usage when in high temperature range', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0; i <= 5; i++) {
            thermostat.up();
        };
        expect(thermostat.getEnergyUsage).toBe("High-usage");
        for (let i = 0; i <= 5; i++) {
            thermostat.up();
        };
        expect(thermostat.getEnergyUsage).toBe("High-usage");
    });

    it('When energy usage is low and thermostat is reset, energy goes to medium-usage', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0; i <= 3; i++) {
            thermostat.down();
        };
        expect(thermostat.getEnergyUsage).toBe("Low-usage");
        for (let i = 0; i <= 5; i++) {
            thermostat.down();
        };
        thermostat.reset()
        expect(thermostat.getEnergyUsage).toBe("Medium-usage");
    });

    it('When energy usage is high and thermostat is reset, energy goes to medium-usage', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0; i <= 5; i++) {
            thermostat.up();
        };
        expect(thermostat.getEnergyUsage).toBe("High-usage");
        for (let i = 0; i <= 5; i++) {
            thermostat.up();
        };
        thermostat.reset()
        expect(thermostat.getEnergyUsage).toBe("Medium-usage");
    });
});