// 입 출력 담당
import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation';
import Lotto from './Lotto';
import { DIVIDER, REQUEST, STATISTICS } from './constants';

class View {
	static print(message) {
		Console.print(message);
	}
	static async getUserMoney() {
		Console.print(REQUEST.MONEY);
		const userInput = await Console.readLineAsync(REQUEST.MONEY);
		const userMoney = Validation.validateUserMoney(userInput);
		return userMoney;
	}
	static async getNumbers() {
		Console.print(REQUEST.NUMBERS);
		const userInput = await Console.readLineAsync(REQUEST.NUMBERS);
		const inputArr = userInput.split(DIVIDER);
		const lotto = new Lotto(inputArr);
		return lotto.getLottoNumbers();
	}
	static async getUserBonus() {
		Console.print(REQUEST.BONUS);
		const userInput = await Console.readLineAsync(REQUEST.BONUS);
		const userBonus = await Validation.validateBonus(userInput);
		return userBonus;
	}

	static printStatisticsResult(result) {
		Console.print(STATISTICS.RESULT_IS); //당첨 통계 출력 , --- 출력
		Console.print(STATISTICS.THREE_SAME(result.three)); //3개 일치 (5,000원) - 0개 출력
		Console.print(STATISTICS.FOUR_SAME(result.four)); //4개 일치 (50,000원) - 0개 출력
		Console.print(STATISTICS.FIVE_SAME(result.five)); //5개 일치 (1,500,000원) - 0개  출력
		Console.print(STATISTICS.BONUS(result.bonus)); //5개 일치, 보너스 볼 일치 (30,000,000원) - 0개  출력
		Console.print(STATISTICS.SIX_SAME(result.six)); //6개 일치 (2,000,000,000원) - 0개  출력
	}
}

export default View;
