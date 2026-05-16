import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Gallery from './pages/Gallery'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  )
}
