import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home'
import Activities from './components/Activities/Activities'
import Detail from './components/Detail/Detail';
import CreatActivity from './components/CreateActivity/CreatActivity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/activities'element={<Activities/>}/>
        <Route path='/details/:id'element={<Detail/>}/>
        <Route path='/create'element={<CreatActivity/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
