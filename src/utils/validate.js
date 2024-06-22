
 export const checkValidData = (email,password,name) => {
    //We are using regular expression to check the email and password
    //const isnameValid=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
    const isEmailValid=/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    //If email or password is not valid we are returning the error message else we are returning null
    //if(!isnameValid){
       // return 'Invalid Name';
    //}
    if(!isEmailValid){
        return 'Invalid Email';
    }
    if(!isPasswordValid){
        return 'Invalid Password';
    }
    return null;
    
}
