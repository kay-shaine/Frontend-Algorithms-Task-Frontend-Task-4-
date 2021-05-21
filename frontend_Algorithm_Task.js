// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.


const convertFahrToCelsius = (F => {
    const c = (F - 32) * 5 / 9;
    if (typeof(F) === 'number') {
        return c;
    };
    if (typeof(F) === 'string' || typeof(F) !== 'number') {
        return `${F} is not a valid number but a/an ${typeof(F)}.`
    };
    if (typeof(F) === 'object') {
        return `{"temp": 0} is not a valid number but a/an object.`
    }
    if (!Array.isArray(F)) {
        return `${[1,2,3]} is not a valid number but a/an array.`
    }
});

console.log(convertFahrToCelsius([1, 2, 3]));