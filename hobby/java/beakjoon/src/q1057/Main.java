package q1057;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	public static void main(String[] args) throws IOException {
		String[] input = br.readLine().split(" ");
		br.close();
		int kim = Integer.valueOf(input[1]);
		int lim = Integer.valueOf(input[2]);
		int count = 1;
		while(Math.abs((kim - 1) / 2 - (lim - 1) / 2) > 0) {
			kim = kim / 2 + kim % 2;
			lim = lim / 2 + lim % 2;
			count++;
		}
		bw.write(String.valueOf(count) + "\n");
		bw.flush();
		bw.close();
	}
}