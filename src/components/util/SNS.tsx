import { Icon, HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaFacebook, FaLine, FaTwitter } from 'react-icons/fa';
import {
  FacebookShareButton,
  // HatenaShareButton,
  LineShareButton,
  // PocketShareButton,
  TwitterShareButton
} from 'react-share';
// import { FaFacebook, FaGetPocket, FaLine, FaTwitter } from 'react-icons/fa';
// import { SiHatenabookmark } from 'react-icons/si';

type ShareButtonsProps = {
  title: string;
  shareText: string;
  url: string;
  twitterId: string | undefined;
  hashtags: string[];
};

const SNS: FC<ShareButtonsProps> = (props) => {
  const { title, shareText, url, twitterId, hashtags } = props;
  return (
    <HStack spacing="2" mt="12px">
      <TwitterShareButton
        url={url}
        title={`${shareText} - ${title}`}
        via={twitterId}
        hashtags={hashtags}>
        <Icon
          as={FaTwitter}
          boxSize={10}
          fill="gray.400"
          _hover={{ fill: '#EB7A38' }}
          transition="all 300ms ease-in"
        />
      </TwitterShareButton>
      <FacebookShareButton url={url}>
        <Icon
          as={FaFacebook}
          boxSize={10}
          fill="gray.400"
          _hover={{ fill: '#EB7A38' }}
          transition="all 300ms ease-in"
        />
      </FacebookShareButton>
      <LineShareButton title={`${shareText} - ${title}`} url={url}>
        <Icon
          as={FaLine}
          boxSize={10}
          fill="gray.400"
          _hover={{ fill: '#EB7A38' }}
          transition="all 300ms ease-in"
        />
      </LineShareButton>
      {/* <PocketShareButton title={title} url={url}>
        <Icon as={FaGetPocket} boxSize={8} fill="gray.400" _hover={{ fill: '#d03131' }} />
      </PocketShareButton>
      <HatenaShareButton title={`${shareText} - ${title}`} url={url}>
        <Icon as={SiHatenabookmark} boxSize={8} fill="gray.400" _hover={{ fill: '#d03131' }} />
      </HatenaShareButton> */}
    </HStack>
  );
};

export default SNS;
