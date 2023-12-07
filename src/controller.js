import InputView from './input';
import outputView from './outputView';
import { Random, Console } from '@woowacourse/mission-utils';

class RacingController {
  async startRacing() {
    const participatingCars = await InputView.inputCarName();
    const roundsOfRacing = await InputView.inputRoundOfRacing();
    let recordSheet = this.makeRecordSheet(participatingCars.length);

    Console.print('실행 결과');
    for (let rounds = 0; rounds < roundsOfRacing; rounds++) {
      recordSheet = this.recordCarMove(participatingCars, recordSheet);
      outputView.printCarsMove(participatingCars, recordSheet);
    }

    const mostMove = this.calculateMostMove(recordSheet);
    const winners = this.selectWinner(mostMove, participatingCars, recordSheet);
    outputView.printWinners(winners);
  }

  selectWinner(mostMove, participatingCars, recordSheet) {
    const winners = [];
    for (let i = 0; i < participatingCars.length; i++) {
      if (recordSheet[i].length === mostMove) {
        winners.push(participatingCars[i]);
      }
    }

    return winners.join(', ');
  }

  calculateMostMove(recordSheet) {
    let mostMove = 0;
    for (let i = 0; i < recordSheet.length; i++) {
      if (recordSheet[i].length >= mostMove) {
        mostMove = recordSheet[i].length;
      }
    }

    return mostMove;
  }

  recordCarMove(participatingCars, recordSheet) {
    const renewalRecordSheet = recordSheet;
    const numberOfParticipatingCars = participatingCars.length;

    for (let car = 0; car < numberOfParticipatingCars; car++) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) renewalRecordSheet[car] += '-';
    }

    return renewalRecordSheet;
  }

  makeRecordSheet(roundsOfRacing) {
    const recordSheet = [];
    for (let i = 0; i < roundsOfRacing; i++) {
      recordSheet.push('');
    }

    return recordSheet;
  }
}

export default RacingController;
