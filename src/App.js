import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Test from "./Components/Test/Test";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Cards from "./Components/Cards/Cards";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { createContext, useContext, useState } from "react";
import Footer from "./Components/Footer/Footer";
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
            <Route path="/Cards" element={<Cards/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
          </Routes>
       
      </BrowserRouter>
      <Footer/>
      </AuthContext.Provider>

    </div>
  );
};
 export const useAuth=()=> useContext(AuthContext);
export default App;