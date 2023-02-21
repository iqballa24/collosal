import React from 'react';
import {
  CardIcon,
  ItemIcon,
  PageHeader,
  PageSection,
  SmallCard,
} from '@/component/UI/molecules';
import {
  Globe,
  LayoutIcon,
  Monitor,
  SmartPhone,
  SquareArrowUp,
  SquareCheck,
  SquareDownload,
  SquareRefresh,
} from '@/component/UI/atoms/Icon';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const LinkToServiceDetail = () => {
  return (
    <Link
      to="detail"
      className="flex flex-row items-center justify-end gap-2 text-white font-semibold"
    >
      Service Detail <FiArrowRight />
    </Link>
  );
};

const Service = () => {
  return (
    <React.Fragment>
      <section className="wrapper my-[101px]">
        <div className="w-full border-b border-white/10 pb-[89px]">
          <PageHeader
            badge="services"
            title="We are here to help solve your company`s problems"
            position="center"
          />
        </div>
      </section>
      <section className="wrapper flex flex-col md:flex-row gap-16 items-center justify-between mb-36">
        <img
          src="./design-illustration.svg"
          alt=""
          className="w-full md:w-6/12"
          loading="lazy"
        />
        <div className="flex flex-col gap-12">
          <PageSection
            badge="ui design"
            title="Don't let your idea get caught by others, design a prototype for your idea"
            description="Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes."
            position="left"
          />
          <div className="flex flex-row gap-5">
            <SmallCard
              icon={<LayoutIcon />}
              title="Beautiful Design"
              description="Create a modern design for your idea."
            />
            <SmallCard
              icon={<LayoutIcon />}
              title="Design"
              description="Create prototypes for your designs."
            />
          </div>
          <LinkToServiceDetail />
        </div>
      </section>
      <section className="wrapper flex flex-col-reverse md:flex-row gap-16 items-center justify-between mb-36">
        <div className="flex flex-col gap-7 w-full max-w-[498px]">
          <PageSection
            badge="development"
            title="Create solutions to repetitive problems, design applications and access anywhere!"
            description="Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution."
            position="left"
          />
          <div className="flex flex-col gap-5">
            <CardIcon icon={<SmartPhone />} label="Mobile App Development" />
            <CardIcon icon={<Monitor />} label="Desktop App Development" />
            <CardIcon icon={<Globe />} label="Web Development" />
          </div>
          <LinkToServiceDetail />
        </div>
        <img
          src="./development-illustration.svg"
          alt=""
          className="w-full md:w-6/12"
          loading="lazy"
        />
      </section>
      <section className="wrapper flex flex-col md:flex-row gap-16 items-center justify-between mb-36">
        <img
          src="./maintenance-illustration.svg"
          alt=""
          className="w-full md:w-6/12"
          loading="lazy"
        />
        <div className="flex flex-col gap-7">
          <PageSection
            badge="development"
            title="Create solutions to repetitive problems, design applications and access anywhere!"
            description="Just tell us your repetitive problem or the primitive method used today, and we will create a digital solution."
            position="left"
          />
          <div className="grid grid-cols-2 gap-5">
            <ItemIcon
              icon={<SquareDownload />}
              description="Back up every day"
            />
            <ItemIcon icon={<SquareArrowUp />} description="Upgrade" />
            <ItemIcon
              icon={<SquareRefresh />}
              description="Cleaning every week"
            />
            <ItemIcon icon={<SquareCheck />} description="Fixing error" />
          </div>
          <LinkToServiceDetail />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Service;
