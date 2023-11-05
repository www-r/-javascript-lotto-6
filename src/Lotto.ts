import { Random, Console } from '@woowacourse/mission-utils';
import { ERROR, A_LOTTO_LENGTH, MIN_NUMBER, MAX_NUMBER } from './constants.js';
class Lotto {
	#numbers;

	constructor(numbers: []) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers: []) {
		// Goal Array
		if (numbers.length !== A_LOTTO_LENGTH) {
			throw new Error(ERROR.LOTTO_LENGTH);
		}
	}
	async createUserLottosMap(amount: number) {
		const arrayMap = new Map();
		for (let i = 0; i < amount; i += 1) {
			const uniqueArray = await Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, A_LOTTO_LENGTH).sort(
				(a, b) => a - b
			);
			arrayMap.set(i, uniqueArray);
			Console.print(uniqueArray);
		}
		return arrayMap;
	}
}

export default Lotto;
