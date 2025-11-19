import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";
import CultureShowPage from './pages/CultureShowPage';
import Contact from './pages/ContactPage';
import Calendar from './features/Calendar';
import EventsPage from './pages/EventsPage';
import SponsorPage from './pages/SponsorPage';
import EboardPage from './pages/EboardPage';
import Footer from './components/Footer';
import './App.css';

import { useSelector } from 'react-redux';

const App = () => {
  const isAuthorized = useSelector(state => state.auth.isAuthorized);

  return (
    <>
      {!isAuthorized && <NavBar />}
      <div id='app-container'>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/culture-show' element={<CultureShowPage />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/sponsors' element={<SponsorPage />} />
          <Route path='/eboard' element={<EboardPage />} />
        </Routes>
      </div>
      {!isAuthorized && <Footer />}
    </>
  )
}

export default App;
