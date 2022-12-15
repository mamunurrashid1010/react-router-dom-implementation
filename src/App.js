import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import MyRoute from './components/routes/MyRoute';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <MyRoute/>
        </BrowserRouter>
    </div>
  );
}

export default App;
