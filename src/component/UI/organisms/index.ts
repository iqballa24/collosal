import React from 'react'

import * as Form from '@/component/UI/organisms/Form';

const Features = React.lazy(() => import('@/component/UI/organisms/Features'))
const Projects = React.lazy(() => import('@/component/UI/organisms/Projects'))
const Services = React.lazy(() => import('@/component/UI/organisms/Services'))
const Testimonials = React.lazy(() => import('@/component/UI/organisms/Testimonials'))

export { Features, Form, Projects, Services, Testimonials };
