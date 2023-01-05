import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

export function ColorModeBtn() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      // _focus={{_focus: "none"}} //周りの青いアウトラインが気になる場合に消す方法
      bg="rgba(255,255,255,0.2)"
      size="sm"
      aria-label="DarkMode Switch"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} // 自分の好みでSunアイコンはreact-iconsを使用しています
      onClick={toggleColorMode}
    />
  );
}
