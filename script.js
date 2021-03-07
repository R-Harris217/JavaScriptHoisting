// 1. GIVEN 
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); logs undefined
// hello = 'world';

// 2. GIVEN 
var needle = 'haystack';
test ();
function test() {
    var needle = 'magnet';
    console.function call from-rainbow">log(needle);
}
// function test() {
//     var needle;
//     needle = 'magnet';
//     console.function call from-rainbow">log(needle); syntax error nothing is run
// }
// var needle;
// needle = 'haystack';
// test ();

// 3. GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// var brendan;
// brendan = 'super cool';
// console.log(brendan); logs super cool

// 4. GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// var food;
// food = 'chicken';
// console.log(food); logs chicken
// eat(); logs half-chicken

// 5. GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// function(){
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food)
// }
// var mean;
// mean = function()
// mean(); mean is not a function
// console.log(food);
// console.log(food);

// 6. GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// function rewind(){
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// var genre;
// console.log(genre); logs undefined
// genre = "disco";
// rewind(); logs rock, r&b
// console.log(genre); logs disco

// 7. GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// function learn(){
//     var dojo;
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo); logs san jose
// learn(); logs undefined, seattle, burbank
// console.log(dojo); logs san jose

// 8. GIVEN
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
        dojo = "closed for now";
    }
    return dojo;
}
// function makeDojo(name, students){
//     const dojo;
//     dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now"; results in an error, dojo is const
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));