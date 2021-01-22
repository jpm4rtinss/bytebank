//import files
import {Client} from "./Client.js"
import{Manager} from "./employees/Manager.js"
import{Director} from "./employees/Director.js"
import { AuthenticationSystem } from "./AuthenticationSystem.js"

//legenda:
// Amount withdrawn == Valor sacado
// Target account == conta de destino

//director 1
const director1 = new Director('Rodrigo', 10000, 99665547822)
director1.registerPassword("123456")

//Manager 1
const manager1 = new Manager('Ricardo', 5000, 19765547777)
manager1.registerPassword("12345678")


const loginStatus = AuthenticationSystem.login(manager1, '12345678')

console.log(loginStatus)