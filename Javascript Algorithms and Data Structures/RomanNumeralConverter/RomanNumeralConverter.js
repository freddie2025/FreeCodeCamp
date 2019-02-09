function convertToRoman(num) {
  var ans = '';
  var decimals = [1000,900,500,400,100,90,50,40,10,9,5,4,1] 
  var romanNumerals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'] 
  for(let i = 0; decimals.length; i++) {
      while(decimals[i] <= num) {
          ans += romanNumerals[i];
          num -= decimals[i];
      }
  }
  return ans;
}

convertToRoman(36);