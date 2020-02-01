package no.hvl.dat109;

public class Brikke {
	private int brikkeNummer;
	private Integer pos;
	
	public Brikke(int nummer) {
		this.brikkeNummer = nummer;
		this.pos = 1;
	}

	public Integer getPos() {
		return this.pos;
	}
	
	public void setPos(Integer nyPos) {
		this.pos = nyPos;
	}

}
