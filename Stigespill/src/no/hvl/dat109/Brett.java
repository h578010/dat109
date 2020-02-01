package no.hvl.dat109;

import java.util.HashMap;
import java.util.Map;

public final class Brett {
	
	static Integer vinnerPos = 100;	
	static Map <Integer, Integer> stiger = new HashMap <Integer, Integer>() {{
		put(2, 38);
		put(4, 14);
		put(8, 31);
		put(21, 42);
		put(28, 84);
		put(36, 44);
		put(51, 67);
		put(71, 91);
		put(80, 100);
	}};
			
	static Map <Integer, Integer> slanger = new HashMap <Integer, Integer>() {{	
		put(16, 6);
		put(47, 26);
		put(49, 11);
		put(56, 53);
		put(62, 18);
		put(64, 60);
		put(87, 24);
		put(93, 73);
		put(95, 75);
		put(98, 78);
	}};

}
