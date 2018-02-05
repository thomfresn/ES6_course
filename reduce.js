var numbers = [10,20,30];

console.log(numbers.reduce(function(sum, number){
    return sum + number;
}, 5));

///////////////////////////////////

var primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
];

var colors = primaryColors.reduce(function(acc, color){
   acc.push(color);
   return acc;
},[]);

console.log(colors);


///////////////////////////////////

function balancedParens(string){
    return !string.split("").reduce(function(acc, char){
        if(acc < 0){return acc;}
        if(char === "("){return ++acc;}
        if(char === ")"){return --acc;}
        return acc;
    },0)
}
console.log(balancedParens("(()))("));

///////////////////////////////////////
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    return array.reduce(function(acc, arrayElem){
        if(!acc.find(function(accElem){
            return accElem === arrayElem;
        })){
            acc.push(arrayElem);
        }    
        return acc;
    },[]);
  }

console.log(unique(numbers));