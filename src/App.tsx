import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpanishLanguageProvider } from './components/SpanishLanguageProvider';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Outreach from './pages/Outreach';
import Contact from './pages/Contact';
import Join from './pages/Join';
import Sponsorship from './pages/Sponsorship';
import VexRobotics from './pages/VexRobotics';
import FtcRobotics from './pages/FtcRobotics';
import FrcRobotics from './pages/FrcRobotics';
import MateRovRobotics from './pages/MateRovRobotics';

function App() {
  return (
    <SpanishLanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:id" element={<ProgramDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/outreach" element={<Outreach />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<Join />} />
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route path="/programs/vex-robotics" element={<VexRobotics />} />
              <Route path="/programs/ftc" element={<FtcRobotics />} />
              <Route path="/programs/frc" element={<FrcRobotics />} />
              <Route path="/programs/mate-rov" element={<MateRovRobotics />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SpanishLanguageProvider>
  );
}

export default App;