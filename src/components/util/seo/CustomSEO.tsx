import { NextSeo } from 'next-seo';
import React from 'react';

import { siteName, defaultDescription } from './MyDefaultSEO';
/** ページ毎のSEO設定 */
const CustomSEO: React.FC<{ title?: string; description?: string }> = ({ title, description }) => (
  <NextSeo
    title={title || siteName}
    description={description || defaultDescription}
    openGraph={{ title }}
  />
);

export default CustomSEO;
