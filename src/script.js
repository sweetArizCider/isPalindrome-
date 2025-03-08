const userInput = document.getElementById("text-input");
const inputButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
const word = [];
const letters = [];
const regex = /[\W_]/g

const palindrome = (word) =>{
  const wordLowReg = word.toLowerCase().replace(regex, '');
  const reversedWord = wordLowReg.split('').reverse().join('');
  return wordLowReg === reversedWord
}

const handleClick = () =>{

  if(!userInput.value){
    window.alert("Please input a value");
    return
  }

  const isPalindrome = palindrome(userInput.value);
  if(!isPalindrome){
    resultText.innerHTML = `<span class="bold">${userInput.value}</span> is not a palindrome`;
    userInput.value = "";
    return
  }

  resultText.innerHTML = `<span class="bold">${userInput.value}</span> is a palindrome`;
  userInput.value = "";
}

inputButton.addEventListener("click", handleClick);

