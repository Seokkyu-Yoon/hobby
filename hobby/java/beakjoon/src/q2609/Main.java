package q2609;
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
		int a = Integer.valueOf(input[0]), b = Integer.valueOf(input[1]);
		int min = a < b ? a : b, max = a < b ? b : a;
		int com_multiple = a * b, com_divisor = 1, div = 2;
		while(div <= min) {
			if(min % div == 0 && max % div == 0) {
				 min /= div;
				 max /= div;
				 com_multiple /= div;
				 com_divisor *= div;
			}
			else {
				div++;
			}
		}
		bw.write(
			String.valueOf(com_divisor) + "\n" +
			String.valueOf(com_multiple) + "\n"
		);
		
		br.close();
		bw.flush();
		bw.close();
	}
}