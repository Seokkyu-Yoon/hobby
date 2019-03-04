package q9375;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.HashMap;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int steps = Integer.valueOf(br.readLine());
		while(steps-- > 0) {
			HashMap<String, Integer> cluster_list = new HashMap<String, Integer>();
			int n = Integer.valueOf(br.readLine());
			for(int wears = 0; wears < n; wears++) {
				String cluster = br.readLine().split(" ")[1];
				if(cluster_list.containsKey(cluster)) {
					cluster_list.put(cluster, cluster_list.get(cluster) + 1);
				}
				else {
					cluster_list.put(cluster, 1);
				}
			}
			int result = 1;
			for(int i : cluster_list.values()) {
				result *= i + 1;
			}
			bw.write(String.valueOf(result - 1) + "\n");
		}
		br.close();
		bw.write("");
		bw.flush();
		bw.close();
	}
}