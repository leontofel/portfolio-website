import {
  Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface ITechItemModal {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    title: string,
    description: string,
    image: StaticImageData,
}

const TechItemModal = ({
  open, setOpen, description, image, title,
}: ITechItemModal) => {
  const onClose = () => setOpen(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: `100%` }}
        animate={{ opacity: 1, x: `0%` }}
        transition={{ duration: 7 }}
        exit={{ opacity: 0 }}
      >

        <Modal
          isOpen={open}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection="column" align="center" justify="center" gap="2rem">

                <Image alt={title} src={image} width={50} height={50} />
                <Text textAlign="justify">{description}</Text>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Fechar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </motion.div>
    </AnimatePresence>
  );
};

interface ITechIcons {
    image: StaticImageData,
    alt: string,
    label: string,
    description: string,
}

export const TechIcon = ({
  alt, image, label, description,
}: ITechIcons) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.5 }}
    >
      <Flex flexDir="column" alignItems="center" justifyContent="center" marginTop="5rem" w="200px" h="200px" onClick={() => setOpen(true)} _hover={{ cursor: `pointer` }} overflow="hidden">
        <Image
          alt={alt}
          src={image}
          width={150}
          height={150}
        />
        <Text marginTop="1rem" textAlign="center">{label}</Text>
      </Flex>
      <TechItemModal open={open} setOpen={setOpen} description={description} title={label} image={image} />
    </motion.div>
  );
};
