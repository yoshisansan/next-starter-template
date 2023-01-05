import React from 'react';

import { BlogLayout } from '@/components/Template';
import { ErrorBoundary } from '@/components/util/ErrorBoundry';

import { Top } from './Top';

export function TopPage() {
  return <BlogLayout>
    <ErrorBoundary>
      <Top />
    </ErrorBoundary>
  </BlogLayout>
}
