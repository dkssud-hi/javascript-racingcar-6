import { Console } from "@woowacourse/mission-utils";

class RaceGameView {

    async inputParticipatingCars() { 
        let participatingRacingCars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'); 
        // participatingRacingCars = participatingRacingCars.split(',');
      
        // participatingRacingCars.forEach((el) => { 
        //   if(el.length > 5) {
        //     throw new Error('[ERROR] 자동차 이름은 5글자 이하로 입력해주세요');
        //   }
        // });
    
        return participatingRacingCars;
      }
    
      async inputNumberOfRounds() { 
        let numberOfRounds = await Console.readLineAsync('시도할 횟수는 몇 회인가요?'); 
    
        // if(isNaN(NumberOfRounds)) { 
        //   throw new Error('[ERROR] 숫자를 입력해주세요');
        // }
    
        return numberOfRounds; 
      }

}

export default RaceGameView;