import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import { useMainContext } from './contexts/MainContext';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// notes 
// 1- substring in sidebar
// 2- provider and consumer functions
// 3- position relative for navbar and div wrapping the whole app
// 4- imports in data.js
// 5- next? routes for login and sign up
function App() {
  const {activeMenu,login,signUp}=useMainContext()
  
  return (
    <BrowserRouter>
        {
          (!login && !signUp)?(<div className="App ">
            <div className='flex relative'>
            {
              activeMenu? (
                <div className='w-72 h-screen overflow-auto bg-main-bg p-4 md:p-6 fixed sidebar '>
                  <SideBar/>
                </div>
              ) : 
              (
                <div className='w-0 overflow-auto'>
                  <SideBar/>
                </div>
              )
            }
      
            {/* div that contains everything other than sideBar */}
            {/* main container */}
            <div className={`flex min-h-screen w-full   ${activeMenu?'':'flex-1'}`}>
              
              {/* nav bar */}
              <div className='navbar w-full'>
                <NavBar/>
              </div>
      
      
            </div>
            </div>
          
          </div>):(login)?(
            <div>
              <Login/>
            </div>
          ):(
            <div>
              <SignUp/>
            </div>
          )
        }
    
    </BrowserRouter>
  );
}

export default App;
