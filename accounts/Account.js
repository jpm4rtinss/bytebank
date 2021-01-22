//abstract class
export class Account {
    constructor(openBalance, client, agency){
        //prevent a dev that he must not start a new account using the Account class instead a specific class
        if(this.constructor == Account){
          throw new Error('WARNNING - you should not start a new account from the Account class, use specific classes')
        }
      
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
      // as every account has a rate and the withdraw method is specific, if it's not defined in the creation of the class, when have a new object, prevent with error that call the method    
         throw Error('the withdraw method of Account Class is abstract ')
    }
    _withdraw(value, rate){

      const amountWithdrawn = value*rate 

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