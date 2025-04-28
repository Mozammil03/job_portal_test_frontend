
import './App.css';
import '@mantine/notifications/styles.css';
import { createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css'
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './header/Header';
import Footer from './footer/Footer';
import SignUpPage from './Pages/SignUpPage';
import { Profile } from './Pages/Profile';
import { createContext, useState } from 'react';
import { Notifications } from '@mantine/notifications';

export const UserContext = createContext({} as any);

const userData =  {  
        name: "",
        email: "",
        password: "",
        accountType: ""
  }
function App() {
  const theme = createTheme({
    colors:{
      'brightSun': [
  '#fffbeb',
  '#fff3c6',
  '#ffe588',
  '#ffd149',
  '#ffbd20',
  '#f99b07',
  '#dd7302',
  '#b75006',
  '#943c0c',
  '#7a330d',
  '#461902'
],
      'mineShaft': [
  "#f6f6f6",
  "#e7e7e7",
  "#d1d1d1",
  "#b0b0b0",
  "#888888",
  "#6d6d6d",
  "#5d5d5d",
  "#4f4f4f",
  "#454545",
  "#3d3d3d",
  "#2d2d2d"
],

    }
  })
  const [user, setUser] = useState(userData);
  const [Login, setLogin] = useState(false);
  


  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <Notifications position="top-right" zIndex={1000} style={{width:"auto"}}/>
      <UserContext.Provider value={{user, setUser, Login, setLogin}}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/find-jobs' element={<FindJobs/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
        <Route path='/sign-in' element={<SignUpPage/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<HomePage />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </UserContext.Provider>
    </MantineProvider>
  );
}

export default App;
