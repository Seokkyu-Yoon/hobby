package q1022;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		String[] input = br.readLine().split(" ");
		br.close();
		int leftX = 0, leftY = 0, rightX = 0, rightY = 0;
		for (int i = 0; i < 4; i++) {
			switch(i) {
			case 0:
				leftX = Integer.parseInt(input[i]);
				break;
			case 1:
				leftY = Integer.parseInt(input[i]);
				break;
			case 2:
				rightX = Integer.parseInt(input[i]);
				break;
			case 3:
				rightY = Integer.parseInt(input[i]);
				break;
			}
		}
		int height = rightX - leftX + 1, width = rightY - leftY + 1;
		int[][] square = new int[height][width];
		int start = leftX < leftY ? leftX : leftY;
		int end = rightX > rightY ? rightX : rightY;
		
		for(int x = start; x <= end; x++) {
			for(int y = start; y <= end; y++) {
				if (x < leftX || x > rightX || y < leftY || y > rightY) {
					continue;
				}
				if(x + y <= 0) {
					if (x > y) {
						square[x - leftX][y - leftY] = (int)Math.pow(y, 2) * 4 + 1 + x - y;
					}
					else {
						square[x - leftX][y - leftY] = (int)Math.pow(x, 2) * 4 + 1 + x - y;
					}
				}
				else {
					if (x >= y) {
						square[x - leftX][y - leftY] = (int)Math.pow(x * 2 + 1, 2) - x + y;
					}
					else {
						square[x - leftX][y - leftY] = (int)Math.pow((y - 1) * 2 + 1, 2) - x + y;
					}
				}
			}			
		}
		
		int maxValue = square[0][0];
		if (maxValue < square[0][width - 1]) {
			maxValue = square[0][width - 1];
		}
		if (maxValue < square[height - 1][0]) {
			maxValue = square[height - 1][0];
		}
		if (maxValue < square[height - 1][width - 1]) {
			maxValue = square[height - 1][width - 1];
		}
		int maxLength = String.valueOf(maxValue).length();
		for(int x = 0; x < height; x++) {
			for (int y = 0; y < width; y++) {
				if(y > 0) {
					bw.write(" ");
				}
				for(int space = 0; space < maxLength - String.valueOf(square[x][y]).length(); space++) {
					bw.write(" ");
				}
				bw.write(String.valueOf(square[x][y]));
			}
			if (x < height - 1) {
				bw.write("\n");
			}
		}
		bw.flush();
		bw.close();
	}
}
