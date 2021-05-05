//1 Given
console.log(hello);                                   
var hello = 'world';
//After hoisting
// var hello;
// console.log(hello);  //logs indefined                                 
// var hello = 'world'; //hello = 'world'

// 2 Given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//After hoisting
//needle ='haystack';
// function test(){        // creating a function
//     var needle = 'magnet';// needle = magnet
//     console.log(needle);// logs 'magnet'
// }
// test() // runs function

//3 Given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//After hoisting
// var brendan = 'super cool'; // brendan = 'supercool'
// function print(){
//     brendan = 'only okay'; //brendan = 'only okay'
//     console.log(brendan); // logs 'only okay'
// }
// console.log(brendan); // logs 'super cool'
//Output: supercool //function print is not called

// 4. Given
var food = 'chicken'; 
console.log(food); // logs 'chicken'
eat(); 
function eat(){
    //var food; //hoisted //
    food = 'half-chicken'; // food = 'half-chicken
    console.log(food); // logs 'half-chiken'
    var food = 'gone'; // food = 'gone'
}
//OUTPUT: 
// chicken
//half-chicken

// 5. Given
// var mean; //hoisted, mean undefined
mean(); // will not run because mean is not defined as a function yet
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// OUTPUT: error

//6. Given
//var genre; //hoisted, genre undefined
console.log(genre); // logs undefined
var genre = "disco"; // genre = 'disco'
rewind(); //look for function and run
function rewind() {
    //var genre; //hoisted, indefined
    genre = "rock"; //genre = 'rock'
    console.log(genre); // logs 'rock'
    var genre = "r&b"; // genre = 'r&b'
    console.log(genre); // logs 'r&b'
}
console.log(genre); // logs 'disco'
// OUTPUT:
// undefined
// rock
// r&b
// disco

// 7. Given
dojo = "san jose";
console.log(dojo); // logs 'san jose'
learn(); 
function learn() {
    //var dojo; //hoisted indefined
    dojo = "seattle"; 
    console.log(dojo); // logs 'seattle'
    var dojo = "burbank"; // dojo = 'burbank'
    console.log(dojo); // logs 'burbank'
}
console.log(dojo); // logs 'sanjose'

//8. Given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // cannot reaasign dojo beacase it is const
    }
    return dojo;
}
// OUTPUT:
// {name: 'Chicago', students: 65, hiring = true}
// error


