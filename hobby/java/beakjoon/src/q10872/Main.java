package q10872;

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
		bw.write(String.valueOf(factorial(N)) + '\n');
		bw.flush();
		bw.close();
	}
	private static int factorial(int number) {
		return number > 1 ? number * factorial(number - 1) : 1;
	}
}
