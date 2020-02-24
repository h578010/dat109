
/**
* Klasse som definerer en bil med attributtene registreringsnummer, merke, modell, farge, kategori
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
    private kategori: Bilkategori;
    private farge: string;

    /**
	* Oppretter en bil.
    *
    * @param registreringsnummer regnr for bilen
	* @param merke bilmerket til bilen
    * @param modell modellen til bilen
    * @param farge fargen på bilen
    * @param kategori utleiegruppen bilen tilhører 
    * @param ledig er bilen reservert eller ledig
    * @param Bilkategori kategori for bilstørrelse, A: liten, B: mellomstor, C: stor, D: stasjonsvogn.
    */
    
    constructor(regnr: string, merke: string, modell: string, farge: string, kategori: Bilkategori) {
        this.registreringsnummer = regnr;
        this.merke = merke;
        this.modell = modell;
        this.farge = farge;
        this.kategori = kategori;
    }

}