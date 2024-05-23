import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Test from "./Components/Test/Test";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
const App=()=>{
  const [user , setUser] = useState(null);
  return(
    <div>
      <AuthContext.Provider value={{user , setUser}}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Test" element={<Test/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
          </Routes>
       
      </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};
 export const useAuth=()=> useContext(AuthContext);
export default App;