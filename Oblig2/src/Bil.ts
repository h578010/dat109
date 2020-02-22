
/**
* Klasse som definerer en bil med attributtene registreringsnummer, merke, modell, farge, utleiegruppe
*
* @author synne
*/

export enum Bilkategori {
    A, B, C, D 
}

export class Bil {
    private registreringsnummer: string;
    private merke: string;
    private modell: string;
    private utleiegruppe: Bilkategori;
    private farge: string;

    /**
	* Oppretter en bil.
    *
    * @param registreringsnummer regnr for bilen
	* @param merke bilmerket til bilen
    * @param modell modellen til bilen
    * @param farge fargen på bilen
    * @param utleiegruppe utleiegruppen bilen tilhører -- bruke Object.freeze på denne?
    * @param ledig er bilen reservert eller ledig
    * @param Bilkategori kategori for bilstørrelse, A: liten, B: mellomstor, C: stor, D: stasjonsvogn.
    */
    
    constructor(regnr: string, merke: string, modell: string, farge: string, utleiegruppe: Bilkategori) {
        this.registreringsnummer = regnr;
        this.merke = merke;
        this.modell = modell;
        this.farge = farge;
        this.utleiegruppe = utleiegruppe;
    }

}