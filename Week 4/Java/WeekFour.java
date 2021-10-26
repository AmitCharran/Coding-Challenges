package com.company;

import java.util.Arrays;

public class WeekFour {

//    Find the Contiguous Subarray with Sum to a Given Value in an array.
//
//    For example :
//
//            1
//            2
//            3
//            4
//            5
//            6
//
//    arr[]={14, 12, 70, 15, 99, 65, 21, 90};
//    X =97.
//    Sum found between index 1 to 3
//    Elements are 12, 70 and 15

public int[] contiguousSubArraySum(int[] givenArray, int givenValue){
    int[] ans  = new int[givenArray.length];
    Arrays.fill(ans, 0);
    int sum = 0;

    for(int i =0; i < givenArray.length; i++){

        for(int j = i; j < givenArray.length; j++){
            sum += givenArray[j];
            ans[j] = givenArray[j];
            if(sum >= givenValue){
                break;
            }
        }
        if(sum == givenValue){
            break;
        }

        Arrays.fill(ans, 0); // reset array
        sum = 0;// reset sum
    }

    int length = 0;
    for(int x: ans){
        if(x != 0){
            length++;
        }
    }

    int[] fixedSizedAnswer = new int[length];

    int i = 0;
    for(int x: ans){
        if(x !=0){
            fixedSizedAnswer[i++] = x;
        }
    }

    return fixedSizedAnswer;
}

    public static void main(String[] args) {
        WeekFour wf = new WeekFour();

        int arr[]={14, 12, 70, 15, 99, 65, 21, 90};
        int[] a = wf.contiguousSubArraySum(arr, 97);
        for(int x: a){
            System.out.println(x);
        }
    }



}
