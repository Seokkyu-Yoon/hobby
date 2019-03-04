package q2751;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

		ArrayList<Integer> arr_result = new ArrayList<Integer>();
		int n = Integer.parseInt(br.readLine());

		for (int i = 0; i < n; i++) {
			arr_result.add(Integer.parseInt(br.readLine()));
		}
		Collections.sort(arr_result);

		for (int result : arr_result) {
			bw.write(String.valueOf(result) + '\n');
		}
		bw.flush();
		bw.close();
	}
}