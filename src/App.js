import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarResto from './component/utils/NavbarResto';
import AllRepasPage from './pages/AllRepasPage';
import AddRepasPage from './pages/AddRepasPage';
import GetOneRepas from './pages/GetOneRepas';
import UpdateRepasPage from './pages/UpdateRepasPage';
import { useState } from 'react';
import About from './pages/About';




function App() {
  const [valSearch  , setValSearch] = useState("")
  const getValInp = (val)=>{
  setValSearch(val)
    
  }
  return (
      <div>
        <NavbarResto getValInp={getValInp}   />
        <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/allRepas' element={<AllRepasPage getValInp={getValInp}  valSearch={valSearch}/>}/>
          <Route path='/addRepas' element={<AddRepasPage/>}/>
          <Route path='/repas/:id' element={<GetOneRepas/>}/>
          <Route path='/update_repas/:id' element={<UpdateRepasPage/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
        </Router>
        
      </div>
  );
}

export default App;
