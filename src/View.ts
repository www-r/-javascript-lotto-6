// 입 출력 담당
import { Console } from '@woowacourse/mission-utils';
import {
	DIVIDER,
	EMPTY,
	BLANK,
	SPECIAL_CHAR_REGEXP,
	CHAR_REGEXP,
	REQUEST_BONUS,
	REQUEST_MONEY,
	REQUEST_NUMBERS,
	RESULT_BONUS,
	RESULT_FIVE_SAME,
	RESULT_FOUR_SAME,
	RESULT_OF_LOTTOS,
	RESULT_SIX_SAME,
	RESULT_THREE_SAME,
	ERROR,
} from './constants.js';

const validateInput = (input: string) => {
	const userInput = checkLength(input);
	const userString = checkBlank(userInput);
	const userArr = checkSpecialCharacters(userString);
	const numbers = checkCharacters(userArr);
	return numbers;
};

const checkLength = (input: string) => {
	// case money
	if (input === EMPTY) {
		throw new Error(ERROR.LOTTO_LENGTH);
	}
	return input;
};
const checkBlank = (input: string) => {
	if (input.match(BLANK)) {
		throw new Error(ERROR.LOTTO_BLANK);
	}
	return input.replace(BLANK, EMPTY);
};

const checkSpecialCharacters = (input: string) => {
	const expPattern = SPECIAL_CHAR_REGEXP; //no comma
	if (input.match(expPattern)) {
		input.replace(expPattern, EMPTY);
		throw new Error(ERROR.LOTTO_SPECIAL_CHAR);
	}
	return input;
};

const checkCharacters = (input: string) => {
	const inputsArr = input.split(DIVIDER);
	const expPattern = CHAR_REGEXP;
	const numbers = inputsArr.map((input) => {
		if (input.match(expPattern)) {
			throw new Error(
				ERROR.LOTTO_CHAR
			);
		}
		return +input;
	});
	return numbers;
};

class View {
	async getUserMoney() {
		const userInput = await Console.readLineAsync(REQUEST_MONEY);
		const userMoney = validateInput(userInput)[0];
		Console.print(userMoney); // 받은 금액 출력하기
		return +userMoney;
	}
	async getUserNumbers() {
		const userInput = await Console.readLineAsync(REQUEST_NUMBERS);
		const numbers = validateInput(userInput);
		Console.print(...numbers);
		return numbers;
	}
	async getUserBonus() {
		const userInput = await Console.readLineAsync(REQUEST_BONUS);
		const userBonus = validateInput(userInput)[0];
		Console.print(userBonus);
		return +userBonus;
	}
	printLottosResult(result) {
		Console.print(RESULT_OF_LOTTOS()); //당첨 통계 출력 , --- 출력
		Console.print(RESULT_THREE_SAME()); //3개 일치 (5,000원) - 0개 출력
		Console.print(RESULT_FOUR_SAME()); //4개 일치 (50,000원) - 0개 출력
		Console.print(RESULT_FIVE_SAME()); //5개 일치 (1,500,000원) - 0개  출력
		Console.print(RESULT_BONUS()); //5개 일치, 보너스 볼 일치 (30,000,000원) - 0개  출력
		Console.print(RESULT_SIX_SAME()); //6개 일치 (2,000,000,000원) - 0개  출력
	}
	createResultObj() {}
}

export default View;
