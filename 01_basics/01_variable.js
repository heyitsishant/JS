const accountID = 144533
let accountEmail = "ishant388@gmail.com";
var accountPassword = "1234";
accountCity = "jaipur";
let accountState;

// accountID = 2  // not allowed
/*
 prefer not to use var
 because of issue in block scope and functional scope
*/

accountEmail = "ishant8898@gmail.com"
accountPassword = "2837";
accountCity = "bangluru";

console.log("accountID")

console.table([accountEmail, accountPassword, accountCity, accountState]);