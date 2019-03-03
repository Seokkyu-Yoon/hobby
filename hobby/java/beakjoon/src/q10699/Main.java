package q10699;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class Main {
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    Date date = new Date();
    TimeZone time = TimeZone.getTimeZone("Asia/Seoul");
    dateFormat.setTimeZone(time);
    bw.write(dateFormat.format(date));
    bw.flush();
    bw.close();
  }
}