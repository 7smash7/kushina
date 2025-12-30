import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { Commissions } from './pages/Commissions';
import { Product } from './pages/Product';
import { History } from './pages/History'; // New page
import { Admin } from './pages/Admin';

import { StoreProvider } from './context/StoreContext';

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="min-h-screen bg-ka-black text-ka-gray selection:bg-ka-red selection:text-white">
          <CustomCursor />
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/commissions" element={<Commissions />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/history" element={<History />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
