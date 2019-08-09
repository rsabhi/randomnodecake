// const person = {
//     name: 'abhi',
//     age: 29,

//     greet() {
//         //console.log(this.name);
//     }
// };
// person.greet();



// const hobbies = ['badminton', "cricket"];

// // console.log (hobbies.map(hobby =>  "Hobby: " + hobby
// // ));
// // console.log(hobbies);

// // const copyarray = hobbies.slice();

// // console.log(copyarray);

// // const copyarray = [hobbies];

// // console.log(copyarray);

// // hobbies.push("laughing");

// // console.log(hobbies);

// // const copyarray = [...hobbies];

// // console.log(copyarray);

// const copiedperson = {...person}
// console.log(copiedperson);
// console.log(person);

// const somefun = (...args) => {
//     return args;
// }

// console.log(somefun (1,2,3,4,6,9));
 
person = {
    name:'abhilash',
    age:34,
    greet() {
        console.log("hi there: " + this.name);
    }
};
//person.greet();

const printanother = ({name, age}) => {
   // console.log(name, age);
}

printanother(person);

// object destructuring

const {name, age} = person;

//console.log(name, age);

const hobbies = ['cycling', 'walking'];

const [hob1, hob2]=hobbies;

console.log(hob1, hob2);