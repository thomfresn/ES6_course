const add = (a, b) =>  a + b;

console.log(add(1,2));

const profile = {
    name: 'Alex',
    getName : () =>  {
        return this.name;
    }
};

console.log(profile.getName());