function palindrome(str) {
  var oldstr=str.replace(/[^A-Za-z0-9]/g, '');
  var revstr=str.replace(/[^A-Za-z0-9]/g, '');
  
  
  
  
  oldstr=oldstr.split("");
  revstr=revstr.split("");

  
  revstr=revstr.reverse();
  
  oldstr=oldstr.join("").toLowerCase();
  revstr=revstr.join("").toLowerCase();


  if (oldstr===revstr){
    return true
  }else{
    return false
  }
}
