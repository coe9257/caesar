
const alphabetUpperCase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
const alphabetLCopy = alphabetUpperCase.slice();
const alphabetLowerCase = alphabetLCopy.map(capitalize => capitalize.toLocaleLowerCase());

const alphabetLReverse = alphabetLowerCase.slice();

const alphabetLowerCaseThree = alphabetLowerCase.concat(alphabetLowerCase, alphabetLowerCase, alphabetLowerCase, alphabetLowerCase);
const alphabetUpperCaseThree = alphabetLowerCaseThree.map(upper => upper.toUpperCase());

const shiftedArray = [];

caesar = function (string, shift) {

    //To find the starting position of the middle alphabet a-z / A-Z
    for (i = 0; i < alphabetLowerCaseThree.length; i++) {
        let position = alphabetLowerCaseThree.indexOf(alphabetLowerCaseThree[i]);
        if (alphabetLowerCaseThree[i] === 'z') {
        } else if (alphabetLowerCaseThree[i] === 'a') {
        }
    }

    //starting position of 2nd `a` / 'A' and 2nd `z` / 'Z' from code above
    positionRange = [26, 51]

    //inputting string into array - stringArray
    let stringArray = [];

    for (i = 0; i < string.length; i++) {
        stringArray.push(string[i]);
    }

    //A loop to loop through StringArray
    for (i = 0; i < stringArray.length; i++) {
        //A condition to see if the string character matches alphabet, if so the shift is implemented
        if (stringArray[i] === '!') {
            shiftedArray.push(stringArray[i]);
        } else if (stringArray[i] === ',') {
            shiftedArray.push(stringArray[i]);
        } else if (stringArray[i] === ' ') {
            shiftedArray.push(stringArray[i]);
        } else if (alphabetLowerCaseThree.includes(stringArray[i])) {
            let position = alphabetLowerCaseThree.indexOf(stringArray[i], 26);
            position = position += shift;
            shiftedArray.push(alphabetLowerCaseThree[position]);
        } else if (alphabetUpperCaseThree.includes(stringArray[i])) {
            let position = alphabetUpperCaseThree.indexOf(stringArray[i], 26);
            position = position += shift;
            shiftedArray.push(alphabetUpperCaseThree[position]);
        }

    }
    let finalArray = shiftedArray.join('');
    return finalArray;
}

// module.exports = caesar
