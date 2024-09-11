import java.util.Scanner;

public class TaskOne{
   public static void main(String []args){
	Scanner input = new Scanner (System.in);

	System.out.print("Enter first number: ");
	int number1 = input.nextInt();

	System.out.print("Enter second number: ");
	int number2 = input.nextInt();

	System.out.print("The result is: " + ((number1 + number2) * 2));
   }
}