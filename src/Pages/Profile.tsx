import { useContext } from "react";
import { UserContext } from "../App";


export const Profile = () => {
  const {user, setUser} = useContext(UserContext);
  const {Login, setLogin} = useContext(UserContext);
  return (
    <>{Login?<div>{user.name}</div>:<div>Log In please</div>}</>
  )
}
