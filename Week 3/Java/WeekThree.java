package com.company;

public class WeekThree {
//    Java: The Atbash cipher is an encryption method in which each letter of a word is replaced with its "mirror" letter in the alphabet: A <=> Z; B <=> Y; C <=> X; etc.
//
//    Create a function that takes a string and applies the Atbash cipher to it.
//
//    Examples
//    atbash("apple") --> "zkkov"
//
//    atbash("Hello world!") --> "Svool dliow!"
//
//    atbash("Christmas is the 25th of December") --> "Xsirhgnzh rh gsv 25gs lu Wvxvnyvi"
//
//    Notes:
//    Capitalisation should be retained.
//    Non-alphabetic characters should not be altered.

    public String atBash(String name){
        StringBuilder sb = new StringBuilder();

        for(int i = 0;  i < name.length(); i++){
            sb.append(
                    atBashMirrorChar(name.charAt(i))
            );
        }
        return sb.toString();
    }

    private char atBashMirrorChar(char character) {
        if(character >= 'a' && character <= 'z'){
            return generateComplimentLowerCase(character);
        }else if(character >= 'A' && character <= 'Z'){
            return generateComplimentUpperCase(character);
        }else{
            return character;
        }
    }

    private char generateComplimentUpperCase(char character) {
        int charNumVal = character - 'A' + 2;
        int newCharNum = 27- charNumVal;
        int ans = newCharNum + 'A';
        return (char) ans;
    }

    private char generateComplimentLowerCase(char character) {
        int charNumVal = character - 'a' + 2;
        int newCharNum = 27- charNumVal;
        int ans = newCharNum + 'a';
        return (char) ans;
    }

    public static void main(String[] args) {
        WeekThree test = new WeekThree();
        System.out.println(test.atBash("apple"));
        System.out.println(test.atBash("Hello World!"));
        System.out.println(test.atBash("Christmas is the 25th of December"));
    }


}
