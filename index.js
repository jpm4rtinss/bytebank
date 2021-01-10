//import files
import {Client} from "./Client.js"
import {CurrentAccount} from "./CurrentAccount.js"

//legenda:
// Amount withdrawn == Valor sacado

// client 1

const client1 = new Client()
client1.name = "Ricardo"
client1.cpf = 11122233309
const account1 = new CurrentAccount ()
account1.agency= 1001
account1._balance = 0
account1.client = client1



// client 2 

const client2 = new Client()
client2.name = "Alice"
client2.cpf = 11144433309
const account2 = new CurrentAccount()
account2.client = client2



console.log(account1)
console.log(account2)