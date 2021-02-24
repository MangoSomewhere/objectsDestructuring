// object

const user = {
    //object properties 
    name : 'Drew' ,
    age : 26, 
    married: false,
    purchases: ['food', 'degree', 'Starcraft 2'],

    sayName: function( ) {
        console.log('Hello my name is ' + this.name);
    }
    // methods
};
/* 

keyword 'this' :
references the object

*/

user.sayName();

const alphabet = ['a', 'b', 'c','d', 'e'];
const numbers = [1,2,3,4,5];

//destructuring 

const [a,b,c] = alphabet // instead of console.log(alphabet[0])
const newArray = alphabet.concat(numbers);
console.log(newArray)