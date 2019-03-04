package q2309;
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
		ArrayList<Integer> result = new ArrayList<Integer>();
		int[] arrShorts = new int[9];
		int heights = -100;
		for(int i = 0; i < 9; i++) {
			arrShorts[i] = Integer.valueOf(br.readLine());
			heights += arrShorts[i];
		}
		br.close();
		
		for (int i = 0; i < 8; i++) {
			for(int j = i + 1; j < 9; j++) {
				if(arrShorts[i] + arrShorts[j] == heights) {
					for(int k = 0; k < 9; k++) {
						if (k != i && k != j) {
							result.add(arrShorts[k]);
						}
					}
					break;
				}
			}
			if(result.size() > 0) {
				break;
			}
		}
		Collections.sort(result);
		for(int i : result) {
			bw.write(i + "\n");
		}
		bw.flush();
		bw.close();
	}
}