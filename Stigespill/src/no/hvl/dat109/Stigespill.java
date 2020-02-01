package no.hvl.dat109;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

import javax.swing.JFrame;
import javax.swing.JOptionPane;

public class Stigespill {
	public List<Spiller> spillere;
	private boolean spillFerdig = false;
	
	public Stigespill() {
		spillere = new ArrayList<Spiller>();
	}

	public void leggTilSpiller(String navn) {
		spillere.add(new Spiller(navn));
	}
	
	public void spillRunde() {
		int terningVerdi;

		for (int i = 0; i < spillere.size(); i++) {
			
			Spiller spiller = spillere.get(i);
			terningVerdi = Terning.trillTerning();
			System.out.println("Triller terning: " + terningVerdi);

			spiller.settNyPos(terningVerdi);

			System.out.println(spiller.getNavn() + " flytter til rute " + spiller.getBrikke().getPos());

			if (spiller.getBrikke().getPos() == Brett.vinnerPos) {
				System.out.println(spiller.getNavn() + " vant spillet!");
				spillFerdig = true;
				return;
			}
		}
	}

	public boolean erFerdig() {
		return spillFerdig;
	}
	
}
