import { Box } from '@chakra-ui/react';
import { Footer, Header, TechMenu } from '@templates';
import { motion } from 'framer-motion';
import React from 'react';

const Technologies = () => (
  <Box color="white">
    <motion.main
      initial={{ x: `100%` }}
      animate={{ x: `0%` }}
      exit={{ x: `100%` }}
    >
      <Header />
      <TechMenu />
      <Footer />
    </motion.main>
  </Box>
);

export default Technologies;
