import { Console } from '@woowacourse/mission-utils';

const outputView = {
  printCarsMove(participatingCars, recordSheet) {
    for (let i = 0; i < participatingCars.length; i++) {
      Console.print(`${participatingCars[i]} : ${recordSheet[i]}`);
    }
  },

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners}`);
  },
};

export default outputView;
