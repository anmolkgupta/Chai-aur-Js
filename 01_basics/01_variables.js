const accountId = 144553
let accountEmail = "anmol@google.com"
var acountPassword = "12345"
accountCity = "Asansol"
let accountState;

// accountId = 2  not allowed
console.log(accountId);

accountEmail = "akg@akg.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])