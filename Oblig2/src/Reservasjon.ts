import { Bilkategori } from "./Bil";

/**
* Klasse som definerer reservasjoner av biler med attributtene registreringsnummer, kategori og datoer
*
* @author synne
*/

export class Reservasjon {

	public kategori: Bilkategori;
	public fraDato: string;
  public tilDato: string;
    
    constructor(kategori: Bilkategori, fraDato: string, tilDato: string) {
        this.kategori = kategori;
        this.fraDato = fraDato;
        this.tilDato = tilDato;
		//this.kontor = kontor;
    }
}
