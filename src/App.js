import './App.css';
import Home from './component/Home/home';
import Skills from './component/Skills/skils';
import Projects from './component/Projects/data2';
import Navbar from './component/navigation/navbar';
import Contact from './component/contact/contect.jsx';
import './index.css';
import About from './component/About/about';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
