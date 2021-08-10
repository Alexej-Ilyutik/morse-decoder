const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let str = expr.match(/.{1,10}/g);
  let newStr = [];
  let ten = /10/g;
  let eleven = /11/g;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i].split("00").join("");
    let newLetter = letter.split("**********").join("   ");

    newLetter = newLetter.replace(ten, ".");
    newLetter = newLetter.replace(eleven, "-");

    newStr.push(newLetter);
  }

  newStr = newStr.join(" ");
  return newStr
    .split("   ")
    .map((a) =>
      a
        .split(" ")
        .map((b) => MORSE_TABLE[b])
        .join("")
    )
    .join(" ");
}

module.exports = {
  decode,
};
