//implementing a function called receivesAFunction that takes a callback function as argument
function receivesAFunction ( received ) {
    return received ();
}
receivesAFunction (function () {return "we'll never live on mars"});

//implementing a function called returnsANamedFunction that takes not arguments 
//it then returns a named function
function returnsANamedFunction () {
    return function mathlover () {
        console.log ( 4*2 )
    };
}
const multiplication = returnsANamedFunction ();

//implementing a function called returnsAnAnonymousFunction
//it takes no arguments and returns an anonymous function
function returnsAnAnonymousFunction () {
    return function(){
        console.log("Isn't life beautifull")
    };
}