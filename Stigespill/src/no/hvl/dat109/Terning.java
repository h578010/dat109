package no.hvl.dat109;

import java.util.Random;

public final class Terning {
	
	public static int trillTerning() {
		Random r = new Random();
		return (r.nextInt(6)+1);
	}

}
