import React from 'react';

import { Buttons } from '@/component/UI/atoms';
import { Logos, PageHeader, PageSection } from '@/component/UI/molecules';
import {
  Features,
  Projects,
  Services,
  Testimonials,
} from '@/component/UI/organisms';

import DATA from '@/constant';

const Home = () => {
  return (
    <React.Fragment>
      <section className="wrapper flex flex-col gap-10 my-[101px]">
        <PageHeader
          badge="CLIENT-DEVELOPMENT DRIVEN"
          title="We Design. We Develop. We Ship. In The Same Day."
          description="We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work."
          position="center"
        />
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
          <Buttons
            type="button"
            color="primary"
            label="Send Quote"
            size="large"
            style="solid"
            onClick={() => console.log()}
          />
          <Buttons
            type="button"
            color="white"
            label="Learn More"
            size="large"
            style="light"
            onClick={() => console.log()}
          />
        </div>
      </section>
      <section className="wrapper mb-16">
        <Features features={DATA.FEATURES} />
      </section>
      <section className="wrapper mb-[130px]">
        <Logos data={DATA.CLIENTS} />
      </section>
      <section className="wrapper flex flex-col md:flex-row items-center mb-[120px]">
        <img
          src="./how-we-work-illustration.svg"
          alt=""
          className="w-full md:w-6/12"
          loading="lazy"
        />
        <div className="w-full md:w-6/12">
          <PageSection
            badge="HOW WE WORK?"
            title="Everything is well planned, well designed and developed wholeheartedly"
            description="Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped."
            position="left"
          />
        </div>
      </section>
      <section className="wrapper flex flex-col-reverse md:flex-row items-center pb-[118px] mb-[118px]">
        <div className="w-full md:6/12 flex flex-col gap-14">
          <PageSection
            badge="OUR TEAM"
            title="We're a team of designers, engineers and analysts"
            description="Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results."
            position="left"
          />
          <Buttons
            type="button"
            color="white"
            label="See Our Team"
            size="large"
            style="light"
            onClick={() => console.log()}
          />
        </div>
        <img
          src="./team-illustration.svg"
          alt=""
          className="w-full md:w-6/12"
          loading="lazy"
        />
      </section>
      <section className="wrapper flex flex-col items-center gap-[71px] mb-[110px]">
        <div className="w-full max-w-[517px] z-10">
          <PageSection
            badge="PROJECTS"
            title="We have completed many amazing projects that you will not believe"
            position="center"
          />
        </div>
        <Projects data={DATA.PROJECTS.slice(0, 2)} />
        <img
          src="./ellipse-green.svg"
          alt=""
          className="absolute -top-10 right-16 lg:right-48"
        />
        <img
          src="./ellipse-purple.svg"
          alt=""
          className="absolute top-32 right-10 lg:right-32"
        />
        <img
          src="./ellipse-red.svg"
          alt=""
          className="absolute top-5 left-24"
        />
        <img
          src="./rectangle.svg"
          alt=""
          className="hidden md:block absolute top-5 left-24"
        />
      </section>
      <section className="w-full max-w-[1308px] mx-auto flex flex-col items-center gap-[70px] mb-[120px] pb-36 pt-[90px] bg-highlight xl:rounded-[30px]">
        <div className="w-full max-w-[517px]">
          <PageSection
            badge="GET STARTED"
            title="What do you need? Choose a service that can help you"
            position="center"
          />
        </div>
        <Services data={DATA.SERVICES} />
      </section>
      <section className="wrapper flex flex-col items-center gap-[94px] mb-[106px]">
        <div className="w-full max-w-[517px]">
          <PageSection
            badge="testimonial"
            title="What do our clients say that we never let down?"
            position="center"
          />
        </div>
        <Testimonials data={DATA.TESTIMONIALS} />
      </section>
    </React.Fragment>
  );
};

export default Home;
