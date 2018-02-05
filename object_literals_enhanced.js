function createBookShop(inventory){
    return  {
        inventory, // === inventory: inventory,
        inventoryValue(){//inventoryValue: function(){
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title){
            return this.inventory.find(book => book.title === title).price;            
        }
    };
}

const inventory = [
    {title: 'Harry Potter', price: 10},
    {title: 'Eloquent JS', price:15},
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

/////////////////

function saveFile(url, data){
    $.ajax({ //HTTP request
        url, 
        data, 
        method: 'POST'
    }) 
}

const url = "http://fileupload.com";
const data = {color: 'red'};

saveFile(url, data);