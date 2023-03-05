import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router-dom';
import './css/init.css'
import './css/Icons.css'

/* components */
import Navbar from './components/navbar/Navbar';
import TopSection from './components/TopSection';
import MidSection from './components/MidSection';
import MidBackground from './components/MidBackground';
import MainSection from './components/MainSection';
import BottomSection from './components/BottomSection';
import FirstContent from './components/FirstContent';
import SecondContent from './components/SecondContent';
import ThirdContent from './components/ThirdContent';

/* icons */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <TopSection />
        <MainSection />
        <MidBackground />
        <MidSection />
        {/* Routes */}
        <Routes>
          <Route></Route>
        </Routes>
        <FirstContent />
        <SecondContent />
        <ThirdContent />
        <BottomSection />
      </div>
    </BrowserRouter>
  );
}

export default App;

