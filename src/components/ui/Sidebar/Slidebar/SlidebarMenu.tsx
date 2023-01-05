import { Button, VStack } from '@chakra-ui/react';

// interface Props {
//   onClose: Function;
//   isOpen: boolean;
//   variant: 'drawer' | 'sidebar';
// }

export function SlidebarMenu({ onClick }: { onClick: Function }) {
  return (
    <VStack>
      <Button onClick={() => onClick()} w="100%">
        Home
      </Button>
      <Button onClick={() => onClick()} w="100%">
        About
      </Button>
      <Button onClick={() => onClick()} w="100%">
        Contact
      </Button>
    </VStack>
  );
}
