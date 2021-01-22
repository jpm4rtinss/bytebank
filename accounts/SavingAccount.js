import { Account } from "./Account.js";

export class SavingAccount extends Account  {
 
  constructor(openBalance, client ,agency){
    super(openBalance, client, agency)
   }

    //overwriting the withdraw method
    withdraw(value){
         
      let rate = 1.02
      return this._withdraw(value, rate)
    }
}