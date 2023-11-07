import { Console, Random } from '@woowacourse/mission-utils';
import { LOTTO } from './constants';
class User {
	constructor(money) {
		this.money = money;
		this.totalLottosMap = this.#getTotalLottosMap();
		this.bonus = 0;
		this.amount = this.calculateAmount(money);
	}
	calculateAmount(money) {
		return money / LOTTO.PRICE;
	}
	#getTotalLottosMap() {
		for (let i = 0; i < this.amount; i += 1) {
			const uniqueArr = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.LENGTH);
			this.totalLottosMap.set(i, uniqueArr);
		}
		return totalLottosMap;
	}
	setBonus(bonus) {
		this.bonus = bonus;
	}
}
export default User;
