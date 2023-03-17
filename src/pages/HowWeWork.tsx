import { PageHeader } from '@/component/UI/molecules';
import PageSection from '@/component/UI/molecules/PageSection';
import React from 'react';

const HowWeWork = () => {
  return (
    <React.Fragment>
      <section className="wrapper my-[101px]">
        <div className="w-full border-b border-white/10 pb-[89px]">
          <PageHeader
            badge="how we work"
            title="We have a workflow that allows the job to be delivered well"
            position="center"
          />
        </div>
      </section>
      <section className="wrapper flex flex-col md:flex-row items-center justify-between gap-10 mb-36">
        <img
          src="/discuss-illustration.png"
          alt=""
          className="w-full md:w-6/12 max-w-[401px] mx-auto"
          loading="lazy"
        />
        <div className="flex flex-col gap-12 w-full max-w-[502px]">
          <PageSection
            badge="step 01"
            title="Let`s talk about your company`s problems first"
            description="After submitting the quote form, we will review the data, then we will contact you. You can discuss with our team regarding your problem and find a solution to that problem. In this step, you will discuss what application to build."
            position="left"
          />
        </div>
      </section>
      <section className="wrapper flex flex-col md:flex-row-reverse items-center justify-between gap-10 mb-36">
        <img
          src="/code-illustration.svg"
          alt=""
          className="w-full md:w-6/12 max-w-[401px] mx-auto"
          loading="lazy"
        />
        <div className="flex flex-col gap-12 w-full max-w-[502px]">
          <PageSection
            badge="step 02"
            title="Doing planning, design and development until everything is finished"
            description="When everything is agreed upon, our team will make plans related to the application that will be created. Starting from analysis, design, to development. In this step, the application is 100% complete."
            position="left"
          />
        </div>
      </section>
      <section className="wrapper flex flex-col md:flex-row items-center justify-between gap-10 mb-36">
        <img
          src="/server-illustration.svg"
          alt=""
          className="w-full md:w-6/12 max-w-[401px] mx-auto"
          loading="lazy"
        />
        <div className="flex flex-col gap-12 w-full max-w-[502px]">
          <PageSection
            badge="step 03"
            title="The project is complete and we ship all the project assets, and access to the server"
            description="We will be responsible for delivering all the project assets to you, don't worry. These assets include, design files, source code, server access, and so on. In this step, everything is done and the contract ends."
            position="left"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default HowWeWork;
