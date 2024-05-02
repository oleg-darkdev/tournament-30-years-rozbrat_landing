class FAQ {
	constructor(valuePromo, valueCroundfanding, valueGameBasicFAQ, valuePopularFaq, valueOtherFaq) {
		this.promo = valuePromo;
		this.croundfanding = valueCroundfanding;

		this.basicFAQ = valueGameBasicFAQ;
		this.popularFaq = valuePopularFaq;
		this.otherFaq = valueOtherFaq;
	}
	get promo() {
		return this._promo;
	}
	get croundfanding() {
		return this._croundfanding;
	}

	// get gameBasicFAQ() {
	// 	return this._gameBasicFAQ;
	// }
	// get popularFaq() {
	// 	return this._popularFaq;
	// }
	// get otherFaq() {
	// 	return this._otherFaq;
	// }

	set promo(value) {
		this._promo = value;
	}

	set croundfanding(value) {
		this._croundfanding = value;
	}

	// set gameBasicFAQ(value) {
	// 	this._gameBasicFAQ = value;
	// }
	// set popularFaq(value) {
	// 	this._popularFaq = value;
	// }
	// set _otherFaq(value) {
	// 	this._otherFaq = value;
	// }
}


export default FAQ;