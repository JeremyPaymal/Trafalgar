import React from 'react';
import Download from './components/Download/Download';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Providers from './components/Providers/Providers';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <Services />
      <Providers />
      <Download />
    </div>
  );
}

export default App;
