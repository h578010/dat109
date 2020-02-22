

/**
* Klasse som definerer biluteleiekontor med attributtene selskapsnummer, navn, adresse og telefon.
*
* @author synne
*/

export class Kontor {
	private adresse: string;
	private navn: string;
	private postnummer: number;
	private poststed: string;
	private telefon: number;

    /**
	* Oppretter et selskap.
    *
    * @param nummer selskapsnummer for kontoret, genereres fortløpende av databasen
	* @param navn navnet til kontoret
    * @param adresse gateadressen til kontoret
    * @param postnummer postnummeret til kontoret
    * @param poststed poststedet til kontoret   
	* @param telefon telefonnummeret til kontoret
	*/

	constructor(navn: string, adr: string, pnr: number, psted: string, telefon: number) {
		this.navn = navn;
        this.adresse = adr;
        this.postnummer = pnr;
        this.poststed = psted;
		this.telefon = telefon;
    }
}