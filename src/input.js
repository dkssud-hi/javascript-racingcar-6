import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async inputCarName() {
    const inputValue = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    const participatingCars = inputValue
      .split(',')
      .map((carName) => carName.trim());

    this.validateCarName(participatingCars);
    return participatingCars;
  },

  validateCarName(participatingCars) {
    participatingCars.forEach((carname) => {
      if (carname.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5글자 이하로 입력해주세요');
      }
    });
  },

  async inputRoundOfRacing() {
    try {
      const inputValue =
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?');

      const roundsOfRacing = Number(inputValue);

      return roundsOfRacing;
    } catch (err) {}
  },
};

export default InputView;
