package q10219;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	public static void main(String[] args) throws IOException {
		int t = Integer.valueOf(br.readLine());
		while(t-- > 0) {
			String[] input = br.readLine().split(" ");
			int h = Integer.valueOf(input[0]);
			int w = Integer.valueOf(input[1]);
			while(h-- > 0) {
				char[] row = br.readLine().toCharArray();
				for(int i = w - 1; i >= 0; i--) {
					bw.write(row[i]);
				}
				bw.write("\n");
			}
		}
		br.close();
		bw.flush();
		bw.close();
	}
}