import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restuarant from './components/Restuarant';
import Restview from './components/Restview';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>

     <div id='body'>
        <Routes>
          <Route path='/' element={<Restuarant></Restuarant>}/>
          <Route path='/view-restuarant/:id' element={<Restview></Restview>}/>
        </Routes>
     </div >

      <Footer/>
    </div>
  );
}

export default App;
