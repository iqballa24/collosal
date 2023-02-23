import React from 'react';
import { BoxStatistics, Logos, Particles } from '@/component/UI/molecules';
import PageHeader from '@/component/UI/molecules/PageHeader';
import PageSection from '@/component/UI/molecules/PageSection';

import DATA from '@/constant';
import Teams from '@/component/UI/organisms/Teams';

const About = () => {
  return (
    <React.Fragment>
      <section className="wrapper my-[101px]">
        <div className="w-full flex flex-col md:flex-row items-center gap-[74px] border-b border-white/10 pb-[89px]">
          <img
            src="./about-illustration.svg"
            alt=""
            className="w-full md:w-6/12"
            loading="lazy"
          />
          <PageHeader
            badge="about"
            title="We are creative, smart and hardworking people"
            description="Several creative people gather in the same place - that`s Collosal. We collaborate to produce the best results, loved by clients and comfortable for users. Here we maintain togetherness even though with different backgrounds, all the people here are already experts in their respective fields."
            position="left"
          />
        </div>
      </section>
      <section className="wrapper flex flex-col gap-[90px] mb-[119px]">
        <div className="w-full max-w-[507px] mx-auto">
          <PageSection
            badge="statistics"
            title="In 3 years we reached 8 countries, 193 clients and earning $100k USD"
            position="center"
          />
        </div>
        <BoxStatistics />
        <Logos data={DATA.CLIENTS} />
      </section>
      <section className="wrapper flex flex-col gap-[90px] mb-[119px]">
        <div className="w-full max-w-[507px] mx-auto">
          <PageSection
            badge="our team"
            title="Meet the team! All creative people are here"
            position="center"
          />
        </div>
        <Teams data={DATA.TEAMS} />
        <Particles />
      </section>
    </React.Fragment>
  );
};

export default About;
