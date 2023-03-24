import { Footer, Header } from '@templates';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

import { Container } from '../components/Container';

const Technologies = () => {
  const router = useRouter();

  return (
    <motion.div
      key={router.route}
      initial={{ x: `100%` }}
      animate={{ x: `0%` }}
      exit={{ x: `100%` }}
    >

      <Container height="100vh">
        <Header />
        <Footer />
      </Container>
    </motion.div>
  );
};

export default Technologies;
