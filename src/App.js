import './App.css';
import Home from './component/Home/home';
// import Skills from './component/Skills/skils';
import Projects from './component/Projects/data2';
import Navbar from './component/navigation/navbar';
import Contact from './component/contact/contect.jsx';
import './index.css';
import About from './component/About/about';
// import Loading from './loading';
// import React, { useEffect, useState } from "react";
// import ReactLoading from "react-loading";


function App() {
  // const [memes, setMemes] = useState({});
  // const [isLoding, setIsLoding] = useState(true);


  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     // .then((data) => setMemes(data));

  //   setTimeout(() => {
  //     setIsLoding(false);
  //   }, 3000);
  // }, []);

  return (
    <div className="App">
      {/* {isLoding ? <ReactLoading type="cylon" color="#0000FF" height={100} width={50} /> : '' } */}
      <Navbar />
      <Home />
      <About/>
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
