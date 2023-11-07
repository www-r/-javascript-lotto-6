import { Console, Random } from '@woowacourse/mission-utils';
import { LOTTO, MONEY } from './constants';

class Computer {
	static async createTotalLottosArr(amount) {
		const lottosArr = [];
		for (let i = 0; i < amount; i += 1) {
			const uniqueArray = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.LENGTH).sort(
				(a, b) => a - b
			);
			lottosArr.push(uniqueArray);
			Console.print(uniqueArray);
			// new Lotto(uniqueArray);
		}
		return lottosArr;
	}
	static calculateAmount(money) {
		return money / LOTTO.PRICE;
	}
	static createResultObj() {
		const resultObj = Object.defineProperties(
			{},
			{
				three: {
					value: 0,
					writable: true,
				},
				four: {
					value: 0,
					writable: true,
				},
				five: {
					value: 0,
					writable: true,
				},
				six: {
					value: 0,
					writable: true,
				},
				bonus: {
					value: 0,
					writable: true,
				},
			}
		);
		return resultObj;
	}
	static calculateResult(userLottosArr, keyLotto, bonus) {
		const resultObj = this.createResultObj();
		userLottosArr.forEach((lottoArr) => {
			let keyLottoIndex = 0;
			let amount = 0;
			for (let i = 0; i < lottoArr.length; i += 1) {
				if (lottoArr[i] === keyLotto[keyLottoIndex]) {
					keyLottoIndex += 1;
					amount += 1;
				}
			}
			switch (amount) {
				case 3:
					resultObj.three += amount;
					break;
				case 4:
					resultObj.four += amount;
					break;
				case 5:
					resultObj.five += amount;
					if (keyLotto.numbers.includes(bonus)) {
						resultObj.bonus += 1;
					}
					break;
				case 6:
					resultObj.six += amount;
					break;
			}
		});

		return resultObj;
	}
	static calculateProfitsRate(result, userMoney) {
		const sum =
			result.three * MONEY.THREE +
			result.four * MONEY.FOUR +
			result.five * MONEY.FIVE +
			result.six * MONEY.SIX +
			result.bonus * MONEY.BONUS;
		const profitsRate = (sum / userMoney) * 100;
		return profitsRate;
	}
}

export default Computer;
