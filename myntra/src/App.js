import logo from './logo.svg';
import './App.css';

import WithSubnavigation from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
 <WithSubnavigation/>
 <Home/>
 <Footer/>
    </div>
  );
}

export default App;
