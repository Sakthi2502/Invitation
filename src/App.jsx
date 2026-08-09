import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import OpeningScreen from './components/OpeningScreen/OpeningScreen';
import Hero from './components/Hero/Hero';
import Countdown from './components/Countdown/Countdown';
import InvitationCard from './components/InvitationCard/InvitationCard';
import EventDetails from './components/EventDetails/EventDetails';
import Reminder from './components/Reminder/Reminder';
import Gallery from './components/Gallery/Gallery';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(() => {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpened && !isLoading && <OpeningScreen key="opening" onOpen={handleOpen} />}
      </AnimatePresence>

      <motion.main
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpened ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Countdown />
        <InvitationCard />
        <EventDetails />
        <Reminder />
        <Gallery />
        <Location />
        <Contact />
        <Footer />
      </motion.main>

      {isOpened && <BackgroundMusic />}
    </>
  );
}

export default App;
