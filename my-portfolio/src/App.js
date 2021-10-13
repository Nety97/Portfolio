import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Home/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
