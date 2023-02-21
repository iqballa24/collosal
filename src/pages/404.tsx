import React from 'react';
import { Buttons } from '@/component/UI/atoms';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-[100vh]">
      <div className="absolute top-2/4 left-2/4 -translate-y-3/4 -translate-x-2/4 flex flex-col items-center text-center mx-auto w-full max-w-[502px]">
        <span className="text-red font-semibold leading-8 uppercase">
          error
        </span>
        <h2 className="text-white text-4xl font-bold leading-[54px] pt-[13px] pb-[24px]">
          The page you are looking for is not on this website, please check
          again
        </h2>
        <p className="text-muted font-medium leading-8 pb-[30px]">
          The system cannot find the page you are looking for, maybe you have
          the wrong path or the page has been deleted.
        </p>
        <Buttons
          type="button"
          label="Back to Home"
          size="large"
          color="white"
          style="light"
          onClick={() => navigate('/')}
        />
      </div>
    </section>
  );
};

export default NotFound;
