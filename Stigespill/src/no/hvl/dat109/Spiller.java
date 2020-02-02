package no.hvl.dat109;

import no.hvl.dat109.Brett;

/**
 * 
 * Definerer en spiller
 * 
 */

public class Spiller {
	private String navn;
	private Brikke brikke;

	/**
	 * Oppretter ny spiller
	 * 
	 * @param navnet til spilleren
	 * @param brikken til spilleren
	 */

	public Spiller(String navn) {
		this.navn = navn;
		this.brikke = new Brikke();
	}

	/**
	 * 
	 * @return navnet til spiller
	 * 
	 */

	public String getNavn() {
		return this.navn;
	}

	/**
	 * 
	 * @return brikken
	 * 
	 */

	public Brikke getBrikke() {
		return this.brikke;
	}

	/**
	 * 
	 * Setter posisjonen til spilleren
	 *
	 */

	public void settNyPos(int terningVerdi) {
		int nyPos = brikke.getPos() + terningVerdi;

		if (nyPos > Brett.vinnerPos) { // hvis terningverdi er høyere enn antall plasser igjen til mål, blir man
										// stående
			nyPos = nyPos - terningVerdi;
		}
		if (Brett.stiger.get(nyPos) != null) {
			nyPos = Brett.stiger.get(nyPos);
			System.out.println("Klatrer opp stigen til rute " + nyPos);
		}
		if (Brett.slanger.get(nyPos) != null) {
			nyPos = Brett.slanger.get(nyPos);
			System.out.println("Sklir p� slangen til rute " + nyPos);
		}
		brikke.setPos(nyPos);
	}
}
