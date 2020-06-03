const add = (arg1, arg2) => {
    if(typeof arg1 != "number") throw new Error ("first argument must be a number");
    if(typeof arg2 != "number") throw new Error ("second argument must be a number");
    return arg1 + arg2;
}

const minus = (arg1, arg2) => {
    if(typeof arg1 != "number") throw new Error ("first argument must be a number");
    if(typeof arg2 != "number") throw new Error ("second argument must be a number");
    return arg1 - arg2;
};

//set up as export to use jest
//can be used in another file
module.exports = { add, minus };