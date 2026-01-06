import { Console, Random } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import BridgeMaker from "./BridgeMaker.js";
import BridgeGame from "./BridgeGame.js";

class App {
  async play() {
    const inputView = new InputView();
    const outputView = new OutputView();

    outputView.printStart();

    const bridgeSize = await this.#readBridge(inputView);
    const bridge = this.#createBridge(bridgeSize);
    const bridgeGame = new BridgeGame(bridge);

    await this.#runGame(inputView, outputView, bridgeGame);
  }

  async #readBridge(inputView) {
    try {
      const size = await inputView.readBridgeSize();
      this.#validateSize(size);
      return size;
    } catch (error) {
      Console.print(error.message);
      return this.#readBridge(inputView);
    }
  }

  #validateSize(size) {
    if (Number.isNaN(size) || size < 3 || size > 20) {
      throw new Error("[ERROR] 유효한 사이즈를 입력해주세요.");
    }
  }

  #createBridge(bridegeSize) {
    const bridgeMaker = new BridgeMaker();
    return bridgeMaker.makeBridge(bridegeSize, () =>
      Random.pickNumberInRange(0, 1)
    );
  }

  async #runGame(inputView, outputView, bridgeGame) {
    while (true) {
      const direction = await inputView.readMoving();
      const success = bridgeGame.move(direction);
      outputView.printMap(bridgeGame.getUpBridge(), bridgeGame.getDownBridge());

      if (!success) {
        const command = await inputView.readGameCommand();
        if (command === "R") {
          bridgeGame.retry();
          continue;
        }
        this.#printFinalResult(outputView, bridgeGame, false);
        break;
      }

      if (bridgeGame.isGameOver()) {
        this.#printFinalResult(outputView, bridgeGame, true);
        break;
      }
    }
  }

  #printFinalResult(outputView, bridgeGame, isSuccess) {
    outputView.printResult(
      bridgeGame.getUpBridge(),
      bridgeGame.getDownBridge(),
      isSuccess,
      bridgeGame.getAttempts()
    );
  }
}

export default App;
