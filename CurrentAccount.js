import { Account } from "./Account.js";
import { Client } from "./Client.js";

export  class CurrentAccount extends Account {
    
  static totalAccounts = 0;
    
    constructor(client ,agency){
     super(0, client, agency)
     CurrentAccount.totalAccounts += 1
    }

    
}