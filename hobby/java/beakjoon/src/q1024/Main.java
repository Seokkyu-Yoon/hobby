package q1024;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	public static void main(String[] args) throws IOException {
		String[] input = br.readLine().split(" ");
		br.close();
		long n = Long.valueOf(input[0]);
		int len = Integer.valueOf(input[1]);
		
		long[] prevCal = getSum();
		
		long startNum = -1;
		while(len <= 100) {
			if(len % 2 == 0) {
				if(n % len == len / 2 && n >= prevCal[len]) {
					startNum = n / len - len / 2 + 1;
					break;
				}
			}
			else {
				if(n % len == 0 && n >= prevCal[len]) {
					startNum = n / len - len / 2;
					break;
				}
			}
			len++;
		}
		if(startNum < 0) {
			bw.write("-1");
		}
		else {
			for(int i = 0; i < len; i++) {
				if (i > 0) {
					 bw.write(" ");
				}
				bw.write(String.valueOf(startNum + i));
			}
		}
		bw.write("\n");
		bw.flush();
		bw.close();
	}
	
	public static long[] getSum() {
		long[] sum = new long[101];
		sum[0] = 0;
		for(int i = 1; i < 101; i++) {
			sum[i] = sum[i - 1] + i - 1;
		}
		return sum;
	}
}