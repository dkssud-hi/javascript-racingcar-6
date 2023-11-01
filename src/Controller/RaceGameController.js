import RaceGameModel from "../Model/RaceGameModel";
import RaceGameView from "../\bView/RaceGameView";
import { Random } from "@woowacourse/mission-utils";

class RaceGameController {
    constructor(model, view) {
        this.validateRaceGameControllerConstructor(model, view);
        this.model = model;
        this.view = view;
    }

    validateRaceGameControllerConstructor(model, view) {
        if(!(model instanceof RaceGameModel) && !(view instanceof RaceGameView)) {
            throw new Error('[ERROE] 올바른 형식의 매개변수를 입력하세요');
        }
        else if(!(model instanceof RaceGameModel)) {
            throw new Error('[ERROR] RaceGameModel의 인스턴스를 매개변수에 입력하세요');
        }
        else if(!(view instanceof RaceGameView)) {
            throw new Error('[ERROE] RaceGameView의 인스턴스를 매개변수에 입력하세요')
        }
    }

    currentRacingCarsLocation( 
        previousRacingCarsLocation, 
        currentRoundRandomNumber,
      ) { 
          currentRoundRandomNumber.forEach((el,idx) => {
            if(el>=4) {
              previousRacingCarsLocation[idx] += '-';
            }
          })
    
          return previousRacingCarsLocation; 
    }
    
    createCurrentRoundRandomNumbers(participatingRacingCarsNumber) {  
        let randomNumbers = [];
    
        for(let i=0; i<participatingRacingCarsNumber; i++){
          randomNumbers.push(Random.pickNumberInRange(1,9));
        }
    
        return randomNumbers;
    }
    
    SelectWinner( 
        participatingRacingCars,
        finalRacingCarsLocation
      ) {
          let mostMoves = 0;
          let winners = [];
    
          finalRacingCarsLocation.forEach((el) => {
            if(el.length > mostMoves) {
              mostMoves = el.length;
            }
          })
    
          finalRacingCarsLocation.forEach((el,idx) => {
           if(el.length === mostMoves) {
             winners.push(participatingRacingCars[idx]);
           }
          })
    
         return String(winners);
    }
    
    startRacing() {        
          const participatingCars = this.view.inputParticipatingCars();
          const numberOfRounds = this.view.inputNumberOfRounds();
          this.validateInputParticipatingCars(participatingCars);
          this.validateNumberOfRounds(numberOfRounds);

          let RacingCarsLocation = [];
          let roundRandomNumber = [];

          for(let i=0; i<participatingCars.length; i++) {
            RacingCarsLocation.push('');
          }
    
          for(let i=0; i<numberOfRounds; i++) {  
            roundRandomNumber = this.createCurrentRoundRandomNumbers(participatingCars.length);
            RacingCarsLocation = this.currentRacingCarsLocation(RacingCarsLocation, roundRandomNumber);
    
            participatingCars.forEach((el,idx) => {
              Console.print(el+" : "+RacingCarsLocation[idx]);
            })
          }
    
          return this.SelectWinner(participatingCars, RacingCarsLocation);
    }

    validateInputParticipatingCars(participatingCars) {
        participatingCars = participatingCars.split(',');
      
        participatingCars.forEach((el) => { 
          if(el.length > 5) {
            throw new Error('[ERROR] 자동차 이름은 5글자 이하로 입력해주세요');
          }
        });
    }

    validateNumberOfRounds(numberOfRounds) {
      if(isNaN(numberOfRounds)) { 
        throw new Error('[ERROR] 숫자를 입력해주세요');
      }
    }
}

export default RaceGameController;