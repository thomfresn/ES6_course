class Car{

    constructor(options){
        this.title = options.title;
    }

    drive(){
        return 'Vroom';
    }
}

class Toyota extends Car{

    constructor(options){
        super(options);
        this.color = options.color;
    }

    honk(){
        return 'Beep';
    }
}

const toyota = new Toyota({title: 'Corolla', color:'red'});
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());

