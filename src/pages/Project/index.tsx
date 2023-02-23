import React from 'react';
import Projects from '@/component/UI/organisms/Projects';
import { ComboboxInput, PageHeader } from '@/component/UI/molecules';

import DATA from '@/constant';
import { Buttons } from '@/component/UI/atoms';

const Project = () => {
  return (
    <React.Fragment>
      <section className="wrapper py-[101px]">
        <div className="flex flex-col gap-10 md:flex-row justify-between border-b border-white/10 pb-[89px]">
          <PageHeader
            badge="projects"
            title="We have completed many amazing projects that you will not believe"
            position="left"
          />
          <div className="max-w-sm">
            <ComboboxInput
              label=""
              options={[
                { id: 1, text: 'Development' },
                { id: 2, text: 'UI/UX Design' },
                { id: 3, text: 'Maintenance' },
                { id: 4, text: 'Other' },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="wrapper flex flex-col items-center gap-5 mb-16">
        <Projects data={DATA.PROJECTS} />
        <Buttons
          type="button"
          style="light"
          color="white"
          size="large"
          label="Load More"
          onClick={() => console.log()}
        />
      </section>
    </React.Fragment>
  );
};

export default Project;
