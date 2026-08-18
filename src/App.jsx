import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import PartnersPage from './pages/PartnersPage';
import { VillageTestProvider } from './context/VillageTestContext';
import VillageTestModal from './components/VillageTestModal';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <VillageTestProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#F5F1EA] text-[#2E2330] selection:bg-[#C46A4A] selection:text-white flex flex-col justify-between">

          {/* Initial Luxury Loading Screen */}
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}

          {/* Header & Navigation */}
          <Header />

          {/* Application Page Routes */}
          <main className="flex-1 overflow-x-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Shared Footer */}
          <Footer />

          {/* In-App Interactive Village Test Modal */}
          <VillageTestModal />
        </div>
      </Router>
    </VillageTestProvider>
  );
}

export default App;

