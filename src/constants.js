//number

const LOTTO = {
	PRICE: 1000,
	LENGTH: 6,
	MIN_NUMBER: 1,
	MAX_NUMBER: 45,
};

const MONEY = {
	THREE: 5000,
	FOUR: 50000,
	FIVE: 1500000,
	SIX: 2000000000,
	BONUS: 30000000,
};
const DIVIDER = ',';
const EMPTY = '';
const BLANK = ' ';

const TYPE = {
	MONEY: 'money',
	NUMBERS: 'numbers',
	BONUS: 'bonus',
};

// const SPECIAL_CHAR_REGEXP_NO_COMMA = /[!@#$%^&*().?":{}|<>]/g;
// const SPECIAL_CHAR_REGEXP = /[!@#$%^&*().,?":{}|<>]/g;
// const CHAR_REGEXP = /[a-zA-Z가-힣]/;

const REQUEST = {
	MONEY: '\n구입금액을 입력해주세요.',
	NUMBERS: '\n당첨 번호를 알려주세요.',
	BONUS: '\n보너스 번호를 입력해주세요.',
};
const RESPONSE = {
	AMOUNT_IS: (amount) => `\n${amount}개를 구입했습니다.`,
	PROFITS_RATE_IS: (percent) => `총 수익률 ${percent}%입니다`,
};
const STATISTICS = {
	RESULT_IS: '\n당첨 통계\n---',
	THREE_SAME: (amount) => `3개 일치 (5,000원) - ${amount}개 출력`,
	FOUR_SAME: (amount) => `4개 일치 (50,000원) - ${amount}개 출력`,
	FIVE_SAME: (amount) => `5개 일치 (1,500,000원) - ${amount}개  출력`,
	SIX_SAME: (amount) => `6개 일치 (2,000,000,000원) - ${amount}개  출력`,
	BONUS: (amount) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${amount}개  출력`,
};

const ERROR = {
	NO_INPUT: '[ERROR] 값을 입력해주세요.',
	LOTTO_LENGTH: `[ERROR] 로또 번호는 ${MONEY.LENGTH}개여야 합니다.`,
	LOTTO_BLANK: '[ERROR] 공백 사용은 불가능합니다.',
	LOTTO_SPECIAL_CHAR: '[ERROR] 특수 문자 사용은 불가능합니다.',
	LOTTO_CHAR: '[ERROR] 숫자만 입력 가능합니다.',
	LOTTO_MONEY: `[ERROR] ${MONEY.PRICE}원 단위로만 입력 가능합니다.`,
	LOTTO_NUMBER_DUPLICATE: '[ERROR] 번호는 중복될 수 없습니다.',
	LOTTO_NUMBER_RANGE: `[ERROR] ${LOTTO.MIN_NUMBER}부터 ${LOTTO.MAX_NUMBER}까지만 입력 가능합니다.`,
};

Object.freeze({
	LOTTO,
	TYPE,
	MONEY,
	EMPTY,
	BLANK,
	DIVIDER,
	// SPECIAL_CHAR_REGEXP_NO_COMMA,
	// SPECIAL_CHAR_REGEXP,
	// CHAR_REGEXP,
	REQUEST,
	RESPONSE,
	STATISTICS,
	ERROR,
});

export {
	LOTTO,
	TYPE,
	MONEY,
	EMPTY,
	BLANK,
	DIVIDER,
	// SPECIAL_CHAR_REGEXP_NO_COMMA,
	// SPECIAL_CHAR_REGEXP,
	// CHAR_REGEXP,
	REQUEST,
	RESPONSE,
	STATISTICS,
	ERROR,
};
