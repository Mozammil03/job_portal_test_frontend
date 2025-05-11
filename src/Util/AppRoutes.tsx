import { Navigate, Route, Routes } from "react-router-dom"
import FindJobs from "../Pages/FindJobs"
import SignUpPage from "../Pages/SignUpPage"
import { Profile } from "../Pages/Profile"
import { ForgetPassword } from "../SignUpLogIn/ForgetPassword"
import HomePage from "../Pages/HomePage"
import { useSelector } from "react-redux"


const AppRoutes = () => {
    const {user} = useSelector((state:any)=> state.user )
    
  return (
    <Routes>
        <Route path='/find-jobs' element={<FindJobs/>} />
        <Route path='/sign-up'element={user?<Navigate to={'/'}/>:<SignUpPage/>} />
        <Route path='/sign-in' element={user?<Navigate to={'/'}/>:<SignUpPage/>} />
        <Route path='/profile' element={user?<Profile/>:<Navigate to={'/sign-in'}/>} />
        <Route path='/change-password' element={<ForgetPassword/>} />
        <Route path='*' element={<HomePage />} />
      </Routes>
  )
}

export default AppRoutes