import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, PageSection, Particles } from '@/component/UI/molecules';
import { SectionDescription } from '@/component/UI/atoms/Typography';
import { Features } from '@/component/UI/organisms';

import DATA from '@/constant';

const ServiceDetail = () => {
  return (
    <React.Fragment>
      <section className="wrapper my-[101px]">
        <div className="w-full border-b border-white/10 pb-[89px]">
          <PageHeader
            badge="development"
            title="Solve your company's repetitive problems by designing apps"
            position="center"
          />
        </div>
      </section>
      <section className="wrapper flex flex-col md:flex-row items-center justify-between gap-10 mb-36">
        <img
          src="/development-illustration.svg"
          alt=""
          className="w-full md:w-6/12 max-w-[401px] mx-auto"
          loading="lazy"
        />
        <div className="flex flex-col gap-12 w-full max-w-[502px]">
          <div className="flex flex-col gap-5">
            <SectionDescription text="Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution." />
            <SectionDescription text="We can build you a website, a mobile app and a desktop app. All types of applications have a good security system, are easy to maintain, and are high speed." />
          </div>
          <ul className="grid gap-2.5 list-inside list-square text-white font-medium">
            <li>Avoid potential bugs with unit testing</li>
            <li>Removing unused code will speed up the application</li>
            <li>The modern design pleases the users</li>
            <li>A good UX will not disappoint users</li>
          </ul>
        </div>
      </section>
      <section className="wrapper flex flex-col gap-[90px] mb-36">
        <div className="w-full max-w-[507px] mx-auto">
          <PageSection
            badge="features"
            title="Here`s what you will get when purchasing this service"
            position="center"
          />
        </div>
        <Features features={DATA.FEATURES_DEV} />
      </section>
      <section className="wrapper flex flex-col gap-[90px] mb-36">
        <div className="w-full max-w-[507px] mx-auto z-10">
          <PageSection
            badge="FAQ"
            title="Frequently asked questions, maybe the same as yours"
            position="center"
          />
        </div>
        <ul className="flex flex-row flex-wrap justify-center gap-8">
          {DATA.FAQ.map((item) => (
            <li
              key={item.id}
              className="mb-[50px] flex flex-col gap-2.5 w-full max-w-[495px]"
            >
              <span className="text-white text-xl font-bold leading-10">
                {item.question}
              </span>
              <p className="text-muted font-medium leading-8">{item.answer}</p>
            </li>
          ))}
        </ul>
        <h3 className="text-center text-white font-bold">
          Didn`t find an answer?{' '}
          <Link to="/send-quote" className="text-primary underline-offset-2">
            Do not hesitate to ask!
          </Link>
        </h3>
        <Particles />
      </section>
    </React.Fragment>
  );
};

export default ServiceDetail;
