import { ChakraProvider } from '@chakra-ui/react';
import { CustomTheme } from '@/components/util/chakraGlobalSettings';
import type { AppProps } from 'next/app';
import { usePageView } from '@/components/Hooks/usePageView';
import { Toaster } from 'react-hot-toast';
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <ChakraProvider theme={CustomTheme}>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
