package com.company;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class WeekTwo {

    public static void main(String[] args) {
    // 1) Write a Java Program to iterate HashMap using While and advance for loop.
        HashMap<Integer, String> exampleMap = new HashMap<>();
        exampleMap.put(1, "one");
        exampleMap.put(2, "two");
        exampleMap.put(3, "three");
        exampleMap.put(4, "four");
        exampleMap.put(5, "five");


        // iterate hashmap with while loop
        Iterator iterator = exampleMap.entrySet().iterator();
        System.out.println("Iteration with while loop");
        while(iterator.hasNext()){
            Map.Entry mapEntry = (Map.Entry) iterator.next();
            System.out.println("Key: " + mapEntry.getKey() +
                    " Value: " + mapEntry.getValue());
        }

        // iterate with for loop
        System.out.println("\nIteration with for loop");
        for(Map.Entry mapEntry: exampleMap.entrySet()){
            System.out.println("Key: " + mapEntry.getKey() +
                    " Value: " + mapEntry.getValue());
        }

        System.out.println("Checking for String Rotation: Below should return true");
        System.out.println(checkStringRotation("deabc", "abcde"));
        System.out.println("Checking for String Rotation: Below should return false");
        System.out.println(checkStringRotation("dzabc", "abcde"));

    }


//    2) Write a program which accepts two
//    given String and checks if they are the
//    rotation of each. If they then return true
//    otherwise return false. A String is said to
//    be a rotation of other string if they contain
//    same characters and the sequence is rotated across
//    any character, e.g. "dabc" is a rotation of "abcd" but "dbac" is not.

    public static boolean checkStringRotation(String string1, String string2){
        if(string1.length() != string2.length()){
            return false;
        }

        int counter = 0;
        int length = string1.length();

        while(counter < length){
            int currentIndex = 0;
            int counterForChecking = 0;
            int string1Index = counter;

            while(currentIndex < length){
                if(string1.charAt(string1Index) != string2.charAt(currentIndex)){
                    break;
                }
                counterForChecking++;
                if(counterForChecking == length){
                    return true;
                }
                string1Index = (string1Index+1) % length;
                currentIndex++;
            }

            counter++;
        }
        return false;
    }

}
