class BridgeMaker {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const random = generateRandomNumber();
      if (random === 1) {
        bridge.push("U");
        continue;
      }
      bridge.push("D");
    }
    return bridge;
  }
}

export default BridgeMaker;
