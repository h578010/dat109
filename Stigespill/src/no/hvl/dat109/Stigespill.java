package no.hvl.dat109;

import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;
import java.util.stream.Collectors;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

public class Stigespill {
	public static Spiller[] spillere;
	
	public static void main(String[] args) {
		Spiller[] spillere = opprettSpill();
		spillSpill(spillere);
	}
	
	public static Spiller[] opprettSpill() {
		JFrame frame = new JFrame("Stigespill");
		int antall = 0;
		String antallSpillere = JOptionPane.showInputDialog(frame, "Skriv inn antall spillere (2-4): ");
		if (antallSpillere != null) {
			try {
				antall = Integer.parseInt(antallSpillere);
			} catch (NumberFormatException e) {
				antall = -1;
			}
		}
		if (antall < 2 || antall > 4) {
			JOptionPane.showMessageDialog(frame, "Antall spillere må være mellom 2 og 4.");
			System.exit(0);
		}
		spillere = new Spiller[antall];
		for (int i = 0; i < spillere.length; i++) {
			String navn = JOptionPane.showInputDialog(frame, "Skriv inn navn på spiller " + (i+1) + ": ");
			spillere[i] = new Spiller(navn, new Brikke(i));
		}
		return spillere;
	}
	
	public static void spillSpill(Spiller[] spillere) {
		Scanner scan = new Scanner(System.in);
		String tur = null;
		Terning terning = new Terning();
		int terningVerdi;
		
		do {								
			System.out.println("Trykk 't' for neste runde av spillet.");
			tur = scan.next();
			for (int i = 0; i < spillere.length; i++) {			// forløkken tilsvarer en runde i spillet
				Spiller spiller = spillere[i];
				terningVerdi = terning.trillTerning();
				System.out.println("Triller terning: " + terningVerdi);
				
				spiller.settNyPos(terningVerdi);
				
				System.out.println(spiller.getNavn() + " flytter til rute " + spiller.getBrikke().getPos());
				
				if (spiller.getBrikke().getPos() == Brett.vinnerPos) {
					System.out.println(spiller.getNavn() + " vant spillet!");
					System.exit(1);
				}
			}
		} while (tur.equals("t"));							// whileløkken tilsvarer hele spillet, man trykker t og enter for hver nye runde
		scan.close();
	}
	
	
	
	
	
	
	
	
	
	
}
