import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Gallery from './Pages/Gallery';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ViewCart from './Pages/ViewCart';



function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
          <Route exact path="/contactus" element={<ContactUs/>}/>
          <Route exact path="/viewcart" element={<ViewCart/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
