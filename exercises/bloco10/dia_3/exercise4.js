function toUpper(string) {
  return string.toUpperCase();
}

function firstChar(string) {
  return string[0];
}

function concatString(string1, string2) {
  return `${string1}${string2}`;
}

const objectOfFunctions = { toUpper, firstChar, concatString };

module.exports = objectOfFunctions;
