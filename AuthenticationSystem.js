export class AuthenticationSystem {
    
    
    //check if the person have the token authenticate and if this token is method 
    static isAuthenticable(authenticablePerson){
         //if is authenticable, its will return true
        return 'authenticate' in authenticablePerson && 
                authenticablePerson.authenticate instanceof Function
    }
    
    
    static login(authenticablePerson, password){
        //check if the person is authenticable using the method isAuthenticable
        if(AuthenticationSystem.isAuthenticable(authenticablePerson)){
         
            //execute the method to check if its the right password
           return authenticablePerson.authenticate(password)
        }
        
        //if not, return false
        return false
    }
     
    
}