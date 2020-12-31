import React from 'react';
import Layout from './src/components/Layout';

const wrapPageElement = ({ element, props }) => (
  // const l = props;
  <Layout props={props}>{element}</Layout>
);

export { wrapPageElement };
