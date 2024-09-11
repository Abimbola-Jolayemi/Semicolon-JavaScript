import java.util.Arrays;

public class ArrayOfOddAndEvenCounters{
	public static int[] returnArray(int[] numbers){
		int[] new_array = new int[2];
		int count_odd = 0;
		int count_even = 0;

		for (int index = 0; index < numbers.length; index++){
			if(numbers[index] % 2 == 0){
				count_even++;
			} else{
				count_odd++;
			}
		}
		new_array[0] = count_even;
		new_array[1] = count_odd;
		return new_array;
	}

	public static void main(String []args){
		int[] numbers = {2, 1, 5, 7, 8};

		System.out.println(Arrays.toString(returnArray(numbers)));
	}
}