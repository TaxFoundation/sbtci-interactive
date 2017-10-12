import React from 'react';
import { Helmet } from 'react-helmet';

const Metadata = (props) => {
  return (
    <Helmet>
      <title>{ props.title }</title>
      <meta name="description" content={ props.description } />
      <link rel="canonical" href={ `https://statetaxindex.org${ props.location }` } />
      <meta property="og:site_name" content={ props.title } />
      <meta property="og:title" content={ props.title } />
      <meta property="og:description" content={ props.description } />
      <meta property="og:image" content={ `https://statetaxindex.org${ props.image }` } />
      <meta property="og:url" content={ `https://statetaxindex.org${ props.location }` } />
      <meta property="og:locale" content="en_US" />
      <meta property="fb:app_id" content="123259711705584" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@taxfoundation" />
      <meta name="twitter:title" content={ props.title } />
      <meta name="twitter:description" content={ props.description } />
      <meta name="twitter:creator" content="@taxfoundation" />
      <meta name="twitter:image" content={ `https://statetaxindex.org${ props.image }` } />
    </Helmet>
  );
};

export default Metadata;
