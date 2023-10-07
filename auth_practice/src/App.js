import './App.css';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import Post from './pages/Post';


function App() {
  const user = true;
  const logged = false
  return (
    <BrowserRouter>
    <div className="App">
        <p>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={logged ? <Navigate to="/" /> : <Login />} />
            <Route path='/post/:id' element={user ? <Post /> : <Navigate to="/" />} />
          </Routes>
          <Login/>
        </p>
    </div>
    </BrowserRouter>
  );
}

export default App;
