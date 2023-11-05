//number
const A_LOTTO_PRICE = 1000;
const A_LOTTO_LENGTH = 6;
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

const DIVIDER = ','
const EMPTY = '';
const BLANK = ' ';
const SPECIAL_CHAR_REGEXP = /[!@#$%^&*().?":{}|<>]/g;
const CHAR_REGEXP = /[a-zA-Z가-힣]/;

const REQUEST_MONEY = '구입금액을 입력해주세요.';
const REQUEST_NUMBERS = '당첨 번호를 알려주세요.';
const REQUEST_BONUS = '보너스 번호를 입력해주세요.';

const PROFITS_RATE_IS = (percent) => `총 수익률 ${percent}%입니다`;

const RESULT_OF_LOTTOS = '당첨 통계\n---';
const RESULT_THREE_SAME = (amount) => `3개 일치 (5,000원) - ${amount}개 출력`;
const RESULT_FOUR_SAME = (amount) => `4개 일치 (50,000원) - ${amount}개 출력`;
const RESULT_FIVE_SAME = (amount) => `5개 일치 (1,500,000원) - ${amount}개  출력`;
const RESULT_SIX_SAME = (amount) => `6개 일치 (2,000,000,000원) - ${amount}개  출력`;
const RESULT_BONUS = (amount) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${amount}개  출력`;

const ERROR = {
	LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_BLANK: '[ERROR] 공백 사용은 불가능합니다.',
  LOTTO_SPECIAL_CHAR: '[ERROR] 특수 문자 사용은 불가능합니다.',
  LOTTO_CHAR: '[ERROR] 숫자만 입력 가능합니다.',
};

Object.freeze({
	A_LOTTO_PRICE,
	A_LOTTO_LENGTH,
	MIN_NUMBER,
	MAX_NUMBER,
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
	PROFITS_RATE_IS,
});
export {
	A_LOTTO_PRICE,
	A_LOTTO_LENGTH,
	MIN_NUMBER,
	MAX_NUMBER,
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
	PROFITS_RATE_IS,
  ERROR
};
