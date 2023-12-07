import RacingController from '../src/controller';
describe('문자열 테스트', () => {
  test('makeRecodSheet 기능 테스트', () => {
    const controller = new RacingController();
    const input = 5;
    const result = controller.makeRecodSheet(input);
    console.log(result);
    expect(result).toEqual(['', '', '', '', '']);
  });
});
