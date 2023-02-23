import React from 'react';

const AuthorCard = React.lazy(() => import('@/component/UI/molecules/AuthorCard'));
const BlogCard = React.lazy(()=>import('@/component/UI/molecules/BlogCard'));
const BoxStatistics = React.lazy(()=>import('@/component/UI/molecules/BoxStatistics'));
const Callout = React.lazy(() => import('@/component/UI/molecules/Callout'));
const CardIcon = React.lazy(() => import('@/component/UI/molecules/CardIcon'));
const ComboboxInput = React.lazy(() => import('@/component/UI/molecules/Combobox'));
const FeatureCard = React.lazy(() => import('@/component/UI/molecules/FeatureCard'));
const Input = React.lazy(() => import('@/component/UI/molecules/Input'));
const ItemIcon = React.lazy(() => import('@/component/UI/molecules/ItemIcon'));
const LabelIcon = React.lazy(() => import('@/component/UI/molecules/LabelIcon'));
const Logos = React.lazy(() => import('@/component/UI/molecules/Logos'));
const PageHeader = React.lazy(() => import('@/component/UI/molecules/PageHeader'));
const PageSection = React.lazy(() => import('@/component/UI/molecules/PageSection'));
const Particles = React.lazy(() => import('@/component/UI/molecules/Particles'));
const ProjectCard = React.lazy(() => import('@/component/UI/molecules/ProjectCard'));
const SmallCard = React.lazy(() => import('@/component/UI/molecules/SmallCard'));
const Socials = React.lazy(() => import('@/component/UI/molecules/Socials'));
const TestimonialCard = React.lazy(() => import('@/component/UI/molecules/TestimonialCard'));
const TextArea = React.lazy(() => import('@/component/UI/molecules/TextArea'));

export {
  AuthorCard,
  BlogCard,
  BoxStatistics,
  Callout,
  CardIcon,
  ComboboxInput,
  FeatureCard,
  Input,
  ItemIcon,
  LabelIcon,
  Logos,
  PageHeader,
  PageSection,
  Particles,
  ProjectCard,
  SmallCard,
  Socials,
  TestimonialCard,
  TextArea,
};
