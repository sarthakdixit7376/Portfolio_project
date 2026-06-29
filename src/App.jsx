import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Work from './pages/Work'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import CustomCursor from './components/CustomCursor'
import './App.css'


function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
