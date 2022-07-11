

class Persoon {
	
	constructor(naam, adres, geboorteDatum) {
		this.naam = naam;
		this.adres = adres;
		this.geboorteDatum = geboorteDatum;
	}
	
	// Methods
	getname() {
		return this.naam;
	}
		
		
	getAge() {
		let nu = new Date();
		let geboren = new Date(this.geboorteDatum);
		let voorbij = nu - geboren; // in millisecs
		let dagenVoorbij = Math.floor(voorbij / (1000 * 3600 * 24));
		return dagenVoorbij;
	}
} // End class

export default Persoon;