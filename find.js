var users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'}
];

user = users.find(function(user){
    return user.name === 'Alex';
});

console.log(user);



/////////////////////////////////////

var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
  ];

function findWhere(array, criteria) {
    var element = array.find(function(arrayElement){
        var propertyName = Object.keys(criteria)[0];
        return arrayElement[propertyName] == criteria[propertyName];
    });
    return element;
  };

console.log(findWhere(ladders, { height: 25 }));// result: { id:3, height: 25 }

