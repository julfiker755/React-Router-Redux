import './App.css'
import { Routes, Route,} from "react-router-dom";
import Home from './Component/Home/Home';
import Servies from './Component/Servies/Servies';
import Nopage from './Component/Nopage/Nopage';
import Frind from './Component/Frind/Frind';
import Header from './Component/Header/Header';
import FriendDel from './Component/Frind/FriendDel';

function App() {
  return (
    <div className="App">
     {/* how very simple Router */}
     <Header></Header>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route  path="/Home" element={<Home/>}/>
        <Route path="/Servies" element={<Servies/>}/>
        <Route path="*" element={<Nopage/>}></Route>
        <Route path="/Frind" element={<Frind/>}/>
        <Route path="/Frinds/:userID" element={<FriendDel></FriendDel>}/>
      </Routes>
    </div>
  );
}

export default App;
