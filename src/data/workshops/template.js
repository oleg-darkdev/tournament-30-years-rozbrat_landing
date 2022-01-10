class Auction {
	constructor(valuePromo, valueCroundfanding, valueMoreInfo) {
		this.promo = valuePromo;
		this.croundfanding = valueCroundfanding;
		this.moreInfo = valueMoreInfo;
		this.history = [''];
	}

	get promo() {
		return this._promo;
	}
	get croundfanding() {
		return this._croundfanding;
	}
	get moreInfo() {
		return this._moreInfo;
	}
	get history() {
		return this._history;
	}
	set promo(value) {
		this._promo = value;
	}
	set moreInfo(value) {
		this._moreInfo = value;
	}
	set croundfanding(value) {
		this._croundfanding = value;
	}
	set history(value) {
		this._history = value;
	}
}


export default Auction;