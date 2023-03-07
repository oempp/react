import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router-dom';
import './css/init.css'
import './css/Icons.css'
import './css/App.css'

/* components */
import Navbar from './components/navbar/Navbar';
import TopSection from './components/TopSection';
import MidSection from './components/MidSection';
import MidSection2 from './components/MidSection2';
import BottomSection from './components/BottomSection';

/* Context */
import { MainContext } from './context/MainContext';

/* icons */
function App() {

  const Skills = {
    web: ["HTML", "CSS", "JavaScript", "React.js", "Vue.js"],
    system: ["C/C++"],
    design :["Photoshop", "Illustrator", "Pigma"]
  }
  const systemSkills = ["HTML", "CSS", "JavaScript", "React.js", "Vue.js"]
  return (
    <BrowserRouter>
      <div className="App">
        <MainContext.Provider value={Skills}>
          <Navbar />
          <TopSection />
          <MidSection />
          <MidSection2 />
          <BottomSection />
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

