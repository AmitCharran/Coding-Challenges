// JavaScript:

// 1) Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". Your function should also exclude all the mono-syllabic words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing", the "-ing" is not an inflection affix.

// Examples
// ingExtractor("coming bringing Letting sing") --> ["coming", "bringing", "Letting"]

// ingExtractor("going Ping, king sHrink dOing") --> ["going",, "dOing"]

// ingExtractor("zing went ring, ding wing SINk") --> []

// Notes:
// Mono-syllabic means a word containing just one syllable.


function ingExtractor(string){
    array_of_words = string.split(/(\s+)/);
    
    array_answer = [];

    for (word of array_of_words){
        if(word.includes("ing") && !isOneSyllable(word)){
            array_answer.push(word);
        }
    }

    return array_answer;

}

function isOneSyllable(string){

    for(var i = 0; i < string.length; i++){
        character = string.charAt(i);
        if(isVowel(character)){
            if(character === 'i' && (i+2) < string.length){
                if(string.charAt(i + 1) === 'n' && string.charAt(i + 2) === 'g'){
                    return true;
                }
            }else{
                return false;
            }
        }
    }

    return false;
}

function isVowel(character){
    character = character.toLowerCase();
    if(character === 'a' || character === 'i' || character === 'e' || character === 'o'|| character === 'u'){
        return true;
    }
    return false;


}
console.log("Testing ing extractor with input\ngoing Ping, king sHrink dOing")
console.log(ingExtractor("going Ping, king sHrink dOing"))




// 2) Your task is to create a function that simulates a vending machine.

// Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

// The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

// The return value is an object with 2 properties:

// - product: the product name that the user selected.
// - change: an array of coins (can be empty, must be sorted in descending order).

// Examples
// vendingMachine(products, 200, 7) ---> { product: "Crackers", change: [ 50, 20, 10 ] }
// vendingMachine(products, 500, 0) ---> "Enter a valid product number"
// vendingMachine(products, 90, 1) ---> "Not enough money for this product"

// Notes:
// - If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
// - If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
// - If there's no change, return an empty array as the change.


products = [
    cracker = { name: "cracker", price: 210, number: 1},
    ramen = {name: "ramen", price: 130, number: 2},
    milk = {name: "milk", price: 90, number: 3},
    caramel = {name:"caramel",price:35,number:4},
    book = {name:"book",price:420,number:5},
    pants= {name:"pants",price:780,number:6},
    bacon_egg_cheese= {name:"Bacon Egg And Cheese on a roll", price:330,number:7},
    gateorade={name:"Gatorade",price:80,number:8}
]

function vendingMachine(products, paying, number){
    if(number > products.length || number <= 0){
        return "Enter a valid number";
    }

    product = products[number - 1];
    if (product.price > paying){
        return `Not enough money for this product: ${product.name} - ${product.price}\nYou gave: ${paying}`;
    } 

    // The coins used for the change are the following: [500, 200, 100, 50, 20, 10]
    change = paying - product.price;
    return calculateChange(change);
}

function calculateChange(change){
    change_options = [500, 200, 100, 50, 20, 10];
    change_array = [];

    while(change >= 10){
        for(option of change_options){
            if(change >= option){
                change = change - option;
                change_array.push(option);
                break;
            }
        }
    }
    return change_array;
}

console.log(vendingMachine(products, 8020, 3));
