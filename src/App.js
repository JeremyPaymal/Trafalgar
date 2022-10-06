import React from 'react';
import Download from './components/Download/Download';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Providers from './components/Providers/Providers';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <Services />
      <Providers />
      <Download />
      < Testimonials />
    </div>
  );
}

export default App;
