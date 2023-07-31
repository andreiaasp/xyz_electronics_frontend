import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddUser from './users/AddUser';

function App() {
  return (
    <div className="App">
      <Router>  
        <NavBar/>
        <Routes>
          <Route exact path="" element={<Home/>}></Route>
          <Route exact path="/adduser" element={<AddUser/>}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
