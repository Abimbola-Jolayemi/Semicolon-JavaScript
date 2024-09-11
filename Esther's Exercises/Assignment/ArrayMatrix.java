import java.util.Arrays;
public class ArrayMatrix {

    public static void main(String...args){
	int[][] array = {
                {200, 50, 300, 5},
                {10, 25, 7, 100},
                {25, 20, 70, 45},
                {500, 170, 11, 35}
        };

	int[] result = slice(array, 1, 1, 3);
	System.out.print(Arrays.toString(result));
    }

    public static int[] slice(int[][] array, int row, int columnStart, int columnEnd) {
        int noOfElements = columnEnd - columnStart + 1;
        int[] result = new int[noOfElements];

        for (int index = 0; index < noOfElements; index++) {
            result[index] = array[row][columnStart + index];
        }
        return result;
    }
}