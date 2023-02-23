import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, PageSection } from '@/component/UI/molecules';
import { Services } from '@/component/UI/organisms';

import DATA from '@/constant';

const Pricing = () => {
  return (
    <React.Fragment>
      <section className="wrapper flex flex-col gap-[90px] mt-[101px] mb-[114px]">
        <div className="w-full border-b border-white/10 pb-[89px]">
          <PageHeader
            badge="pricing"
            title="What do you need? Choose a service that can help you"
            position="center"
          />
        </div>
        <Services data={DATA.SERVICES} />
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
      </section>
    </React.Fragment>
  );
};

export default Pricing;
