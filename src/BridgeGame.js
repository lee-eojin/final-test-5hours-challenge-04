class BridgeGame {
  #bridge;
  #upBridge;
  #downBridge;
  #currentPosition;
  #attempts;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#upBridge = [];
    this.#downBridge = [];
    this.#currentPosition = 0;
    this.#attempts = 1;
  }

  move(direction) {
    const canMove = this.#bridge[this.#currentPosition] === direction;

    if (canMove) {
      this.#addSuccess(direction);
      this.#currentPosition++;
      return true;
    }

    this.#addFailure(direction);
    return false;
  }

  retry() {
    this.#upBridge = [];
    this.#downBridge = [];
    this.#currentPosition = 0;
    this.#attempts++;
  }

  isGameOver() {
    return this.#currentPosition === this.#bridge.length;
  }

  getUpBridge() {
    return this.#upBridge;
  }

  getDownBridge() {
    return this.#downBridge;
  }

  getAttempts() {
    return this.#attempts;
  }

  #addSuccess(direction) {
    if (direction === "U") {
      this.#upBridge.push("O");
      this.#downBridge.push(" ");
      return;
    }
    this.#upBridge.push(" ");
    this.#downBridge.push("O");
  }

  #addFailure(direction) {
    if (direction === "U") {
      this.#upBridge.push("X");
      this.#downBridge.push(" ");
      return;
    }
    this.#upBridge.push(" ");
    this.#downBridge.push("X");
  }
}

export default BridgeGame;
