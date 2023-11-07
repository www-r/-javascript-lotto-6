import { checkNull, checkIfInteger, checkDuplicate, checkNumberRange } from './Validation';

class Lotto {
	#numbers;
	constructor(numbers) {
		this.#numbers = this.#validate(numbers);
	}

	async #validate(numbers) {
		try {
			const numbersArr = await numbers.map((item) => {
				const userInput = Number(item);
				checkNull(userInput);
				checkIfInteger(userInput);
				checkNumberRange(userInput);
				return userInput;
			});
			checkDuplicate(numbersArr);
			this.sortNumbers(numbersArr);
		} catch (error) {
			// await View.getNumbers();
		}
	}
	static sortNumbers(numbers) {
		return numbers.sort((a, b) => a - b);
	}
	getLottoNumbers() {
		return this.#numbers;
	}
}

export default Lotto;
