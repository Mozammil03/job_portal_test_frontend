import exp from "constants";

const signUpValidation = (name:string, value:string) => {
    console.log("frontend validation");
    switch (name) {
        case "name":
            if (value.length ===0) {
                return "Name is required";
            }  
            break;
        case "email":
            if (!value) {
                return "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                return "Email is invalid";
            }
            break;
        case "password":
            if (!value) {
                return "Password is required";
            } else if (value.length < 6) {
                return "Password must be at least 6 characters long";
            }
            break;
        default:
            return "";
        
            
    }
} 
export default signUpValidation;