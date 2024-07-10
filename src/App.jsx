import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Fsd from "./components/fsd";
import DataScience from "./components/ds";
import CyberSceurity from "./components/cs";
import Blockchain from "./components/bc";

function App(){
  return  <div>
            <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/:category/:subcategory" Component={Fsd}/>
              <Route path="/:category/:subcategory" Component={DataScience}/>
              <Route path="/:category/:subcategory" Component={CyberSceurity}/>
              <Route path="/:category/:subcategory" Component={Blockchain}/>
            </Routes>
          </div>
}

export default App;