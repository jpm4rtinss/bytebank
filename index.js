//import files
import {Client} from "./Client.js"
import {CurrentAccount} from "./accounts/CurrentAccount.js"
import { SavingAccount } from "./accounts/SavingAccount.js"
import { SalaryAccount } from "./accounts/SalaryAccount.js"

//legenda:
// Amount withdrawn == Valor sacado
// Target account == conta de destino

// client 1
const client1 = new Client("Ricardo", 11122233309)
const account1 = new CurrentAccount (0, client1, 1001)



// client 2 
const client2 = new Client("Alice", 11144433309 )
const account2 = new CurrentAccount(0, client2, 1001)
const savingAccount1 = new SavingAccount(50, client2, 1001)
const salaryAccount1 = new SalaryAccount(client2)
salaryAccount1.deposit(500)
salaryAccount1.withdraw(50)

//console.log(savingAccount1)
//console.log(account2)
console.log(salaryAccount1)
