package q2490;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		int[] roundValues = new int[3];
		for (int i = 0; i < 3; i++) {
			String[] input= br.readLine().split(" ");
			for (int j = 0; j < 4; j++) {
				roundValues[i] += Integer.valueOf(input[j]);
			}
			String result = "";
			switch(roundValues[i]) {
			case 0:
				result = "D";
				break;
			case 1:
				result = "C";
				break;
			case 2:
				result = "B";
				break;
			case 3:
				result = "A";
				break;
			case 4:
				result = "E";
				break;
			}
			bw.write(result + "\n");
		}
		br.close();
		bw.flush();
		bw.close();
	}
}