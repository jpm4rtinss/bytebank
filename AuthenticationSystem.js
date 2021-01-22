export class AuthenticationSystem {
    static login(employee, password){
       //make a compare to check if its the right password
        return employee.password == password 
    }
}