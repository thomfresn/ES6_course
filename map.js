var numbers = [1,2,3];

var doubleNumbers = numbers.map(function(number){
    return number * 2 ;
});

console.log(doubleNumbers);

///////////////////////////////////

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds = trips.map(trip => trip.distance / trip.time);

  console.log(`speeds : ${speeds}`);

  ////////////////////////////////////
  var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
  
  function pluck(array, property) {
    return array.map(function(item){
        return item[property];
    });
 }

  console.log(pluck(paints, 'color')); // returns ['red', 'yellow', 'blue'];