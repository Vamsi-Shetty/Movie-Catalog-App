import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
