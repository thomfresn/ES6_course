var expense = {
    type: 'Business',
    amount: '45$'
};

const {type, amount} = expense; // var type = expense.type; pull off a property from the object

console.log(type);

//////////////////////

var file = {
    extension: '.jpg',
    name : 'repost',
    size: 14040
};

function fileSummary({name, extension, size}){
    return `The file ${name}${extension} is of size ${size}`
}

console.log(fileSummary(file));

///////////////////////

const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [google, facebook, uber] = companies; // var google = companies [0]

///////////////////////////

const companiesAndLocation = [
    {name: 'Google', location: 'Moutnain view'},
    {name: 'FAcebook', location: 'Menlo Park'},
    {name: 'Uber', location: 'San Franciscp'},
];

const [{googleLocation}] = companiesAndLocation;
console.log(googleLocation);

///////////////////////////

function signup({ email, username, password, city, dateofbirth}){
    //Create user name

}

//......
const user = {
    username: 'myname',
    password: 'password', 
    email:'thom@example.com',
    dateofbirth: '12/02/1984',
    city: "NYC"
};
signup(user);

//////////////////////////

const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];
  
  const classesAsObject = classes.map(([subject, time, teacher]) => {
     return { subject, time, teacher };
  });

  //results in const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]

  /////////////////////////////////////

  const numbers = [1, 2, 3];


  function double([num, ...rest]) {
    if (!num) { return []; }
    return [num * 2, ...double(rest)];
}

  console.log(double(numbers));
