export class Employee {
    constructor(name, salary, cpf){
      this._name = name
      this._salary = salary
      this._cpf = cpf

      this._bonusSalary = 1
      this._password
       
    }
    
    authenticate(password){
        return password == this._password
    }

    get password(){
        return this._password
    }
    registerPassword(password){
        this._password = password
    }


}