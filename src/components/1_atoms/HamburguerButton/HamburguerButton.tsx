import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

interface IHamburguerButtonProps {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export const HamburguerButton = ({ open, setOpen }: IHamburguerButtonProps) => (
  <Button onClick={() => setOpen(!open)} backgroundColor="rgba(0,0,0,0.2)">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
      whileHover={{ scale: 1.2 }}
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1, opacity: 0 }}
        animate={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
        transition={{ duration: 2, ease: `easeInOut` }}
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </motion.svg>
  </Button>
);
