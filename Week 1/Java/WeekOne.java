package com.company;

import java.util.ArrayList;

public class WeekOne {
    // Question
    /**
     * Create a function that takes a number as an argument and returns true if the number is a valid credit card number, false otherwise.
     *     Credit card numbers must be between 14-19 digits in length, and pass the Luhn test, described below:
     *
     *     Remove the last digit (this is the "check digit").
     *     Reverse the number.
     *     Double the value of each digit in odd-numbered positions. If the doubled value has more than 1 digit, add the digits together (e.g. 8 x 2 = 16 --> 1 + 6 = 7).
     *     Add all digits.
     *     Subtract the last digit of the sum (from step 4) from 10. The result should be equal to the check digit from step 1.
     *
     *     Examples
     *     validateCard(1234567890123456) ➞ false
     *
     *  Step 1: check digit = 6, num = 123456789012345
     *  Step 2: num reversed = 543210987654321
     *  Step 3: digit array after selective doubling: [1, 4, 6, 2, 2, 0, 9, 8, 5, 6, 1, 4, 6, 2, 2]
     *  Step 4: sum = 58
     *  Step 5: 10 - 8 = 2 (not equal to 6) --> false
     *
     *     validateCard(1234567890123452) --> true
     * @param creditCardNumber credit card number we want to check
     * @return true or false
     */
    public boolean creditCardValidation(long creditCardNumber){
        // credit card number must be between 14-19 digits
        if(!correctDigitForCreditCard(creditCardNumber)){
            return false;
        }

        return lunhTest(creditCardNumber);


    }

    private boolean lunhTest(long creditCardNumber){
        long num = creditCardNumber;

        int lastDigit = (int)num%10;
        // remove one digit
        num = num/10;
        // place number in array in reverse order
        ArrayList<Integer> arrayList = new ArrayList<>();
        while(num > 0){
            long numToAdd = num%10;
            arrayList.add((int)numToAdd);
            num = num/10;
        }
        // double elements in array in odd numbered position
        for(int i = 0; i < arrayList.size(); i++){
            if(i % 2==0){
                int n = arrayList.get(i);
                n = n * 2;
                if(n >= 10){
                    n = (n%10) + (n/10);
                }
                arrayList.set(i, n);
            }
        }
        int sum = 0;
        for(int i = 0; i < arrayList.size(); i++){
            sum += arrayList.get(i);
        }
        return (10-(sum%10)==lastDigit);
    }

    private boolean correctDigitForCreditCard(long creditCardNumber){
        int counter = 0;
        long num = creditCardNumber;
        while(num > 0){
            num = num/10;
            counter++;
        }

        return (counter >= 14 && counter <= 19);
    }





public static void main(String[] args) {
    WeekOne test = new WeekOne();

    System.out.println(test.creditCardValidation(1234567890123456L));
    System.out.println(test.creditCardValidation(1234567890123452L));
}

}
