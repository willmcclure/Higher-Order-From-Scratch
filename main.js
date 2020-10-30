let words = ['spray', 'limit', 'elite', 'title', 'destruction', 'apple'];

// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.

const newFilter = (array, func) => {
    let filtering = [];
    for(i = 0; i < array.length; i++){
        if(func(array[i])){
            filtering.push(array[i])
        }
    } return filtering
}

let normalFilter = words.filter(element => element == 'elite')
let myFilter = newFilter(words, element => element == 'elite')

console.log("The usual way of filtering", normalFilter);
console.log("My version of filtering", myFilter);

// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.

const newMap = (array, func) => {
    let mapping = [];
    for(i = 0; i < array.length; i++){
        mapping.push(func(array[i]))
    }
    return mapping
}

let m = words.map(element => element + 'ish')
let n = newMap(words, element => element + 'ish')

console.log("The usual way of mapping", m)
console.log("My version of mapping", n)

// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
let x = [100, 200, 300, 400, 500];

const newReduce = (array, func) => {
    let adding = 0
    for(i = 0; i < array.length; i++){
        let value = array[i];
        let index = i;
        adding = func(adding, value, index, array)
    } return adding
}

let z = x.reduce((adding, value) => adding + value);
let a = newReduce(x, (adding, value) => {return adding + value})

console.log('The usual way of reducing', z)
console.log("My version of reducing", a)