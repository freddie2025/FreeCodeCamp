function rot13(str) { // LBH QVQ VG!
  
  var regEx = new RegExp(/[A-Z]/g);
  return str.replace(regEx, char => String.fromCharCode((char.charCodeAt(0)%26)+65));
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");