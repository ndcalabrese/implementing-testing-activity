module.exports = doAThing;
module.exports = reverseNumber;

function doAThing (input, callback) {
        callback(input);
        return true;
}


console.log("\n#1 - - - - - - - -\n");

// ########################################################################
// #######                                                          #######
// #######   1. Write a function that reverses a number             #######
// #######                                                          #######
// ########################################################################

function reverseNumber (numberInput) {
    
    // Converts argument to a string
    let numberString = numberInput.toString();

    // Split method divides the string into each of its characters
    // and puts them into an array
    let stringArray = numberString.split("");

    // Reverse method reverse the order of the array elements and 
    // the join method joins them together a string, with no separator
    let reversedString = stringArray.reverse().join("");
    
    // Logs the string. 
    // 
    // I checked with Matt, and he said it was not necessary to convert
    // the string to a number primitive, because the example output on 
    // the LMS shows a leading "0" included
    return reversedString;;

}

// 1. Testing

reverseNumber(349210); // Output: 012943

reverseNumber(85109403481341); // Output: 14318430490158

// ########################################################################
// #######                                                          #######
// #######   2. Write a function that returns a passed string       #######
// #######   with letters in alphabetical order.                    #######
// #######                                                          #######
// ########################################################################

console.log("\n#2 - - - - - - - -\n");

function sortString (stringInput) {
    
    // Converts all string characters to lowercase and divides
    // string into an array of each of its characters
    stringArray = stringInput.toLowerCase().split("");

    // Sorts stringArray's elements in alphabetical order and
    // joins them together as a string with no separator.
    return stringArray.sort().join("");

}

// 2. Testing

sortString("webmaster"); // Output: abeemrstw

sortString("pneumonoultramicroscopicsilicovolcanoconiosis");
// Output: aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv

// ########################################################################
// #######                                                          #######
// #######   3. Write a function that accepts a string as a         #######
// #######   parameter and converts the first letter of each word   #######
// #######   of the string to uppercase                             #######
// #######                                                          #######
// ########################################################################

console.log("\n#3 - - - - - - - -\n");

// I found out .charAt() was a thing, but I decided against it.

function upperString (stringInput) {
    
    // Split method divides the string into each of its
    // constituent words and puts them into an array
    stringArray = stringInput.split(" ");
    
    // Create an empty array to store our capitalized words
    capitalArray = [];

    // Use for loop to traverse each word in the array
    for (let i = 0; i < stringArray.length; i++) {
        
        // Create an empty array to store each character of a word
        let wordArray = [];

        // Use for loop to traverse each character of a word in the array.
        // If it's the first letter in the word, make it uppercase.
        // If it's not the first letter, make it lowercase.
        for(let j = 0; j < stringArray[i].length; j++) {
            if (j === 0) {
                wordArray.push(stringArray[i][j].toUpperCase());
            } else {
                wordArray.push(stringArray[i][j].toLowerCase());
            }
        }
        
        // The join method combines each letter back into a word
        // and then we use the push method to add the word to the
        // array containing our capitalized words
        capitalArray.push(wordArray.join(""));

    }

    // After each word in the array has had its case checked and/or
    // converted, and it has been pushed to our array of capitalized
    // words, we join each word in the new array with a space and 
    // output it as a string
    console.log(capitalArray.join(" "));

}

// 3. Testing

upperString("the quick brown fox"); // Output: The Quick Brown Fox

upperString("tHe qUiCK bROwN FOx JUMPS over thE LAZy DoG");
// Output: The Quick Brown Fox Jumps Over The Lazy Dog

// ########################################################################
// #######                                                          #######
// #######   4. Write a JavaScript function that accepts a number   #######
// #######   as a parameter and check the number is prime or not.   #######
// #######                                                          #######
// ########################################################################

console.log("\n#4 - - - - - - - -\n");

function isPrime (numberInput) {

    // Create a variable that will act as our divisor, starting with 2,
    // because all numbers, prime or not, are divisible by 1.
    let divisor = 2;

    // Use a while loop to continually divide numberInput by the divisor
    // using the modulo operator to return the remainder. 
    //
    // If the  modulo operation returns a value of zero, this means 
    // numberInput is divisible by a number that is not 1, and is 
    // therefore not prime. 
    //
    // If the modulo operation returns a remainder that is not zero,
    // we increment the divisor.
    //
    // The while loop recurs while the divisor is less than half of 
    // numberInput, because if numberInput is divisible by half of
    // itself, then it was divisible by 2 anyway.
    while (divisor < numberInput / 2) {
        if (numberInput % divisor === 0) {
            return console.log(`${numberInput} is not a prime number, because ${divisor} is a factor.`);
        } else {
            divisor++;
        }
    }

    // If the remainder is never equal to zero, then numberInput is a
    // prime number.
    console.log(`${numberInput} is a prime number, because its only factors are 1 and ${numberInput}.`)

}

// 4. Testing

isPrime(5812895); 
// Output: 5812895 is not a prime number, because 5 is a factor.

isPrime(15485863); 
// Output: 15485863 is a prime number, because its only factors are 1 
// and 15485863.

// ########################################################################
// #######                                                          #######
// #######   5. Write a function to extract unique characters       #######
// #######   from a string.                                         #######
// #######                                                          #######
// ########################################################################

console.log("\n#5 - - - - - - - -\n");

function getUniqueChars (stringInput) {

    // Set objects are collections of values, in which a value may only 
    // occur a single time.
    let uniqueCharSet = new Set();

    // Traverse stringInput and add each character to the Set.
    // Duplicate values are ignored by the Set.
    for (let i = 0; i < stringInput.length; i++) {
        uniqueCharSet.add(stringInput[i]);
    }

    // Create an array from the Set object
    let uniqueCharArray = Array.from(uniqueCharSet);

    // Join the array elements into a string with no separator
    console.log(uniqueCharArray.join(""));

}

// 5. Testing

getUniqueChars("thequickbrownfoxjumpsoverthelazydog"); 
// Output: thequickbrownfxjmpsvlazydg

getUniqueChars("aaaaabbbcccdddeeefffgghiiijjjklllmmmnnnoo");
// Output: abcdefghijklmno

// ########################################################################
// ######################                         #########################
// ######################   ADVANCED CHALLENGES   #########################
// ######################                         #########################
// ########################################################################

// ########################################################################
// #######                                                          #######
// #######   1. Write a function that will take an array of         #######
// #######   numbers stored and find the second lowest and second   #######
// #######   greatest numbers, respectively.                        #######
// #######                                                          #######
// ########################################################################

console.log("\nBonus #1 - - - - -\n");

function getSecondSmallestAndLargestNumber (arrayInput) {

    // Create empty array to store second smallest/largest numbers
    let secondSmallAndLargeNumberArray = [];

    // Sort method arranges the input array in ascending numeric order.
    //
    // By default, the sort method casts the elements as strings.
    // The compare callback function is used as a parameter to evaluate 
    // the difference of two elements at a time, to determine which 
    // order they should be listed in.
    //
    // Sort makes changes to the original array.
    arrayInput.sort((value1, value2) => value1 - value2);

    // Set objects are collections of values, in which a value may only 
    // occur a single time.
    let sortedNumberSet = new Set();

    // Traverse the sorted array and add each character to the Set.
    // Duplicate values are ignored by the Set.
    for (i = 0; i < arrayInput.length; i++) {
        sortedNumberSet.add(arrayInput[i]);
    }

    // Create an array from the Set object. Each element is unique
    // and is sorted in ascending order.
    let uniqueSortedNumberArray = Array.from(sortedNumberSet);

    // Use push method to add the second element and second-to-last
    // element of the uniqueSortedNumberArray to the 
    // secondSmallAndLargeNumberArrray
    secondSmallAndLargeNumberArray.push(uniqueSortedNumberArray[1]);
    secondSmallAndLargeNumberArray.push(
        uniqueSortedNumberArray[uniqueSortedNumberArray.length - 2]
    );

    // Joins the elements of secondSmallAndLargeNumberArray as a
    // string with no separator
    console.log(secondSmallAndLargeNumberArray.join(", "));

}

// 1. Testing

let bonus1TestArray1 = [1,2,3,4,5];
getSecondSmallestAndLargestNumber(bonus1TestArray1); // Output: 2, 4

let bonus1TestArray2 = [-1000, 2000, 2000, 2002, 1995, 4, 15, 9999, 
1292491, 20140482, 3401240129, 55215, 0.1, -392929, 21029412048]; 
getSecondSmallestAndLargestNumber(bonus1TestArray2); 
// Output: -1000, 3401240129

// ########################################################################
// #######                                                          #######
// #######   2. Write a function to apply the Bubble Sort           #######
// #######   algorithm to a given array.                            #######
// #######                                                          #######
// ########################################################################

console.log("\nBonus #2 - - - - -\n");

function bubbleSort (arrayInput) {
    // Traverse arrayInput
    for (let i = 0; i < arrayInput.length; i++) {

        // Each time arrayInput is traversed, check the number of 
        // elements equal to the length of arrayInput minus i, and 
        // compare it to the element following it.
        //
        // After each element in arrayInput has been compared, i
        // is incremented. This prevents the entirety of arrayInput
        // from being traversed to compare values every iteration.
        //
        // If the first element is less than the second element 
        // being compared, then swap the two elements in the array.
        // Otherwise, do nothing. This moves the smallest number to
        // the end of arrayInput each time.
        for (let j = 0; j < arrayInput.length - i; j++) {
            if (arrayInput[j] < arrayInput[j + 1]) {
                let tempValue = arrayInput[j + 1];
                arrayInput[j + 1] = arrayInput[j];
                arrayInput[j] = tempValue;
            }
        }
    }
    console.log(arrayInput);
}


// 2. Testing

let bonus2TestArray1 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 
3223, 455, 23, 234, 213];
bubbleSort(bonus2TestArray1);
// Output: [3223, 546, 455, 345, 234, 213, 122,  98,  84,  64, 
// 23,  12,   9,   4,   1]

let bonus2TestArray2 = [0.1, 10, 202, 4014, 35, 1024, 20.12, 29102,
1.11111, 2048102];
bubbleSort(bonus2TestArray2);
// Output: [2048102, 29102, 4014, 1024, 202, 35, 20.12, 10, 
// 1.11111,0.1]