import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router-dom';
import './css/init.css'
import './css/Icons.css'
import './css/App.css'

import { useState } from 'react';

/* components */
import Navbar from './components/navbar/Navbar';
import TopSection from './components/TopSection';
import TopSection2 from './components/TopSection2';
import MidSection2 from './components/MidSection2';
import BottomSection from './components/BottomSection';
import Shadowdom from './components/Shadowdom';

/* Context */
import { MainContext } from './context/MainContext';

/* icons */
function App() {

/*   const iframeHtml = () => {
    return {
      __html: `<iframe src='./src/components/app1.html' width='100%' height='700px'></iframe>`
    }; */
  }
  const Skills = {
    web: ["HTML", "CSS", "JavaScript", "React.js", "Vue.js"],
    system: ["C/C++"],
    design: ["Photoshop", "Illustrator", "Pigma"]
  }


  document.addEventListener('scroll', function () {
    console.log(window.scrollY)
  })


  return (
    <BrowserRouter>
      <div className="App">
        <MainContext.Provider value={Skills}>
          <Navbar />
          <TopSection />
          <TopSection2 />
          <MidSection2 />
         {/*  <Shadowdom dangerouslySetInnerHTML={iframeHtml()} /> */}
          <BottomSection />
          <div></div>
        </MainContext.Provider>
        {/* Routes */}
        <Routes>
          <Route></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

