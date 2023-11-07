import View from './View';
import Computer from './Computer';
import { RESPONSE } from './constants';

class App {
	async play() {
		const userMoney = await View.getUserMoney();
		View.print(userMoney);
		const userLottosAmount = Computer.calculateAmount(userMoney);
		View.print(`${RESPONSE.AMOUNT_IS(userLottosAmount)}`);
		const userLottosArr = Computer.createTotalLottosArr(userLottosAmount);
		const numbers = await View.getNumbers();
		View.print(...numbers);
		const userBonus = await View.getUserBonus();
		View.print(userBonus);
		const result = Computer.calculateResult(userLottosArr, numbers, userBonus);
		const profitsRate = Computer.calculateProfitsRate(result, userMoney);
		View.printStatisticsResult(result);
		View.print(RESPONSE.PROFITS_RATE_IS(profitsRate));
	}
}

export default App;
