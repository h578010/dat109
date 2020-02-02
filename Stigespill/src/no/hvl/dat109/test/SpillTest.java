package no.hvl.dat109.test;

import static org.junit.jupiter.api.Assertions.*;
import java.util.Iterator;
import java.util.List;

import org.junit.jupiter.api.Test;

import no.hvl.dat109.Brikke;
import no.hvl.dat109.Spiller;
import no.hvl.dat109.Stigespill;

class SpillTest {

	@Test
	void sjekkAntallSpillere() {
		Stigespill stigespill = new Stigespill();
		stigespill.leggTilSpiller("Ingrid");
		stigespill.leggTilSpiller("Synne");
		assertEquals(stigespill.getSpillere().size(), 2);		
	}

	@Test
	void sjekkNavn() {
		Stigespill stigespill = new Stigespill();
		stigespill.leggTilSpiller("Ingrid");
		stigespill.leggTilSpiller("Synne");
		assertTrue(erNavnIListen("Synne", stigespill.getSpillere()));
		assertTrue(erNavnIListen("Ingrid", stigespill.getSpillere()));
		assertFalse(erNavnIListen("Toril", stigespill.getSpillere()));
	}
	
	boolean erNavnIListen(String navn, List<Spiller> spillere) {
		Iterator<Spiller> it = spillere.iterator();		
		while (it.hasNext()) {
			if (it.next().getNavn().equals(navn)) {
				return true;
			}
		}
		return false;
	}
	
	@Test
	void sjekkFlyttingAvBrikkeUtenStige() {
		Spiller spiller = new Spiller("Martin");
		int posisjon1 = spiller.getBrikke().getPos();
		spiller.settNyPos(6);
		int posisjon2 = spiller.getBrikke().getPos();
		assertEquals(posisjon2, (posisjon1 + 6));
	}
	
	@Test
	void sjekkFlyttingAvBrikkeMedStige() {
		Spiller spiller = new Spiller("Toril");
		int posisjon1 = spiller.getBrikke().getPos();
		spiller.settNyPos(3);
		int posisjon2 = spiller.getBrikke().getPos();
		assertNotEquals(posisjon2, (posisjon1 + 4));
		assertEquals(14, posisjon2);		// stige går fra rute 4 til 14
	}
}
