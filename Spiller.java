package no.hvl.dat109;

import no.hvl.dat109.Brett;

public class Spiller {
	private String navn;
	private Brikke brikke;
	
	public Spiller(String navn, Brikke brikke) {
		this.navn = navn;
		this.brikke = brikke;
	}
	
	public String getNavn() {
		return this.navn;
	}
	
	public Brikke getBrikke() {
		return this.brikke;
	}
	
	public Integer kalkulerTrekk(Integer spillerPos, Integer terningVerdi) {
		spillerPos = spillerPos + terningVerdi;
		
		if (spillerPos > Brett.vinnerPos) {
			spillerPos = spillerPos - terningVerdi;
		} 
		if (Brett.stiger.get(spillerPos) != null) {
			spillerPos = Brett.stiger.get(spillerPos);
			System.out.println("Klatrer opp stigen til rute " + spillerPos);
		} 
		if (Brett.slanger.get(spillerPos) != null) {
			spillerPos = Brett.slanger.get(spillerPos);
			System.out.println("Sklir på slangen til rute " + spillerPos);
		} 
		return spillerPos;
	}

}
