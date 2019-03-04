package q2455;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	public static void main(String[] args) throws IOException {
		int people = 0, max = 0;
		for(int i = 0; i < 4; i++) {
			String[] input = br.readLine().split(" ");
			people = people - Integer.valueOf(input[0]) + Integer.valueOf(input[1]);
			if(people > max) {
				max = people;
			}
		}
		br.close();
		bw.write(String.valueOf(max) + "\n");
		bw.flush();
		bw.close();
	}
}