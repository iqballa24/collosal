import React from 'react';
import { ItemIcon } from '@/component/UI/molecules';

import SquareFlag from '@/assets/square-flag.svg';
import SquareUser from '@/assets/square-user.svg';
import SquareDollar from '@/assets/square-dollar.svg';

const BoxStatistics = () => {
  return (
    <div className="w-full flex flex-row flex-wrap justify-between gap-5 z-10 bg-white/5 py-8 px-16">
      <ItemIcon icon={SquareFlag} value="8" description="COUNTRIES" />
      <ItemIcon icon={SquareUser} value="193" description="CLIENTS" />
      <ItemIcon icon={SquareDollar} value="$100k" description="EARNING" />
    </div>
  );
};

export default BoxStatistics;
