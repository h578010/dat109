package no.hvl.dat109;

import no.hvl.dat109.Brett;

public class Spiller {
	private String navn;
	private Brikke brikke;
	
	public Spiller(String navn) {
		this.navn = navn;
		this.brikke = new Brikke();
	}
	
	public String getNavn() {
		return this.navn;
	}
	
	public Brikke getBrikke() {
		return this.brikke;
	}
	
	public void settNyPos(int terningVerdi) {
		int nyPos = brikke.getPos() + terningVerdi;
		
		if (nyPos > Brett.vinnerPos) {							// hvis terningverdi er høyere enn antall plasser igjen til mål, blir man stående
			nyPos = nyPos - terningVerdi;
		} 
		if (Brett.stiger.get(nyPos) != null) {
			nyPos = Brett.stiger.get(nyPos);
			System.out.println("Klatrer opp stigen til rute " + nyPos);
		} 
		if (Brett.slanger.get(nyPos) != null) {
			nyPos = Brett.slanger.get(nyPos);
			System.out.println("Sklir på slangen til rute " + nyPos);
		} 
		brikke.setPos(nyPos);
	}
}
