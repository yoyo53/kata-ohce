package info.dmerej;

import java.time.LocalTime;

public class SystemClock  {
  public int getCurrentHour() {
    var now = LocalTime.now();
    return now.getHour();
  }
}
