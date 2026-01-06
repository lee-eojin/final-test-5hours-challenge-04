import { Console } from "@woowacourse/mission-utils";

class InputView {
  async readBridgeSize() {
    const input = await Console.readLineAsync("다리의 길이를 입력해주세요.");
    return Number(input);
  }

  async readMoving() {
    const input = await Console.readLineAsync(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)"
    );
    return input;
  }

  async readGameCommand() {
    const input = await Console.readLineAsync(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)"
    );
    return input;
  }
}

export default InputView;
