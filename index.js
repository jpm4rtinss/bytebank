//import files
import {Client} from "./Client.js"
import {CurrentAccount} from "./CurrentAccount.js"

//legenda:
// Amount withdrawn == Valor sacado
// Target account == conta de destino

// client 1
const account1 = new CurrentAccount ()
account1.client = new Client()
account1.client.name = "Ricardo"
account1.client.cpf = 11122233309
account1.agency= 1001
account1._balance = 0



// client 2 



const account2 = new CurrentAccount()
account2.client = new Client()
account2.client.name = "Alice"
account2.client.cpf = 11144433309
account2.agency= 1001

account1.deposit(400)
account1.transfer(200, account2)

console.log(account1)
console.log(account2)