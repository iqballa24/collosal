import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from '@/component/Layout';
import Home from '@/pages/Home';

function App() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/how-we-work" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
