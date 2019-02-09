function telephoneCheck(str) {
  var regX = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regX.test(str);
}

telephoneCheck("555-555-5555");