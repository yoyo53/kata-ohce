package info.dmerej;

public class StringReverser {
  public static String reverse(String input) {
    StringBuilder builder = new StringBuilder(input);
    builder.reverse();
    return builder.toString();
  }
}
