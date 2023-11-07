import { LOTTO, ERROR, BLANK } from './constants';
import View from './View';

export const checkNull = (input) => {
	if (input) {
		throw new Error(ERROR.NO_INPUT);
	}
	if (input.includes(BLANK)) throw new Error(ERROR.LOTTO_BLANK);
	return;
};
export const checkIfInteger = (input) => {
	if (!Number.isInteger(input)) {
		throw new Error();
	}
	return;
};

export const checkDuplicate = (numbers) => {
	const set = new Set(numbers);
	if (set.size !== numbers.length) {
		throw new Error(ERROR.NUMBER_DUPLICATE);
	}
	return;
};

const checkMoneyUnit = (money) => {
	if (money % LOTTO.PRICE !== 0) {
		throw new Error(ERROR.LOTTO_MONEY);
	}
	return;
};
export const checkNumberRange = (number) => {
	if (!(number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER)) {
		return;
	}
	throw new Error(ERROR.LOTTO_NUMBER_RANGE);
};
class Validation {
	static validateUserMoney(money) {
		try {
			const userMoney = Number(money);
			checkNull(userMoney);
			checkIfInteger(userMoney);
			checkMoneyUnit(userMoney);
			return userMoney;
		} catch (error) {
			// await View.getUserMoney();
		}
	}

	static async validateBonus(bonus) {
		try {
			const userBonus = Number(bonus);
			checkNull(userBonus);
			checkSpecialCharacters(userBonus);
			checkCharacters(userBonus);
			checkNumberRange(userBonus);
			return userBonus;
		} catch (error) {
			// await View.getUserBonus();
		}
	}
}

export default Validation;
