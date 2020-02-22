
/**
* Klasse som definerer en kunde med attributtene navn, adresse og telefon.
*
* @author synne
*/

export class Kunde {
	private fornavn: string;
	private etternavn: string;
	private adresse: string;
	private postnummer: number;
	private poststed: string;
	private telefon: number;
    /**
	* Oppretter en kunde.
	*
    * @param fornavn fornavnet til kunden
    * @param etternavn etternavnet til kunden
    * @param adresse adressen til kunden
    * @param postnummer postnummeret til kunden
    * @param poststed poststedet til kunden   
	* @param telefon telefonnummeret til kunden
	*/

	constructor(fornavn: string, etternavn: string, adr: string, pnr: number, psted: string, telefon: number) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.adresse = adr;
        this.postnummer = pnr;
        this.poststed = psted;
		this.telefon = telefon;
	}
}