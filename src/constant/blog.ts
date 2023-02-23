import Image1 from '@/assets/blog/image-1.jpg';
import Image2 from '@/assets/blog/image-2.jpg';
import Image3 from '@/assets/blog/image-3.jpg';
import Image4 from '@/assets/blog/image-4.jpg';
import Image5 from '@/assets/blog/image-5.jpg';
import Image6 from '@/assets/blog/image-6.jpg';

import AlexBernerImg from '@/assets/blog/alex-berner.png';
import anneGraneImg from '@/assets/blog/anne-grane.png';
import BanStewardImg from '@/assets/blog/ban-steward.png';
import DonRohimanImg from '@/assets/blog/don-rohiman.png';
import JaneCooperImg from '@/assets/blog/jane-cooper.png';
import RobAraceImg from '@/assets/blog/rob-arace.png';

const blogs = [
  {
    id: 1,
    img: Image1,
    title: 'SEO tricks that can increase the traffic of your website',
    description:
      'People have been using wrong SEO techniques on their websites.',
    author: {
      avatar: JaneCooperImg,
      name: 'Jane Cooper',
      job: "SEO Specialist",
      socials: {
        facebook: 'https://facebook.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      },
      description: 'Night subdue their morning created every light earth very darkness they`re you`re deep female. Tree sixth divided greater, midst earth forth won`t for moved.'
    },
    date: 'Mar 18',
    estimate: '5 min read',
  },
  {
    id: 2,
    img: Image2,
    title: '10 Figma Plugins that will increase your productivity',
    description: 'All these plugins are free and you can use them forever',
    author: {
      avatar: AlexBernerImg,
      name: 'Alex Berner',
      job: "UI Designer",
      socials: {
        facebook: 'https://facebook.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      },
      description: 'Night subdue their morning created every light earth very darkness they`re you`re deep female. Tree sixth divided greater, midst earth forth won`t for moved.'
    },
    date: 'Mar 11',
    estimate: '3 min read',
  },
  {
    id: 3,
    img: Image3,
    title: 'How to deploy a Node JS application to a VPS',
    description:
      'Step by step setting up the server and deploying the application',
    author: {
      avatar: anneGraneImg,
      name: 'Anne Grane',
      job: "Software Engineer",
      socials: {
        facebook: 'https://facebook.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      },
      description: 'Night subdue their morning created every light earth very darkness they`re you`re deep female. Tree sixth divided greater, midst earth forth won`t for moved.'
    },
    date: 'Mar 10',
    estimate: '20 min read',
  },
  {
    id: 4,
    img: Image4,
    title: 'How to compress image size without losing quality',
    description: 'Small images can speed up website load times',
    author: {
      avatar: BanStewardImg,
      name: 'Ban Stewardr',
      job: "UI Designer",
      socials: {
        facebook: 'https://facebook.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      },
      description: 'Night subdue their morning created every light earth very darkness they`re you`re deep female. Tree sixth divided greater, midst earth forth won`t for moved.'
    },
    date: 'Feb 20',
    estimate: '8 min read',
  },
  {
    id: 5,
    img: Image5,
    title: 'Why is Google still not recognizing my website?',
    description: 'Improve the SEO techniques that you have used so far',
    author: {
      avatar: RobAraceImg,
      name: 'Rob Arace',
      job: "SEO Specialist",
      socials: {
        facebook: 'https://facebook.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      },
      description: 'Night subdue their morning created every light earth very darkness they`re you`re deep female. Tree sixth divided greater, midst earth forth won`t for moved.'
    },
    date: 'Feb 19',
    estimate: '12 min read',
  },
  {
    id: 6,
    img: Image6,
    title: 'Monitor your application when errors occur in production',
    description: 'Get accurate error messages when the application crashes',
    author: {
      avatar: DonRohimanImg,
      name: 'Don Rohiman',
      job: "Programmer",
      socials: {
        facebook: 'https://facebook.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/'
      },
      description: 'Night subdue their morning created every light earth very darkness they`re you`re deep female. Tree sixth divided greater, midst earth forth won`t for moved.'
    },
    date: 'Feb 7',
    estimate: '9 min read',
  },
];

export default blogs;
