import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FcHome,
  FcReading,
  FcMusic,
  FcContacts,
  FcCollaboration,
  FcVideoFile,
  FcDonate,
  FcIdea
} from 'react-icons/fc';

export function SidebarList() {
  const { pathname } = useRouter();
  const lists = [
    {
      icon: <FcHome size="24px" />,
      name: 'HOME',
      desc: 'ホーム画面へ行く',
      route: '/'
    },
    {
      icon: <FcContacts size="24px" />,
      name: '論蔵(思想体系など)',
      desc: '巴(Abhidhamma)のページ',
      route: '/theory'
    },
    {
      icon: <FcReading size="24px" />,
      name: '電子書籍',
      desc: '配布されている書籍を読む',
      route: '/ebook'
    },
    {
      icon: <FcMusic size="24px" />,
      name: '法話資料',
      desc: '法話を聴く・読む',
      route: '/talk'
    },
    {
      icon: <FcVideoFile size="24px" />,
      name: '動画資料',
      desc: '動画で法話などを聴く・読む',
      route: '/video'
    },
    {
      icon: <FcCollaboration size="24px" />,
      name: 'お問合せ',
      desc: 'ご提案・質問など',
      route: '/question'
    },
    {
      icon: <FcDonate size="24px" />,
      name: 'ご協力者の募集',
      desc: '翻訳や資料ご提供など',
      route: '/donte'
    },
    {
      icon: <FcIdea size="24px" />,
      name: 'お役立ちリンク',
      desc: '便利なサイト紹介',
      route: '/useful'
    }
  ];
  return (
    <Box
      w="100%"
      h="80px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      zIndex="1">
      {lists.map((list) => (
          <Link href="/" key={list.name}>
            <Box h="100%" alignItems="center" borderBottom="2px solid #e5d0d4">
              <Flex
                h="92%"
                m="4% 0"
                borderRadius="12px"
                lineHeight="100%"
                align="center"
                p="0 12px"
                bg={pathname === list.route ? 'brand.softPurple' : ''}
                _hover={{
                  background: 'brand.softPurple'
                }}
                transition="all 400ms ease-in">
                <Box mr="12px">{list.icon}</Box>
                <Box>
                  <Text>{list.name}</Text>
                  <Text mt="4px" fontSize="12px">
                    {list.desc}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Link>
        ))}
    </Box>
  );
}
