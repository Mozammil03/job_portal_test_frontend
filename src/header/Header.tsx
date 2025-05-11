import { Avatar, Indicator, Switch } from "@mantine/core"
import { IconBell, IconLogout, IconMoonStars, IconSettings, IconSun } from "@tabler/icons-react"
import NavLinks from "./NavLinks"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { notifications } from "@mantine/notifications"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../Slices/UserSlice"


const Header = () => {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="100vh flex justify-between items-center text-white shadow-md px-4 h-20 bg-mine-shaft-950">
      <div className="text-bright-sun-400"><Link to={"/"}>Logo</Link></div>
      
      {NavLinks()}
      
      <div className="flex items-center gap-3">
        <div className="p-1 rounded-full bg-mine-shaft-900">
          <Indicator size={8} color="brightSun.4" offset={6} processing>
            <IconBell/>
          </Indicator>
        </div>
        <div className="flex items-center">
          {user ? (
            <Link to={"/profile"}>{user.name}</Link>
          ) : (
            <Link to={"/sign-in"}>Sign In</Link>
          )}
          {location.pathname !== "/sign-up" && location.pathname !== "/sign-in" && user && <Avatar/>}
        </div>
        <IconSettings/>
        <Switch
          size="md"
          color="dark.4"
          onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
          offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
        />
        {user && (
          <div className="hover:text-red-500 transition-colors duration-200">
            <IconLogout 
              onClick={() => {
                dispatch(removeUser());
                notifications.show({
                  title: 'Logged Out',
                  message: 'You have been logged out',
                  color: 'red',
                });
                navigate("/sign-in");
              }} 
              style={{ cursor: 'pointer' }} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header