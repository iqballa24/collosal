import React from 'react';

const FormContact = React.lazy(() => import('@/component/UI/organisms/Form/FormContact'))
const FormQuote = React.lazy(() => import('@/component/UI/organisms/Form/FormQuote'))

export { FormContact, FormQuote };
