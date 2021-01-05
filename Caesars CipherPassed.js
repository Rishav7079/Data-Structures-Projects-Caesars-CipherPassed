function rot13(str) {
  var myArr = []
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      let temp = parseInt(str[i], 36) + 4
      //  console.log(temp);
      if (temp > 26) {
        myArr.push(String.fromCharCode((temp % 26) + 64))
      }
      else {
        myArr.push(String.fromCharCode(temp + 64))
      }
    }
    else {
      myArr.push(str[i])
    }

  }

  return myArr.join("");
}

 
console.log(rot13("SERR YBIR?"));
console.log(rot13("SERR CVMMN!"));
