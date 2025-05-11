
import './App.css';
import '@mantine/notifications/styles.css';
import { createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css'
import { BrowserRouter } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

import { Notifications } from '@mantine/notifications';

import { Provider } from 'react-redux';
import Store from './Store';
import AppRoutes from './Util/AppRoutes';


// const userData =  {  
//         name: "",
//         email: "",
//         password: "",
//         accountType: ""
//   }
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
  // const [user, setUser] = useState(userData);
  // const [Login, setLogin] = useState(false);
  


  return (
    <Provider store={Store}>
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <Notifications position="top-right" zIndex={1000} style={{width:"auto"}}/>
      {/* <UserContext.Provider value={{user, setUser, Login, setLogin}}> */}

      <BrowserRouter>
      <Header/>
      <AppRoutes/>
      <Footer/>
      </BrowserRouter>
      {/* </UserContext.Provider> */}
    </MantineProvider>
    </Provider>
  );
}

export default App;
