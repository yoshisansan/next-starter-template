import {
  useDisclosure,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex
} from '@chakra-ui/react';

import { HamburgerLine } from '@/components/ui/Hamburger/HamburgerIcon';
import { HamburgerModalBody } from '@/components/ui/Hamburger/HamburgerModalBody';

export function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="24px" h="32px" m="0 8px" cursor="pointer" position="relative">
      <HamburgerLine onClick={onOpen} isOpenBool={isOpen} />
      <Modal onClose={onClose} size="lg" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent m="8px">
          <ModalHeader>Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex as="button" onClick={onClose} justify="center" m="0 auto">
              <HamburgerModalBody />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>閉じる</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
