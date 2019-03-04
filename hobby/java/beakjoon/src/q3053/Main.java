package q3053;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static final double PI = Math.PI;
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int r = Integer.valueOf(br.readLine());
		br.close();
		bw.write(String.format("%.6f", r * r * PI) + "\n");
		bw.write(String.format("%.6f", r * r * 2.) + "\n");
		bw.flush();
		bw.close();
	}
}