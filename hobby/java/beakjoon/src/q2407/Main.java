package q2407;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.math.BigInteger;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		String[] input = br.readLine().split(" ");
		br.close();
		
		int n = Integer.parseInt(input[0]);
		int m = Integer.parseInt(input[1]);
		
		
		bw.write(String.valueOf(combination(n, m)) + "\n");
		bw.flush();
		bw.close();
	}
	public static BigInteger combination(int n, int m) {
		BigInteger[][] combinator = new BigInteger[1001][1001];
		BigInteger init = new BigInteger("1");
		combinator[1][0] = combinator[1][1] = init;
		for (int i = 2; i <= n; i++) {
			for (int j = 0; j <= i; j++) {
				combinator[i][j] = 
					(i == j || j == 0) ?
					init :
					combinator[i - 1][j - 1].add(combinator[i - 1][j]);
			}
		}
		return combinator[n][m];
	}
}