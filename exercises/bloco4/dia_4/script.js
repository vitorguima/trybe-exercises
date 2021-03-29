// exercícios parte 2 - Funções

function checkPalindrome(wordChecked) {
  let palindromWord = false;

  if (wordChecked[0] === wordChecked[wordChecked.length - 1] && wordChecked[1] === wordChecked[wordChecked.length - 2] && wordChecked.length % 2 != 0) {
    palindromWord = true;
  } else {
    palindromWord = false;
  }

  return palindromWord;
}

console.log(checkPalindrome('ele'))

