const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    return expr
    .split(/[*]{10}/)
    .map(item => item.match(/[\d]{10}/g)
      .map(item => item
        .match(/[\d]{2}/g)
        .filter(item => item !=='00')
        .map(item => item === '10' ? '.' : '-')
        .reduce(function(sum, item){
          return sum + item;
        }, '')
      )
      .map(i => i = MORSE_TABLE[i])
      .reduce(function(sum, item){
        return sum + item;
      }, '')
    )
    .reduce(function(sum, item){
        return sum + ' ' + item;
      }, '')
    .trimLeft()
}

module.exports = {
    decode
}