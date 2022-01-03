let target = document.getElementById("root");
target.innerHTML += "<h5>Cher Thomas;</br></br> Veuillez trouver les résultats relatifs aux exercices demandés dans la console du navigateur, modifiable pour exécuter les tests via : index.js.</br> L'ensemble de ces exercices a été réalisé en 1h.</br></br> Cordialement</br>Thibault<h5>";

// Niveau 0 exercice 1
const getArmStrongNumber = (value) => {
    let array = Array.from(value.toString());
    let arrayPower = array.map(function(num) { return Math.pow(num,array.length) });
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    if (value === arrayPower.reduce(reducer)) {
        return `${value} is an Armstrong number`
    } else return `${value} is NOT an Armstrong number`;
}
console.log(getArmStrongNumber(10))

// Niveau 0 exercice 2
const getDifferenceOfSquares = (value) => {
    let arrayOfSum = [];
    let arrayOfSquares = [];
    for (var i = 0; i < value+1; i++) {
        arrayOfSum.push(i);
        arrayOfSquares.push(Math.pow(i,2));
    }
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    let result = Math.pow(arrayOfSum.reduce(reducer),2) - arrayOfSquares.reduce(reducer);
    return `The difference of squares of ${value} is : ${result}`;
}
console.log(getDifferenceOfSquares(10))

// Niveau 1 exercice 1
function caesarCipher(text, num) {
    let newText = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    for (let i = 0; i < text.length; i++) {
      if ( text[i] === ".") {
        newText += ".";
      }
      let currentIndex = alphabet.indexOf(text[i]);
      if (!(currentIndex + 1)) {
        newText += " ";
      } else {
        let newIndex = currentIndex + num;
        newText += alphabet[newIndex];
      }
    }
    return `The caesarCipher ROT${num} of "${text}" is : ${newText}`
  }
console.log(caesarCipher('Abc d.', 2))

// Niveau 1 exercice 2
const encode = (text) => {
    let regex = /(.)\1*/g;
    let result = '';
    let match = regex.exec(text);
    do {
        match[0].length > 1 ? result += match[0].length + match[1] : result += match[1];
        match = regex.exec(text);
    } while (match);
    return `The encode of "${text}" is : ${result}`;
};
console.log(encode("aaabbbAAWWWW"));

const decode = (text) => {
    let regex = /((\d+)?(\D))/g;
    let result = '';
    let match = regex.exec(text);
    do {
        result += match[3].repeat(+match[2]) || match[3];
        match = regex.exec(text);
    } while (match);
    return `The decode of "${text}" is : ${result}`;
};
console.log(decode("2a3b2A2A3v"));

// Niveau 1 exercice 2 => Hors délais 
