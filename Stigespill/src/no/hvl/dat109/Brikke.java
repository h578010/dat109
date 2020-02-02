package no.hvl.dat109;

/**
 * 
 * Definerer en brikke
 * 
 */

public class Brikke {
	private int pos;

	public Brikke() {
		this.pos = 1;
	}

	/**
	 * 
	 * Finner posisjonen til brikken
	 * 
	 * @return int posisjonen
	 * 
	 */

	public int getPos() {
		return this.pos;
	}

	/**
	 * 
	 * Setter ny posisjon på brikken
	 * 
	 * @param nyPos
	 * 
	 */

	public void setPos(int nyPos) {
		this.pos = nyPos;
	}

}
