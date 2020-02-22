"use strict";

/**
* Klasse som definerer et bilutleiefirma med attributtene navn, adresse og telefon.
*
* @author synne
*/

class Selskap {
	private navn: string;
	private adresse: string;
	private telefon: number;
	
    /**
	* Oppretter et selskap.
	*
	* @param navn navnet til selskapet
	* @param adresse adressen til selskapet
	* @param telefon telefonnummeret til selskapet
	*/

	constructor(navn: string, adr: string, telefon: number) {
		this.navn = navn;
		this.adresse = adr;
		this.telefon = telefon;
	}
}
