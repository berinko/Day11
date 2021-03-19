var myNestedArray = [["Haribo", 6], ["Frondi", 2]];

function myNestedFunction(arr) {
    
    myNestedArray.pop();
    myNestedArray.shift();
    return myNestedArray = arr;
}

console.log(myNestedFunction([["Toblerone", 5], ["Milka", 3]]));
module.exports = myNestedFunction;