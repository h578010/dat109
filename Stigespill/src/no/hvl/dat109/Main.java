package no.hvl.dat109;

import java.util.Scanner;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

public class Main {

	public static void main(String[] args) {
		
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
		
		Stigespill nyttspill = new Stigespill();
		
		for (int i = 0; i < antall; i++) {
			String navn = JOptionPane.showInputDialog(frame, "Skriv inn navn på spiller " + (i+1) + ": ");
			nyttspill.leggTilSpiller(navn);
		}
		
		Scanner scan = new Scanner(System.in);
		while(!nyttspill.erFerdig()) {
			System.out.println("Trykk enter for å starte neste runde.");
			scan.nextLine();
			nyttspill.spillRunde();
		}
		scan.close();
	}

}
