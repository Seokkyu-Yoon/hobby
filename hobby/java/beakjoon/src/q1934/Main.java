package q1934;
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
		while(n-- > 0) {
			String[] input = br.readLine().split(" ");
			int a = Integer.valueOf(input[0]), b = Integer.valueOf(input[1]);
			int min = a < b ? a : b, max = a < b ? b : a;
			int result = a * b, div = 2;
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
		}
		br.close();
		bw.flush();
		bw.close();
	}
}