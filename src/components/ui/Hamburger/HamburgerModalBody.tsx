import { Box } from '@chakra-ui/react';
import Image from 'next/image';

import JindaiCharUpperBody from '@/public/img/jindai-character-upperBody.png';
import JindaiCharArm from '@/public/img/jindai-character-upperBodyArm.png';
import PatternHead from '@/public/img/traditional-pattern-head.png';

export function HamburgerModalBody() {
  return (
    <Box w="320px" h="auto" p="10px" justifyContent="space-between" position="relative">
        <Box
          m="142px 0 12px 0"
          p="108px 8px 16px 8px"
          background="#fff"
          borderRadius="28px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          position="relative"
          zIndex="1">
          <Box position="absolute" top="0" left="0">
            <Image
              src={PatternHead.src}
              width="320"
              height="80"
              alt="和柄"
              style={{ borderRadius: '28px 28px 0 0', height: '62px' }}
            />
          </Box>
          <Box
            position="absolute"
            m="auto 0"
            w="168px"
            top="74px"
            left="50%"
            transform="translateX(-50%)"
            fontSize="20px"
            fontWeight="bold"
            fontFamily="ZenOldMincho">
            神代文字へ変換
          </Box>
        </Box>
        <Box w="100px" position="absolute" top="24px" left="50%">
          <Image
            src={JindaiCharArm.src}
            alt="神代文字キャラクターの腕"
            width="208"
            height="382"
            style={{
              position: 'absolute',
              zIndex: '2',
              transform: 'translateX(-50%)'
            }}
          />
          <Image
            src={JindaiCharUpperBody.src}
            alt="神代文字キャラクターの上半身"
            width="208"
            height="382"
            style={{
              position: 'absolute',
              zIndex: '0',
              transform: 'translateX(-50%)'
            }}
          />
        </Box>
      </Box>
  );
}
