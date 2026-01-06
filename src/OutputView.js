import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  }

  printMap(upBridge, downBridge) {
    Console.print(`[ ${upBridge.join(" | ")} ]`);
    Console.print(`[ ${downBridge.join(" | ")} ]`);
    Console.print("");
  }

  printResult(upBridge, downBridge, isSuccess, attempts) {
    Console.print("최종 게임 결과");
    Console.print(`[ ${upBridge.join(" | ")} ]`);
    Console.print(`[ ${downBridge.join(" | ")} ]`);
    Console.print("");
    Console.print(`게임 성공 여부: ${this.#getResultMessage(isSuccess)}`);
    Console.print(`총 시도한 횟수: ${attempts}`);
  }

  #getResultMessage(isSuccess) {
    if (isSuccess) {
      return "성공";
    }
    return "실패";
  }
}

export default OutputView;
