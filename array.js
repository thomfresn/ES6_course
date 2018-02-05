var colors = ['red', 'blue', 'green'];

//pass in an anonymous (iterator) function called for each elememnt of the array
colors.forEach(function(color){
    console.log(color);
});

///////////////////////////////////

var numbers = [1,2,3,4,5];

var sum = 0;

function adder(number){
    sum+= number;
}

//pass a reference to the function
numbers.forEach(adder);

console.log(sum);

////////////////////////////////////////

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];
  images.forEach(function(image){
     areas.push(image.height * image.width);
  });

  areas.forEach(function(area){
    console.log(area);
  });