/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

/* Write a function that returns a list containig every third item in
the original list starting with the first item.
   for example:
     an input list of [1,2,3,4,5,6,7,8]
     returns [1,4,7] */

Exam.every_third = function (input_array) {

    // Create an empty output array.
    let thirds_array = [];

    // Iterator variable starts at second item of list.
    let i = 0;

    //Iterate through list
    while (i < input_array.length) {
        thirds_array.push(input_array[i]);
        i += 3;
    }
    return thirds_array;
};

// Actual Answer:
// Exam.every_third = function (array) {
//    return array.filter((ignore, k) => k % 3 === 0);
// };


// Strings

/* Write a function that concatenates two sentences passed as inputs.
The returned string is the first word from the first sentence,
then the first word from the second sentence, alternating back forth.
If the sentences are not the same number of words, a "ValueError" is thrown.
   for example:
      the input sentences "the cow jumped over the moon" and
                           "jack and jill went up the"
      returns "the jack cow and jumped jill over went the up moon the" */

Exam.merge_sentences = function (string1, string2) {

    // Separate (" " as a pattern) each string into an array of words
    const array1 = string1.split(" ");
    const array2 = string2.split(" ");

    if (array1.length === array2.length) {
        // new array has arrays of each string index's element
        let newArray = array1.map((v, k) => [v, array2[k]]);

        // new string puts splits all arrays into one whole thing
        // then join combines all elements into string separated by " "
        let newString = newArray.flat().join(" ");
        return newString;
    }

    // ValueError if sentences aren't same length
    throw "ValueError";
};

/* Write a function that returns the number of lowercase letters in
input string.
    for example:
         the input "sPonGe bOb"
         returns 6 */

Exam.lowercase_count = function (stringIn) {
    // Split string into an array of each element
    const arrayIn = stringIn.split("");

    // Filter chooses only the letters that don't match upper case
    return arrayIn.filter((letter) => letter !== letter.toUpperCase()).length;
};


// Objects

/* Write a function that returns the longest a key in the input object
whose keys are all strings. */

Exam.longest_key = function (objectIn) {

    // create an array of the keys
    const keyArray = Object.keys(objectIn);

    // reduce has parameters (accumulator, next element)
    return keyArray.reduce((champ, comp) => (
    // the ternary conditional operators are a substitute to if else statements
        champ.length >= comp.length
        ? champ // if argument is true, champ stays as champ (accumulator)
        : comp // if argument is false, comp becomes champ
    ), "");
};

// Actual Solution:
// Exam.longest_key = function (object) {
//     return Object.keys(object).reduce((a, x) => (
//         a.length >= x.length
//         ? a
//         : x
//     ));
// };

/* Write a function that returns the largest value that is an even value in the
 input dictionary whose values are all whole numbers. */

Exam.value_greatest_even = function (objectIn) {
    // make array of all values, then filter for only even numbers
    const valueArray = Object.values(objectIn).filter((x) => x % 2 === 0);

    // since these are numbers, doing reduce() isn't necessary
    // Math.max() function can do that, spread operator ... is needed
    return Math.max(...valueArray);
};

// Arguments

/* Write a function with two input arguments "username" and "location".
The function should return text "Hello, {name}, how is {location}?".

The username argument should not be set to a default,
but the location argument should default to "London". */

Exam.greeting = function (username, location = "London") {
    // the $ can allow for placeholders in strings, but use backtick quotes ``
    return `Hello, ${username}, how is ${location}?`;
};


/* Write a function three input arguments,
the first one, x, is required and the second two are
the following keywords with default values:
    scalar with a default of 1
    offset with a default of 0
The function returns the calculation x * scalar + offset for the input x
if the output value of the calculation is positive, otherwise it returns 0. */

Exam.floor_line = function (x, s = 1, o = 0) {
    const Ans = x * s + o;

    // ternary conditioner not as neat, will give Jslint error lol
    // return Ans >= 0 ? Ans : 0;

    // maximum between 0 and Ans, so that there won't be negative numbers
    return Math.max(0, Ans);
};

export default Object.freeze(Exam);
debugger;