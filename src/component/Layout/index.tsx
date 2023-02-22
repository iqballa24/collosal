import React from 'react';
import Header from '@/component/Layout/Header';
import { Outlet } from 'react-router-dom';
import { Callout } from '@/component/UI/molecules';
import Footer from '@/component/Layout/Footer';

const Layout = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full before:absolute before:top-0 before:left-0 before:bg-[url('/Background.svg')] before:bg-cover before:h-full before:w-full  before:-z-10 before:blur-[175px]">
        <div className="w-full h-full min-h-screen bg-dark/90 ">
          <Header />
          <main>
            <Outlet />
            <div className="wrapper relative">
              <Callout text="We've prepared everything, it's time for you to tell the problem" />
              <img
                src="/ellipse-red.svg"
                alt=""
                className="absolute -top-10 right-24"
              />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
