import { Client } from "./Client.js";

export  class CurrentAccount {
    agency;
    _client;

    set client(newValue){
      if(newValue instanceof Client){
         this._client = newValue 
      }
    }

    get client (){
      return this._client
    }

    _balance = 0;

    get balance(){
      return this._balance
    }
    
    //sacar
    withdraw(value){
        //check if are enough money to withdraw
        if (this._balance >= value){
        
            //subtract the value
            this._balance -= value
           
            return value
        }
    }

    deposit(value){
      if (value > 0){
        this._balance += value
      }
    }
    

    transfer(value, targetAccount){
      //subtract the value
      const amount2transfer = this.withdraw(value)
      
      //deposit in the target account
      targetAccount.deposit(value)
    }
    
}