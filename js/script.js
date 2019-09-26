function palindrome(str) {

  let clearStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split('');

  if(clearStr.toString() === clearStr.reverse().toString()) {
     return true;
  }
  return false;
}

palindrome("A man, a plan, a canal. Panama");
palindrome("almostomla");