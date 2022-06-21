class Fles {
    constructor(naam, max_inhoud, kleur ) {
        
        this.naam = naam;
        this.max_inhoud = max_inhoud;
        this.inhoud = 0
        this.kleur = kleur;
    }

    vul_fles(vul_met) {
        this.inhoud += vul_met;
    }

    kleur(kleur) {
        this.kleur = kleur;
    }
}

export default Fles;