package q13241;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		String[] input = br.readLine().split(" ");
		long a = Long.valueOf(input[0]), b = Long.valueOf(input[1]);
		long min = a < b ? a : b, max = a < b ? b : a;
		long result = a * b, div = 2;
		while(div <= min) {
			if(min % div == 0 && max % div == 0) {
				 min /= div;
				 max /= div;
				 result /= div;
			}
			else {
				div++;
			}
		}
		bw.write(String.valueOf(result) + "\n");
		
		br.close();
		bw.flush();
		bw.close();
	}
}