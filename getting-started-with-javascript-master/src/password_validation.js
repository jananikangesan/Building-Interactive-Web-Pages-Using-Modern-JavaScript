/*

The checkPassword() function should accept password as input and check if it is valid.

The validation criteria for password are:
- should have minimum 6 characters and maximum 20 characters
- should have at least one lower-case and one upper-case alphabet
- should have at least one digit
- should have at least one symbol

The function should return true if validation criteria is satisfied else should return false.

Use Regular Expression to perform validation check.

*/

module.exports = function checkPassword(password) {

  // Provide Solution Code Here
  let password_length=password.length;
  let upperCase=0;
  let lowerCase=0;
  let digit=0;
  let symbol=0;

  for(let i=0;i<password_length;i++){
    if(password[i] >= "A" &&  password[i]<="Z"){
      upperCase++;
    }else if(password[i] >= "a" &&  password[i]<="z"){
      lowerCase++;
    }else if(password[i] >= "0" &&  password[i]<="9"){
      digit++;
    }else{
      symbol++;
    }
  }
  if((password_length>=6 && password_length<=20) && upperCase>=1 && lowerCase>=1 && digit>=1 && symbol>=1){
    return true;
  }
  return false;

}
