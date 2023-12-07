import RacingController from './controller';

class App {
  async play() {
    try {
      const controller = new RacingController();
      await controller.startRacing();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
