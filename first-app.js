var name = 'watson';
var age = 25;
var hashobby = true;

// normal function
// function processUser(Username, userAge, userhasHobby) {
//     return (
//         'Processed User Details: ' +
//         'Username: ' + Username +
//         ', UserAge: ' + userAge +
//         ', UserHasHobby: '+ userhasHobby
//     );
// }

// using arrow function
const processUser = (Username, userAge, userhasHobby) =>{
    return(
        'Processed User Details: ' +
        'Username: ' + Username +
        ', UserAge: ' + userAge +
        ', UserHasHobby: '+ userhasHobby
    );
}

const add = (a, b) => a + b ;

const addone = a => a + 5;

const AddRandom = () => 9 + 8;

console.log(add(4,5));

console.log(addone(9));
console.log(AddRandom());
console.log(processUser(name, age, hashobby));
