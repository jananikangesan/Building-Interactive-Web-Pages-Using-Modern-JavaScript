/*

The checkPhoneNumber() function should accept phoneNumber as input and check if it is valid.

The provided phoneNumber is a valid phoneNumber if its value matches with any of the pattern suggested below:


  +1 0999999999, 
  +1 099-999-9999, 
  +1 (099)-999-9999, 
  +1 (099)9999999, 
  +1 099 999 9999, 
  +1 099 999-9999, 
  +1 (099) 999-9999, 
  +1 099.999.9999
  +10999999999, 
  +1099-999-9999, 
  +1(099)-999-9999, 
  +1(099)9999999, 
  +1099 999 9999, 
  +1099 999-9999, 
  +1(099) 999-9999, 
  +1099.999.9999
  
  The function should return true if validation criteria is satisfied else should return false.
  
  Use Regular Expression to perform validation check.

*/

module.exports = function checkPhoneNumber(phoneNumber) {

  // Provide Solution Code Here
  let phoneNumber_length=phoneNumber.length;

  let number=(phoneNumber.match(/[0-9]/g) || []).length; 
  let symbol=(phoneNumber.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
  
  if(number==11){
    return true;
  }
  return false;

}