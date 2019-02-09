function palindrome(str) {
  
  var strClean = str.toLowerCase().replace(/[^0-9a-z]/gi,'');
  var strLength = strClean.length;
  var midPoint = Math.round(strLength / 2);
  var midPointOddOrEven = strLength % 2
  var firstStr = strClean.substring(0, midPoint).split("");
  var secondStr = strClean.substring(midPoint - midPointOddOrEven).split("").reverse();

  if(firstStr.toString() == secondStr.toString())
    return true;
  else
    return false;
}

palindrome("0_0 (: /-\ :) 0-0");