import React from 'react';

import * as Typography from '@/component/UI/atoms/Typography';
const Avatar = React.lazy(() => import('@/component/UI/atoms/Avatar'));
const Buttons = React.lazy(() => import('@/component/UI/atoms/Buttons'));
const Tag = React.lazy(() => import('@/component/UI/atoms/Tag'));
const TagName = React.lazy(() => import('@/component/UI/atoms/TagName'));
const Spinner = React.lazy(() => import('@/component/UI/atoms/Spinner'));

export { Buttons, Tag, TagName, Typography, Spinner, Avatar };
