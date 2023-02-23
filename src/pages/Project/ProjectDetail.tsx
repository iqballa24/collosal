import React from 'react';
import { SectionDescription } from '@/component/UI/atoms/Typography';
import { PageHeader, PageSection } from '@/component/UI/molecules';
import { Projects } from '@/component/UI/organisms';

import DATA from '@/constant';

const ProjectDetail = () => {
  return (
    <React.Fragment>
      <section className="wrapper py-[101px]">
        <div className="w-full max-w-[501px] mx-auto">
          <PageHeader
            badge="project detail"
            title="The Desktop App Landing Page"
            position="center"
          />
        </div>
      </section>
      <section className="wrapper mb-32">
        <div className="flex flex-col md:flex-row items-center gap-11 pt-[74px] pb-[134px] border-y border-white/10">
          <img src="/project-illustration.svg" alt="" className="w-full" />
          <div className="flex flex-col gap-[52px]">
            <SectionDescription text="Something has always existed. According to physics, there can never be true physical nothingness—though there can be times when existence resembles nothing." />
            <ul className="flex flex-col gap-10">
              <li className="flex flex-col gap-2">
                <span className="text-muted text-sm font-semibold uppercase">
                  category
                </span>
                <span className="text-white text-sm font-semibold uppercase">
                  Development
                </span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-muted text-sm font-semibold uppercase">
                  client
                </span>
                <span className="text-white text-sm font-semibold uppercase">
                  Acme, Inc
                </span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-muted text-sm font-semibold uppercase">
                  technology
                </span>
                <span className="text-white text-sm font-semibold uppercase">
                  JavaScript, HTML, CSS
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="wrapper flex flex-col gap-[70px]">
        <PageSection
          badge="projects"
          title="Other Amazing Projects"
          position="center"
        />
        <Projects data={DATA.PROJECTS.slice(0, 2)} />
      </section>
    </React.Fragment>
  );
};

export default ProjectDetail;
