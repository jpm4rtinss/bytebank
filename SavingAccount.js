import { Account } from "./Account.js";

export class SavingAccount extends Account  {
 
  constructor(openBalance, client ,agency){
    super(openBalance, client, agency)
   }
}