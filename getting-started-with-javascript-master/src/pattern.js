/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

module.exports = function drawPattern(row) {

  // Provide Solution Code Here
  if(typeof(row) != 'number'){
    return "Invalid Input Type, Row Input Should Be of Type Number !!";
  }else{
    let pattern="";
   
    for(let i=0;i<row;i++){
      for(let k=0;k<row-i-1;k++){
        pattern=pattern+" ";
      }
      for(let j=0;j<=i;j++){
        pattern=pattern+"* ";
      }
      pattern=pattern+"\n";
    }
    //console.log(pattern);
    return pattern; 
  }

}
