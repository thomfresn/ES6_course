function makeAjaxRequest(url, method = 'GET'){
    return method;
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));
console.log(makeAjaxRequest('google.com', undefined));

////

function User(id){
    this.id = id;
}

function generateID(){
    return Math.random()* 999999;
}

function createAdminUser(user = new User(generateID())){
    user.admin = true;

    return user;
}

const user = new User(generateID());

console.log(createAdminUser());
console.log(createAdminUser(user));