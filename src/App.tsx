import React from 'react';
import { AuthorCard } from '@/component/UI/molecules';

const data = {
  avatar: 'https://ui-avatars.com/api/?name=Iqbal+Nugraha',
  name: 'Iqbal Nugraha',
  job: 'Frontend developer',
  socials: {
    linkedin: 'linkedin.com',
    facebook: 'facebook.com',
    twitter: 'twitter.com',
  },
  description:
    'Night subdue their morning created every light earth very darkness they`re you`re deep female. Tree sixth divided greater, midst earth forth won`t for moved.',
};

function App() {
  return <AuthorCard user={data} />;
}

export default App;
