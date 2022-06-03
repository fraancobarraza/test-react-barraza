import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home';
import Products from './pages/Products';
import Recipes from './pages/Recipes';
import Stores from './pages/Stores';
import Contact from './pages/Contact';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import Category from './pages/Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/products' element={<Products/>}/>
          <Route exact path='/products/:category' element={<Category/>}/>
          <Route exact path='/products/:category/:id' element={<Details/>}/>
          <Route exact path='/recipes' element={<Recipes/>}/>
          <Route exact path='/stores' element={<Stores/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
