import { Account } from "./Account.js";


export  class CurrentAccount extends Account {
    
  static totalAccounts = 0;
    
    constructor(client ,agency){
     super(0, client, agency)
     CurrentAccount.totalAccounts += 1
    }

    //overwriting the withdraw method
    withdraw(value){
         
      let rate = 1.1
      return this._withdraw(value, rate)
    }
     

    
}