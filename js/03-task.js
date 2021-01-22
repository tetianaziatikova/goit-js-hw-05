class Storage {
    constructor (items) {
        this.items = items;
    }

    getItems () {
        return this.items;

    }

    addItem (anotherItem) {
        this.items.push(anotherItem);
    }

    removeItem (item) {
        for (let i = 0; i < this.items.lenght; i++) {
            // console.log(items[i]);

            if (this.item[i] !== item)  {
                continue 
            } return this.items.splice(i, 1);
        } 
        return console.log("Такого товара нет на складе");
    }
}


const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);
  
// storage.getItems();
// console.log(storage.getItems());
// storage.addItem('Вишня');
// console.log(storage.getItems());


const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


// const storage = ["apple", "orange", "banana", "chery"];
// console.log(storage);

// const findItem = function (fruit, arrayOfFruits) {
//     for (let index = 0; index < arrayOfFruits.lenght; index++) {
//         console.log(arrayOfFruits[index]);

//         if (arrayOfFruits[index] === fruit)  {
//             return arrayOfFruits.splice(index, 1);
//         }
//     }


// };

// console.log(findItem ("banana", storage));


