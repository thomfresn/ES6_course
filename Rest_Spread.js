

function addNumbers(...numbers){ /// REST
    return numbers.reduce((sum, number) => sum + number ,0);
}

console.log(addNumbers(1,2,3,4,5));

////// SPREAD

const defaultColors =  ['red', 'green'];
const favColors =  ['orange', 'yellow'];

console.log([... defaultColors, ...favColors]); // equivalent to defaultColors.concat(favColors)


//////

function validateShoppingList(...items){
    if(items.indexOf('milk') < 0){
        return ['milk', ... items];
    }
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'));

//////////////////

const MathLibrary = {
    calculateProduct(...rest){
        return this.multiply(...rest);
    },
    multiply(a, b){
        return a * b;
    }
};