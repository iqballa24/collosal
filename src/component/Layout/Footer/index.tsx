import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative wrapper flex flex-row flex-wrap w-full pt-[104px] pb-[65px] justify-between gap-10">
      <div className=" flex flex-col gap-[21px]">
        <div className="flex flex-row items-center gap-2">
          <img src="./logo.svg" alt="" />
          <span className="text-white text-2xl font-bold">Collosal.</span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-muted font-medium">Copyright © 2021</span>
          <span className="text-muted font-medium">Design By Collosal LLC</span>
        </div>
      </div>
      <div className=" flex flex-col gap-[19px]">
        <h4 className="text-white text-sm font-medium">SERVICES</h4>
        <div className="flex flex-col gap-[10px]">
          <Link className="text-muted hover:text-white" to="/">
            Web Development
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            App Development
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            UI Design
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            Consultation
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            Maintenance
          </Link>
        </div>
      </div>
      <div className=" flex flex-col gap-[19px]">
        <h4 className="text-white text-sm font-medium">SERVICES</h4>
        <div className="flex flex-col gap-[10px]">
          <Link className="text-muted hover:text-white" to="/">
            Web Development
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            App Development
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            UI Design
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            Consultation
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            Maintenance
          </Link>
        </div>
      </div>
      <div className=" flex flex-col gap-[19px]">
        <h4 className="text-white text-sm font-medium">SERVICES</h4>
        <div className="flex flex-col gap-[10px]">
          <Link className="text-muted hover:text-white" to="/">
            Web Development
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            App Development
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            UI Design
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            Consultation
          </Link>
          <Link className="text-muted hover:text-white" to="/">
            Maintenance
          </Link>
        </div>
      </div>
      <img
        src="./ellipse-green.svg"
        alt=""
        className="absolute top-0 left-20"
      />
    </footer>
  );
};

export default Footer;
