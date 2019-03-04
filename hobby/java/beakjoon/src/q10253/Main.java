package q10253;
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
			long numer = Integer.valueOf(input[0]);
			long denom = Integer.valueOf(input[1]);
			
			bw.write(getHenry(numer, denom) + "\n");
		}
		br.close();
		bw.flush();
		bw.close();
	}
	
	public static String getHenry(long numer, long denom) {
		long x;
		while(numer > 1) {
			x = denom / numer + 1;
			numer = numer * x - denom;
			denom *= x;
			long gcd = getGCD(numer, denom);
			numer /= gcd;
			denom /= gcd;
		}
		return String.valueOf(denom);
	}
	public static long getGCD(long numer, long denom) {
		while(numer > 0) {
			long temp = denom;
			denom = numer;
			numer = temp % denom;
		}
		return denom;
	}
}