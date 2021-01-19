import { Client } from "./Client.js";

export  class CurrentAccount {
    
  static totalAccounts = 0;

    
    
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
    
    constructor(client ,agency){
     this.client = client
     this.agency = agency
     this._balance = 0;
   
     CurrentAccount.totalAccounts += 1
    }

    
}