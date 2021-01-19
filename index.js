//import files
import {Client} from "./Client.js"
import {CurrentAccount} from "./CurrentAccount.js"
import { SavingAccount } from "./SavingAccount.js"
import { Account } from "./Account.js"

//legenda:
// Amount withdrawn == Valor sacado
// Target account == conta de destino

// client 1
const client1 = new Client("Ricardo", 11122233309)
const account1 = new Account (0, client1, 1001)



// client 2 
const client2 = new Client("Alice", 11144433309 )
const account2 = new Account(0, client2, 1001)


const savingAccount1 = new Account(50, client2, 1001)

console.log(savingAccount1)
console.log(account2)
