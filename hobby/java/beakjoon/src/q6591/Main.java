package q6591;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		while(true) {
			String[] input = br.readLine().split(" ");
			int n = Integer.parseInt(input[0]);
			int k = Integer.parseInt(input[1]);
			if (n == 0 && k == 0) {
				break;
			}
			getCombination(n, k, bw);
		}
		br.close();
		bw.flush();
		bw.close();
	}
	
	public static void getCombination(int n, int k, BufferedWriter bw) throws IOException {
		if(k > n - k) {
			k = n - k;
		}
		long ans = 1;
		long div = 1;
		while(k-- > 0) {
			ans *= n--;
			ans /= div++;
		}
		bw.write(ans + "\n");
	}
}