import { useLocation } from "react-router-dom"
import SignIn from "../SignUpLogIn/SignIn"
import { SignUp } from "../SignUpLogIn/SignUp"


const SignUpPage = () => {
    const location = useLocation();
  return (
    <div className="p-6">
      {location.pathname === "/sign-up" ? <SignUp/>:<SignIn/>}
        
        
    </div>
  )
}

export default SignUpPage