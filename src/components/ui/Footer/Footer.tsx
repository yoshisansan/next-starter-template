import { Box, Flex } from '@chakra-ui/react';

export function Footer() {
  return <Flex
    w="100%"
    h="220px"
    p="0 18px"
    background="brand.accent"
    justifyContent="space-between"
    alignItems="center"
    position="relative"
    zIndex="1"
  >
    <Box color="#fff">
      神代文字変換メーカー
      <Box as="span" color="#fff">
        ©️
      </Box>
      神仏PJ 2022-
    </Box>
  </Flex>
}
