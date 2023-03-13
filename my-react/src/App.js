import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './css/init.css'
import './css/Icons.css'
import './css/App.css'

import { useState, useRef } from 'react';

/* components */
import Navbar from './components/navbar/Navbar';
import { MenuItems } from "./components/navbar/MenuItems";
import HomeSection from './components/HomeSection';
import Mysection from './components/Mysection';
import ProjectSection from './components/ProjectSection';


/* Context */
import { MainContext } from './context/MainContext';


/* icons */
function App() {

  const Skills = {
    web: ["HTML", "CSS", "JavaScript", "React.js", "Vue.js"],
    system: ["C/C++"],
    design: ["Photoshop", "Illustrator", "Pigma"]
  }

  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);


  /*   document.addEventListener('scroll', function () {
      console.log(window.scrollY)
    }) */


  return (
    <div className="App">
      <MainContext.Provider value={Skills + inProp}>
        <BrowserRouter>
          <Navbar props={setInProp} />
          {/* Routes */}
          <CSSTransition nodeRef={nodeRef} in={inProp} classNames="my-node" timeout={200} >
            <Routes>
              <Route path='/' element={<HomeSection />}></Route>
              <Route path='about' element={<Mysection />}></Route>
              <Route path='project' element={<ProjectSection />}></Route>
            </Routes>
          </CSSTransition>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='about'>about</Link>
            <Link to='project'>project</Link>
          </nav>
        </BrowserRouter >

      </MainContext.Provider>

    </div>
  );
}
export default App;

