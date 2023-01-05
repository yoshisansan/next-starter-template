import React from 'react';

import CustomSEO from './CustomSEO';
import MyDefaultSEO from './MyDefaultSEO';

/** ページ毎のSEO設定 */
export const SEO: React.FC<{ title?: string; description?: string }> = ({ title, description }) => (
  <>
    <MyDefaultSEO />
    <CustomSEO title={title} description={description} />
  </>
);

export default SEO;
