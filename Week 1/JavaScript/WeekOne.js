function additivePersistence(number){
    counter = 0;
    return recursiveAdditivePersistence(counter, number);
}

function recursiveAdditivePersistence(counter, number){
    if(number < 10){
        return counter;
    }
    counter = counter + 1;
    new_num = 0;
    while(number > 0){
        new_num = new_num + number%10;
        number = Math.floor(number/10);
    
    }

    return recursiveAdditivePersistence(counter, new_num)
}

function multiplicativePersistence(number){
    counter = 0;
    return recursiveMultiplicativePersistence(counter, number);
}
function recursiveMultiplicativePersistence(counter, number){
    if(number < 10){
        return counter;
    }
    
    counter = counter + 1;
    new_num = 1;
    while(number > 0){
        new_num = new_num * (number%10);
        number = Math.floor(number/10);
    }
    return recursiveMultiplicativePersistence(counter, new_num);
}

console.log(additivePersistence(123456));
console.log(multiplicativePersistence(123456));

