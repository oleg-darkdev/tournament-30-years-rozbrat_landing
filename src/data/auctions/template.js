class Auction {
	constructor(valuePromo, valueCroundfanding, valueMoreInfo) {
		this.promo = valuePromo;
		this.croundfanding = valueCroundfanding;
		this.moreInfo = valueMoreInfo;
		this.lots;
		this.showList = false;
		this.auctionStatus = 0;
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
	get showList() {
		return this._showList;
	}
	get lots() {
		return this._lots;
	}
	get status() {
		return this._status;
	}
	set status(value) {
		this._status = value;
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
	set lots(value) {
		this._lots = value;
	}
	set showList(value) {
		this._showList = value;
	}
}


export default Auction;