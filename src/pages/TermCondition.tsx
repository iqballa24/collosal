import { PageHeader } from '@/component/UI/molecules';
import React from 'react';

const TermCondition = () => {
  return (
    <React.Fragment>
      <section className="wrapper my-[101px]">
        <div className="w-full flex flex-col md:flex-row items-center gap-[74px] border-b border-white/10 pb-[89px]">
          <PageHeader
            badge="page"
            title="Terms & Conditions"
            description="Updated at 2021-05-06"
            position="center"
          />
        </div>
      </section>
      <section className="wrapper flex flex-col gap-28 mb-36">
        <div className="flex flex-col gap-10 w-full max-w-[674px] mx-auto">
          <p className="text-white font-medium leading-8">
            By accessing and placing an order with Collosal, you confirm that
            you are in agreement with and bound by the terms of service
            contained in the Terms & Conditions outlined below. These terms
            apply to the entire website and any email or other type of
            communication between you and Collosal.
          </p>
          <p className="text-white font-medium leading-8">
            Under no circumstances shall Collosal team be liable for any direct,
            indirect, special, incidental or consequential damages, including,
            but not limited to, loss of data or profit, arising out of the use,
            or the inability to use, the materials on this site, even if
            Collosal team or an authorized representative has been advised of
            the possibility of such damages. If your use of materials from this
            site results in the need for servicing, repair or correction of
            equipment or data, you assume any costs thereof.
          </p>
          <p className="text-white font-medium leading-8">
            Collosal will not be responsible for any outcome that may occur
            during the course of usage of our resources. We reserve the rights
            to change prices and revise the resources usage policy in any
            moment.
          </p>
        </div>
        <div className="flex flex-col gap-10 w-full max-w-[674px] mx-auto">
          <h2 className="text-white text-3xl font-bold leading-10">License</h2>
          <p className="text-white font-medium leading-8">
            Collosal grants you a revocable, non-exclusive, non- transferable,
            limited license to download, install and use the website strictly in
            accordance with the terms of this Agreement.
          </p>
          <p className="text-white font-medium leading-8">
            These Terms & Conditions are a contract between you and Collosal (
            <q>we</q>,<q>our</q>, or <q>us</q>) grants you a revocable,
            non-exclusive, non- transferable, limited license to download,
            install and use the website strictly in accordance with the terms of
            this Agreement.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TermCondition;
