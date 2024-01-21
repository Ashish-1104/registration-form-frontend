import {BrowserRouter,Routes,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Reg}  from "./pages/Regis.jsx"
import {Login} from "./pages/Login"
import {Navbar} from "./components/Navbar"

const App =()=>{
  return (<>
  
    <BrowserRouter>
    <Navbar />
    <Routes className="bg-dark">
      <Route path="/" element ={<Reg/>}/>
      <Route path= "/login" element = {<Login/>}/>
    </Routes>
    </BrowserRouter>
    
    </>)
};

export default App;