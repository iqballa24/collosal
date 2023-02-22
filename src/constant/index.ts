import GoogleLogo from '@/assets/GoogleLogo.svg';
import GithubLogo from '@/assets/GithubLogo.svg';
import ForbesLogo from '@/assets/ForbesLogo.svg';
import FacebookLogo from '@/assets/FacebookLogo.svg';
import MicrosoftLogo from '@/assets/MicrosoftLogo.svg';
import FigmaLogo from '@/assets/figma.svg';
import ClockLogo from '@/assets/clock.svg';
import CodeLogo from '@/assets/code.svg';
import TrendingUpLogo from '@/assets/trending-up.svg';
import LayoutLogo from '@/assets/layout.svg';
import ZapLogo from '@/assets/zap.svg';
import SquareFigma from '@/assets/square-figma.svg';
import SquareDev from '@/assets/square-dev.svg';
import SquareBox from '@/assets/square-box.svg';

import { PricingCardTypes, TestimonialCardTypes } from '@/types';

const DATA_USER = {
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

const CLIENTS = [
  GithubLogo,
  ForbesLogo,
  GoogleLogo,
  MicrosoftLogo,
  FacebookLogo,
];

const MENUS = [
  {
    id: 1,
    name: 'Services',
    path: '/services',
  },
  {
    id: 2,
    name: 'How we work',
    path: '/how-we-work',
  },
  {
    id: 3,
    name: 'Project',
    path: '/project',
  },
  {
    id: 4,
    name: 'About',
    path: '/about',
  },
];

const FEATURES = [
  {
    id: 1,
    icon: SquareFigma,
    title: 'Design',
    description:
      'The project interface will be designed first, our favorite tool is Figma.',
  },
  {
    id: 2,
    icon: SquareDev,
    title: 'Develop',
    description:
      'Transform design and write business logic here. Choose the technology you want.',
  },
  {
    id: 3,
    icon: SquareBox,
    title: 'Ship',
    description:
      'After the work is complete, we will send the project and all its assets to you.',
  },
];

const FEATURES_DEV = [
  {
    id: 1,
    icon: FigmaLogo,
    title: 'Design Files',
    description:
      'Projects are well designed using Figma. You will get the design file.',
  },
  {
    id: 2,
    icon: ClockLogo,
    title: 'Same Day',
    description:
      'We don`t want you to wait long. Everything will be finished on the same day.',
  },
  {
    id: 3,
    icon: CodeLogo,
    title: 'Quality Code',
    description:
      'Code written according to good practice is highly maintainable.',
  },
  {
    id: 4,
    icon: TrendingUpLogo,
    title: 'SEO',
    description:
      'The website will appear on the first page of the search engine.',
  },
  {
    id: 5,
    icon: LayoutLogo,
    title: 'Responsive Design',
    description: 'Access the website on any device, don`t limit your visitors.',
  },
  {
    id: 6,
    icon: ZapLogo,
    title: 'Blazing Fast',
    description:
      'A high speed website will not disappoint prospective customers.',
  },
];

const PROJECTS = [
  {
    id: 1,
    title: 'The Mobile App Landing Page',
    description: 'A landing page for mobile app',
  },
  {
    id: 2,
    title: 'The Desktop App Landing Page',
    description: 'A landing page for desktop app',
  },
  {
    id: 3,
    title: 'The Mobile App Landing Page',
    description: 'A landing page for mobile app',
  },
  {
    id: 4,
    title: 'The Desktop App Landing Page',
    description: 'A landing page for desktop app',
  },
];

const SERVICES: PricingCardTypes[] = [
  {
    title: 'UI Design',
    price: 1200,
    benefits: [
      '10 design pages',
      'Well-documented',
      '4 revisions',
      '$100/additional page',
    ],
    type: 'low',
  },
  {
    title: 'Development',
    price: 5000,
    benefits: [
      'Web & Mobile',
      'Well-documented',
      '8 revisions',
      '$1000/additional page',
    ],
    type: 'medium',
  },
  {
    title: 'Maintenance',
    price: 3000,
    benefits: [
      'Daily backup',
      '3 hourse of maintenance',
      'Including fixing',
      '$50/additional hour',
    ],
    type: 'high',
  },
];

const TESTIMONIALS: TestimonialCardTypes[] = [
  {
    image: './avatar/courtney-henry.png',
    name: 'Courtney Henry',
    company: 'Biffco Enterprises Ltd.',
    description:
      "Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable.",
  },
  {
    image: './avatar/esther-howard.png',
    name: 'Esther Howard',
    company: 'Abstergo Ltd.',
    description:
      "Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.",
  },
  {
    image: './avatar/ronald-richards.png',
    name: 'Ronald Richards',
    company: 'Barone LLC.',
    description:
      "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
  },
];

const FAQ = [
  {
    id: 1,
    question: 'How is the payment system?',
    answer:
      'If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.',
  },
  {
    id: 2,
    question: 'Can I consult first?',
    answer:
      'Of course you can consult us first. We are very happy to help your problems and provide our best solutions. You can contact us via the contact page.',
  },
  {
    id: 3,
    question: 'What if the project stops halfway?',
    answer:
      'We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.',
  },
  {
    id: 4,
    question: 'Does it include servers and domains?',
    answer:
      'You don`t need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one.',
  },
  {
    id: 5,
    question: 'Will I get the source code?',
    answer:
      'When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You don`t need to worry about this.',
  },
  {
    id: 6,
    question: 'Is there a warranty?',
    answer:
      '1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty.',
  },
];

export default {
  DATA_USER,
  MENUS,
  FEATURES,
  FEATURES_DEV,
  CLIENTS,
  PROJECTS,
  SERVICES,
  TESTIMONIALS,
  FAQ,
};
