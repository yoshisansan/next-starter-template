import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  useBreakpointValue
} from '@chakra-ui/react';
import { useState } from 'react';

import { SlidebarMenu } from './SlidebarMenu';

export function Slidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const smVariant = { navigation: 'drawer', navigationButton: true };
  const mdVariant = { navigation: 'sidebar', navigationButton: false };
  const variant = useBreakpointValue({ base: smVariant, md: mdVariant });
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return variant?.navigation === 'sidebar' ? (
    <Box position="fixed" left={0} p={5} w="200px" top={0} h="100%" bg="#dfdfdf">
      <SlidebarMenu onClick={() => toggleSidebar()} />
    </Box>
  ) : (
    <Drawer isOpen={isSidebarOpen} placement="right" onClose={() => toggleSidebar()}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody>
            <SlidebarMenu onClick={() => toggleSidebar()} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
