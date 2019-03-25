package q1992;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    int n = Integer.valueOf(br.readLine());
    Cell[][] matrix = new Cell[n][n];
    for(int x = 0; x < n; x++) {
      char[] input = br.readLine().toCharArray();
      for(int y = 0; y < n; y++) {
        matrix[x][y] = new Cell(String.valueOf(input[y]));
      }
    }
    for(Cell cell : compressed(matrix, n)[0]) {
      bw.write(cell.value);
    }
    br.close();
    bw.flush();
    bw.close();
  }

  public static Cell[][] compressed(Cell[][] matrix, int n) {
    if(n == 1) return matrix;
    Cell[][] compressedMatrix = new Cell[n/2][n/2];
    for(int cX = 0; cX < n/2; cX++) {
      for(int cY = 0; cY < n/2; cY++) {
        int mX = 2*cX;
        int mY = 2*cY;
        if(
          !matrix[mX][mY].value.contains("(") &&
          matrix[mX][mY].value.equals(matrix[mX][mY+1].value) &&
          matrix[mX+1][mY].value.equals(matrix[mX+1][mY+1].value) &&
          matrix[mX][mY].value.equals(matrix[mX+1][mY].value)
        ) {
          compressedMatrix[cX][cY] = new Cell(matrix[mX][mY].value);
        } else {
          compressedMatrix[cX][cY] = new Cell(String.format("(%s%s%s%s)",
            matrix[mX][mY].value, matrix[mX][mY+1].value, matrix[mX+1][mY].value, matrix[mX+1][mY+1].value
          ));
        }
      }
    }
    return compressed(compressedMatrix, n/2);
  }
}

class Cell {
  String value;
  public Cell(String value) {
    this.value = value;
  }
}