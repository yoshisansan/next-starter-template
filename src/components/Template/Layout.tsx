/** @jsxImportSource @emotion/react */
import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { Content } from '@/components/ui/Content';
import { Footer } from '@/components/ui/Footer/Footer';
import { Header } from '@/components/ui/Header';
import { Sidebar } from '@/components/ui/Sidebar/Sidebar';

export const BlogLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Header />
    <Flex>
      <Sidebar />
      <Content className="content__p">{children}</Content>
    </Flex>
    <Footer />
  </>
);
