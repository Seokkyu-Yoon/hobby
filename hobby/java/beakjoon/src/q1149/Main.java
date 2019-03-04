package q1149;
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
//		210, 201, 102, 120, 021, 012
		int n = Integer.valueOf(br.readLine());
		int[][] house = new int[n][3];
		int[] way = new int[n]; 
		for(int i = 0; i < n; i++) {
			String[] inputLine = br.readLine().split(" ");
			ArrayList<Integer> sort = new ArrayList<Integer>();
			
		}
		br.close();
		bw.write("\n");
		bw.flush();
		bw.close();
	}
}