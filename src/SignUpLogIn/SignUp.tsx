import { Button, Divider,PasswordInput, Radio, TextInput } from "@mantine/core"
import { IconLock } from "@tabler/icons-react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../services/UserService";
import signUpValidation from "../services/FormValdiation";
import { notifications } from "@mantine/notifications";


enum AccountType {
  APPLICANT = 'APPLICANT',
  EMPLOYER = 'EMPLOYER'
}

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: AccountType.APPLICANT, 
}

export const SignUp = () => {
  const [formData, setFormData] = useState(form);
  const [formErrors, setFormErrors] = useState(form);
 
  
  
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
    setFormErrors({...formErrors, [name]: signUpValidation(name, value)});
    if(name === "confirmPassword") {
      setFormErrors({...formErrors, [name]: formData.password !== value ? "Passwords do not match" : ""});
    }
  }
  
 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (formData.name && formData.email && formData.password && formData.confirmPassword) {
      try {
        setLoading(true);
        const response = await registerUser(formData);
        if(!response.name){
           throw new Error(response.errorMessage);
        }
       notifications.show({
          title: 'USER REGISTERED',
          message: `${response.name} is registered successfully`,
          color: 'green',
          loading: true,
        });
        setFormData({name: "", email: "", password: "", confirmPassword: "", accountType: AccountType.APPLICANT})
        
        setTimeout(()=>{
          navigate("/profile");
          setLoading(false);
        },3000)
      } catch (error) {
        console.error(error);
        notifications.show({
          title: 'Error',
          message: `${error}`,
          color: 'red',
        });

      }
    } else {
      notifications.show({
        title: 'Empty Fields',
        message: 'Please fill all the fields',
        color: 'red',
      });
      setFormErrors({
        ...formErrors,
        name: formData.name ? "" : "Name is required",
        email: formData.email ? "" : "Email is required",
        password: formData.password ? "" : "Password is required",
        confirmPassword: formData.confirmPassword ? "" : "Confirm Password is required",
      });
    }
  };

  return (
    <div>

    
      <div className="w-1/2 mx-auto mt-20">
        <Divider my="sm" label="Sign Up" labelPosition="center" />
        <div>
          <TextInput
            name="name"
            value={formData.name}
            error={formErrors.name}
            onChange={handleChange}
            withAsterisk
            label="Full Name"
            placeholder="Enter your full name"
          />
          <TextInput
            name="email"
            error={formErrors.email}
            value={formData.email}
            onChange={handleChange}
            withAsterisk
            label="Email"
            placeholder="Enter your email"
          />
          <PasswordInput 
            name="password"
            error={formErrors.password}
            onChange={handleChange}
            value={formData.password}
            leftSection={<IconLock size={20}/>} 
            label="Password" 
            withAsterisk
            placeholder="Enter your password" 
          />
          <PasswordInput 
            name="confirmPassword"
            error={formErrors.confirmPassword}
            value={formData.confirmPassword}
            onChange={handleChange}
            leftSection={<IconLock size={20}/>} 
            label="Confirm Password" 
            withAsterisk
            placeholder="Confirm your password" 
          />
          <Radio.Group 
            value={formData.accountType}
            onChange={(value) => {
              setFormData({ ...formData, accountType: value as AccountType });
            }}
            name="accountType"
            label="Select your Account Type"
            withAsterisk
          >
            <Radio value={AccountType.APPLICANT} label="Applicant" />
            <Radio value={AccountType.EMPLOYER} label="Employer" />
          </Radio.Group>
          <Button 
            onClick={handleSubmit}
            className="w-full mt-4" 
            variant="outline" 
            color="brightSun.4"
          >
            Sign Up
          </Button>
        </div>
        <div>Have an Account/ <Link to={"/sign-in"} className="text-bright-sun-400">Sign In</Link></div>
      </div>
    </div>
  )
}
