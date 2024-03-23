const palindrome = (string) => {
  const str = string.toString();
  const newStr = str.split('').reverse();

  if (newStr.join('') === str) {
    return true;
  }
  return false;
};
console.log(palindrome('alia'));
console.log(palindrome('madam'));
