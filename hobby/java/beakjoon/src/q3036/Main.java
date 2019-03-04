package q3036;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	public static void main(String[] args) throws IOException {
		int n = Integer.valueOf(br.readLine());
		String[] inputs = br.readLine().split(" ");
		br.close();
		
		int numerator = Integer.valueOf(inputs[0]);
		for(int i = 1; i < n; i++) {
			int[] result = getFraction(numerator, Integer.valueOf(inputs[i]));
			bw.write(result[0] + "/" + result[1] + "\n");
		}
		bw.flush();
		bw.close();
	}
	
	public static int[] getFraction(int numer, int denom) {
		int div = 2;
		while(div <= denom) {
			if (numer % div == 0 && denom % div == 0) {
				numer /= div;
				denom /= div;
			}
			else {
				div++;
			}
		}
		int[] result = {numer, denom};
		return result;
	}
}