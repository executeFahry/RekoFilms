import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Action from './components/Action';
import Fantasy from './components/Fantasy';
import Horror from './components/Horror';
import Science from './components/Science';
import ScienceFiction from './components/ScienceFiction';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/landingPage.css';

function App() {
  return (
    <div>
      <div className="mainBg">
        <Router>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/action' element={<Action />} />
            <Route path='/fantasy' element={<Fantasy />} />
            <Route path='/horror' element={<Horror />} />
            <Route path='/science' element={<Science />} />
            <Route path='/sci-fi' element={<ScienceFiction />} />
          </Routes>
        </Router>
      </div>
    </div >
  );
}

export default App;