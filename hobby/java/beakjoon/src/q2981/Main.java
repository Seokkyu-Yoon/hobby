package q2981;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
 
public class Main {    
    public static void main(String[] args) throws IOException {
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    	BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int n = Integer.parseInt(br.readLine());
        
        int[] array = new int[n];
        for (int i = 0; i < n; i++)
            array[i] = Integer.parseInt(br.readLine());
        Arrays.sort(array);
        int[] numbers = dividers(array[array.length - 1] - array[0]);
        
        for(int num : numbers) {
            boolean add = true;
            int mod = array[0] % num;
            for (int i = 1; i < array.length; i++) {
                if(array[i] % num != mod) {
                    add = false;
                    break;
                }
            }
            if(add) {
                bw.write(String.valueOf(num) + " ");
            }
        }
        bw.flush();
    }
    
    private static int[] dividers(int num) {
        List<Integer> list = new LinkedList<>();
        list.add(num);
        
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                if (i == num / i) {
                    list.add(i);
                }
                else {
                    list.add(i);
                    list.add(num / i);
                }
            }
        }
        Collections.sort(list);
        
        int[] result = new int[list.size()];
        for (int i = 0; i < list.size(); i++)
            result[i] = list.get(i);
        return result;
    }
}