import { Button, Divider, PasswordInput, TextInput } from "@mantine/core"
import { IconLock } from "@tabler/icons-react"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../services/UserService"
import { UserContext } from "../App"
import { notifications } from "@mantine/notifications"


const form = {
  email: "",
  password: "",
   
}
const SignIn = () => {
  const [formData, setFormData] = useState(form);
  const {Login, setLogin} = useContext(UserContext);
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    
    try {
      const response = await loginUser(formData);
      if (response.ok) {
        setLogin(true)

        console.log('Login successful' + response);

        const userData = await response.json();
        setUser(userData);
        navigate('/profile');
        console.log(userData);
        notifications.show({
                  title: 'Login Successful',
                  message: `Welcome ${userData.name}`,
                  color: 'green',
                });

      }
    } catch (error: any) {
      
      if (error.response) {
        switch (error.response.status) {
          case 401:
            notifications.show({
                  title: 'Invalid Credentials',
                  message: 'Please check your email and password',
                  color: 'red',
                });
            break;
          default:
            alert('Login failed. Please try again.');
        }
      } else {
        console.error(error);
        notifications.show({
                  title: 'Error Logging In',
                  message: `${error.errorMessage}`,
                  color: 'red',
                });
      }
    }
  };

  return (
    <div>
      <div className="w-1/2 mx-auto mt-20">
        <Divider my="sm" label="Sign In" labelPosition="center" />
        <TextInput
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.currentTarget.value })}
          withAsterisk
          label="Email"
          placeholder="Input placeholder"
        />
        <PasswordInput
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.currentTarget.value })}
          leftSection={<IconLock size={20}/>} 
          label="Password" 
          withAsterisk
          placeholder="" 
        />
        
        <Button onClick={handleClick} className="w-full mt-4" variant="outline" color="brightSun.4">Sign In</Button>
        <div>Don't Have an Account/ <Link to={"/sign-up"} className="text-bright-sun-400">Sign Up</Link></div>
      </div>
    </div>
  )
}

export default SignIn