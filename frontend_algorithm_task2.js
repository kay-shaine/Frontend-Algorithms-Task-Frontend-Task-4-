const checkYuGiOh = (num => {
    const array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i);
    };


    const myArray = array.map(function(num) {
        if (typeof(num) === 'string' || typeof(num) !== 'number') {
            return `${num} is not a valid number but a/an ${typeof(num)}.`
        }
        if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
            return "yu-gi-oh";
        } else if (num % 2 === 0 && num % 3 === 0) {
            return "yu-gi";
        } else if (num % 2 === 0 && num % 5 === 0) {
            return "yu-oh";
        } else if (num % 3 === 0 && num % 5 === 0) {
            return "gi-oh";
        } else if (num % 2 === 0) {
            return "yu";
        } else if (num % 3 === 0) {
            return "gi";
        } else if (num % 5 === 0) {
            return "oh";
        } else if (typeof(num) === 'string' || typeof(num) !== 'number') {
            return `${num} is not a valid number but a/an ${typeof(num)}.`
        } else {
            return num;
        };
    });

    console.log(myArray);
});
console.log(checkYuGiOh(30));