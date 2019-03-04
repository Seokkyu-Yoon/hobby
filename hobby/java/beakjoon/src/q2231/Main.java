package q2231;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int n = Integer.valueOf(br.readLine());
		int result = 0;
		br.close();
		for(int i = n - String.valueOf(n).length() * 9; i < n; i++) {
			int temp = i, value = i;
			int cipher = String.valueOf(i).length() - 1;
			while(cipher > -1) {
				value += temp / Math.pow(10, cipher);
				temp %= Math.pow(10, cipher--);
			}
			if (value == n) {
				result = i;
				break;
			}
		}
		bw.write(result + "\n");
		bw.flush();
		bw.close();
	}
}