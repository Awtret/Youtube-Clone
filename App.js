
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar" ;
import Videoes from "./Videoes" ;
import {BrowserRouter,Switch,Route} from "react-router-dom" ;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
       
          <Route path="/search">
            
            <h1> this is search page </h1>
          </Route>

        
      
    
      
      <Route exactpath="/">
      <div className="app_page">
        <Sidebar/>
        <Videoes/>
        </div>
        </Route>
        </Switch>

      
      </BrowserRouter>
      
    </div>

  );
}

export default App;
