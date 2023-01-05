import { Box, Flex } from '@chakra-ui/react';

import { SidebarList } from './SidebarList';

export function Sidebar() {
  return <Flex w="300px" h="880px" justify="center">
    <Box
      w="280px"
      h="96%"
      p="24px 18px"
      mt="10px"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      borderRadius="32px"
      background="background.sub"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      zIndex="1">
      <SidebarList />
    </Box>
  </Flex>
}
