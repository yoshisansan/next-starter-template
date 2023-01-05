import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import { ColorModeBtn } from '@/components/ui/Button';
import { HamburgerMenu } from '@/components/ui/Hamburger';

const siteTitle = 'Tikka Info';
// const subTitle = 'テーラワーダ仏教情報のお役立ちサイト';

export const Header: React.FC = () => (
  <Box h="40px">
    <Flex
      w="100%"
      h="40px"
      p="0 18px"
      bg="background.main"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="main"
      position="fixed"
      zIndex="10">
      <Link href="/">
        <Flex>
          <Box w="20px" mr="4px" />
          <Box color="#fff" fontWeight="bold" cursor="pointer" fontFamily="MPLUSRounded1c-Light">
            {siteTitle}
          </Box>
        </Flex>
      </Link>
      <Flex>
        <ColorModeBtn />
        <HamburgerMenu />
      </Flex>
    </Flex>
  </Box>
);
