package no.hvl.dat109;

import java.util.Random;

public class Terning {
	Integer verdi = 0;
	
	
	public Integer trillTerning() {
		Random r = new Random();
		verdi = (r.nextInt(6)+1);
		
		return verdi;
	}

}
