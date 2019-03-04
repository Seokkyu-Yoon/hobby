package q1676;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int N = Integer.parseInt(br.readLine());
		br.close();
		
		bw.write(String.valueOf(getZeroCounts(N)) + '\n');
		bw.flush();
		bw.close();
	}
	private static int getZeroCounts(int num) {
		int[] result = new int[2];
		while(num > 1) {
			result[0] += get2Counts(num);
			result[1] += get5Counts(num);
			num--;
		}
		return result[0] > result[1] ? result[1] : result[0];
	}
	private static int get2Counts(int num) {
		int count = 0;
		while(num % 2 == 0) {
			num /= 2;
			count++;
		}
		return count;
	}
	private static int get5Counts(int num) {
		int count = 0;
		while(num % 5 == 0) {
			num /= 5;
			count++;
		}
		return count;
	}
}