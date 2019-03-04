package q1107;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

	public static void main(String[] args) throws IOException {
		String input = br.readLine();
		int n = Integer.valueOf(input);
		
		int e = Integer.valueOf(br.readLine());
		
		int[] error = new int[e];
		if (e > 0) {
			String[] errors = br.readLine().split(" ");
			for(int i = 0; i < e; i++) {
				error[i] = Integer.valueOf(errors[i]);
			}
		}
		br.close();
		int min = Integer.MAX_VALUE, value = 0;
		for(int i = 0; i < 10; i++) {
			if(i > 0 && checkError(error, i)) {
				continue;
			}
			for(int j = 0; j < 10; j++) {
				if(i + j > 0 && checkError(error, j)) {
					continue;
				}
				for(int k = 0; k < 10; k++) {
					if(i + j + k > 0 && checkError(error, k)) {
						continue;
					}
					for(int l = 0; l < 10; l++) {
						if(i + j + k + l > 0 && checkError(error, l)) {
							continue;
						}
						for(int m = 0; m < 10; m++) {
							if(i + j + k + l + m > 0 && checkError(error, m)) {
								continue;
							}
							for(int o = 0; o < 10; o++) {
								if(checkError(error, o)) {
									continue;
								}
								if(i > 0) {
									value = 6;
								}
								else if(j > 0) {
									value = 5;
								}
								else if(k > 0) {
									value = 4;
								}
								else if(l > 0) {
									value = 3;
								}
								else if(m > 0) {
									value = 2;
								}
								else {
									value = 1;
								}
								value += Math.abs(i * 100000 + j * 10000 + k * 1000 + l * 100 + m * 10 + o - n);
								if(min > value) {
									min = value;
								}
							}
						}
					}
				}
			}
		}
		
		int def = Math.abs(n - 100);
		bw.write(String.valueOf(Math.min(min, def)) + "\n");
		bw.flush();
		bw.close();
	}
	
	public static boolean checkError(int[] errors, int value) {
		for(int error : errors) {
			if(error == value) {
				return true;
			}
		}
		return false;
	}
}