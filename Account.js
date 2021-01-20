export class Account {
    constructor(openBalance, client, agency){
        this._balance = openBalance
        this._client = client
        this._agency = agency

    }

    set client(newValue){
        if(newValue instanceof Client){
           this._client = newValue 
        }
      }
  
      get client (){
        return this._client
      }
  
      
  
      get balance(){
        return this._balance
      }


      //sacar
    withdraw(value){
         
         let rate = 1
         return this._withdraw(value, rate)
    }
    _withdraw(value, rate){

      const amountWithdrawn = amountWithdrawn*rate 

     //check if are enough money to withdraw
     if (this._balance >= amountWithdrawn){
     
         //subtract the value
         this._balance -= amountWithdrawn
        
         return amountWithdrawn
     }
     
     //if not have enough money, return 0
     return 0;
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