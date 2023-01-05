import { useColorMode, Button } from '@chakra-ui/react';
import React from 'react';

export function Top() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        onClick={() => {
          toggleColorMode();
        }}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>

      <main>Top</main>
    </>
  );
}
