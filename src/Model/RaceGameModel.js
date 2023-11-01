
class RaceGameModel {
    #participatingRacingCars
    #numberOfRounds

    get participatingRacingCars() {
        return this.#participatingRacingCars;
    }

    get numberOfRounds() {
        return this.#numberOfRounds;
    }

    set participatingRacingCars(value) {
        this.#participatingRacingCars = value; 
    }

    set numberOfRounds(value) {
        this.#numberOfRounds = value;
    }
}

export default RaceGameModel;