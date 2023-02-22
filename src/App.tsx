import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@/component/Layout';
const Home = React.lazy(() => import('@/pages/Home'));
const Quote = React.lazy(() => import('@/pages/Quote'));
const Contact = React.lazy(() => import('@/pages/Contact'));
const Project = React.lazy(() => import('@/pages/Project'));
const Service = React.lazy(() => import('@/pages/Service'));
const ServiceDetail = React.lazy(() => import('@/pages/Service/ServiceDetail'));
const HowWeWork = React.lazy(() => import('@/pages/HowWeWork'));
const About = React.lazy(() => import('@/pages/About'));
const NotFound = React.lazy(() => import('@/pages/404'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/*" element={<ServiceDetail />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/send-quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
