function outerFunction(){
    var a = 20;

    function innerFunction(){
        var b =10;
     console.log("Inner Function: ", a+b);

    }
    return innerFunction
}
const result = outerFunction();
result();

// Output:
// Inner Function:  30
// Explanation:

// In this example, we have an outer function `outerFunction` that declares a variable `a` and an inner function `innerFunction` that declares a variable `b`.
// The inner function has access to the variable `a` from its outer scope due to JavaScript's closure property.
// When we call `outerFunction`, it returns the `innerFunction`, which is then invoked by `result()`.
// The inner function computes the sum of `a` and `b`, resulting in 30, which is logged to the console.