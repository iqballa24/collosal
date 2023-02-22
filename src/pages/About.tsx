import PageHeader from '@/component/UI/molecules/PageHeader';
import React from 'react';

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
      <section className=''></section>
    </React.Fragment>
  );
};

export default About;
