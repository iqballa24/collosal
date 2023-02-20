import GoogleLogo from '@/assets/GoogleLogo.svg';
import GithubLogo from '@/assets/GithubLogo.svg';
import ForbesLogo from '@/assets/ForbesLogo.svg';
import FacebookLogo from '@/assets/FacebookLogo.svg';
import MicrosoftLogo from '@/assets/MicrosoftLogo.svg';
import { SquareBox, SquareCode, SquareFigma } from '@/component/UI/atoms/Icon';
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
    path: '/',
  },
  {
    id: 2,
    name: 'How we work',
    path: '/how-we-work',
  },
  {
    id: 3,
    name: 'Projects',
    path: '/projects',
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
    icon: SquareCode,
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

export default {
  DATA_USER,
  MENUS,
  FEATURES,
  CLIENTS,
  PROJECTS,
  SERVICES,
  TESTIMONIALS,
};
