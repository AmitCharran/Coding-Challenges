// 1) This is based on Helen Yu's Making a Box challenge. This challenge is the same execpt that instead of an array of strings, your function should output a matrix of characters.

// Examples
// charBox(1) --> [
// ["#"]
// ]

// charBox(4) --> [
// ["#", "#", "#", "#"],
// ["#", " ", " ", "#"],
// ["#", " ", " ", "#"],
// ["#", "#", "#", "#"]
// ]

// charBox(2) --> [
// ["#", "#"],
// ["#", "#"]
// ]
// Notes
// As an added bonus, try making charBox(0) output [[]] and make any strings, non-integers, and negative numbers output -1.

// Note:
// A fraction is simplified if there are no common factors (except 1) between the numerator and the denominator. For example, 4/6 is not simplified, since 4 and 6 both share 2 as a factor.



function charBox(number){
    if(number === 0){
        return [[]];
    }
    ans = [];

    for(var i = 1; i <= number; i++){
        if(i === 1 || i === number){
            array = [];
            for(var j = 0; j < number; j++){
                array.push("#");
            }
            ans.push(array);
        }else {
            array = [];
            for(var j = 0; j < number; j++){
                if(j === 0 || j === (number -1)){
                    array.push("#");
                }else{
                    array.push(" ");
                }
            }
            ans.push(array);

        }
    }

    return ans;
}

console.log(charBox(4));
console.log(charBox(0));

// 2) Write a function that retrieves the top 3 longest words of a 
// newspaper headline and transforms them into hashtags. 
// If multiple words tie for the same length, 
// retrieve the word that occurs first.

// Examples
// getHashTags("How the Avocado Became the Fruit of the Global Trade")
// --> ["#avocado", "#became", "#global"]

// getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// --> ["#christmas", "#probably", "#will"]

// getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// --> ["#surprise", "#parents", "#fruit"]

// getHashTags("Visualizing Science")
// --> ["#visualizing", "#science"]

// Notes:
// If the title is less than 3 words, 
// just order the words in the title by length in descending order 
// (see example #4).

// Punctuation does not count towards a word's length.

function getHashTags(headline){
    var array = headline.split(" ");
    var ans = [];

    for(var i = 0; i < array.length; i++){
        array[i] = removePunctuation(array[i]);
    }

    var counter = Math.min(3, array.length);

    while(counter > 0){
        maxString = "";
        currentInt = -1;

        for(var i = 0; i < array.length; i++){   
            if(array[i].length > maxString.length){
                maxString = array[i];
                currentInt = i;
            }
        }   
        // remove maxString from array
        array.splice(currentInt,1);
        maxString = "#" + maxString;
        maxString = maxString.toLowerCase();
        ans.push(maxString);

        counter--;
    }
    return ans;
}

function removePunctuation(string){
    string = string.replace("!", "");
    string = string.replace("?", "");
    string = string.replace('"', "");
    string = string.replace(".", "");
    string = string.replace(",", "");
    return string;
}

console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
console.log(getHashTags("Visualizing Science"));