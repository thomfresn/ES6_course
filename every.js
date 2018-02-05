var computers = [
    {name: 'Apple', ram : 24},
    {name: 'Compaq', ram : 4},
    {name: 'Acer', ram : 32}
];

console.log(computers.every(function(computer){
    return computer.ram > 16;
}));

console.log(computers.some(function(computer){
    return computer.ram > 16;
}));


//////////////////////////////////////////////////

function Field(value){
    this.value = value;
};

Field.prototype.validate = function(){
    return this.value.length > 0;
};

var username = new Field("Thom");
var password = new Field("mypassword");
var birthDate = new Field("");

console.log([username, password, birthDate].every(function(arrayElement){
    return arrayElement.validate();
}));

console.log([username, password, birthDate].some(function(arrayElement){
    return arrayElement.validate();
}));




