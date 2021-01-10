export  class CurrentAccount {
    agency;
    client;
    _balance;
    
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

    transfer()
}