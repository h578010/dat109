package no.hvl.dat109;

import java.util.Random;

/**
 * 
 * Definerer en trerning
 * 
 */

public final class Terning {

	/**
	 * Triller terningen
	 * 
	 * @return int verdi av terningkastet
	 * 
	 */

	public static int trillTerning() {
		Random r = new Random();
		return (r.nextInt(6) + 1);
	}

}
