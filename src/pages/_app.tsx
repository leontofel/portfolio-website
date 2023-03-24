import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@types';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter presenceAffectsLayout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} key={router.route} />
      </ChakraProvider>
    </AnimatePresence>
  );
};
export default MyApp;
