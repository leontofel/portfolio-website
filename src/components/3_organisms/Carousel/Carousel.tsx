import {
  Box, Button, Flex, Grid, Image, Text,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

export interface ICarouselItem {
  label: string,
  src: string,
  description: string,
}

interface ICarouselComponentProps {
  imageArray: ICarouselItem[],
  objectFit?: boolean,
}

export const CarouselComponent = ({ imageArray, objectFit }: ICarouselComponentProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [exitX, setExitX] = useState(0);

  const handleLeftClick = () => {
    // eslint-disable-next-line no-unused-expressions
    selectedIndex === 0 ? setSelectedIndex(imageArray.length - 1) : setSelectedIndex(selectedIndex - 1);
    setExitX(200);
  };

  const handleRightClick = () => {
    // eslint-disable-next-line no-unused-expressions
    selectedIndex < imageArray.length - 1 ? setSelectedIndex(selectedIndex + 1) : setSelectedIndex(0);
    setExitX(-100);
  };

  return (
    <Grid
      placeItems="center"
      backgroundColor="brand.900"
      w="100%"
    >
      <Flex
        align="center"
        flexDir="column"
        maxW={[`100vw`, `100vw`, `100vw`, `1366px`, `1366px`]}
      >
        <Box>
          <Text
            backgroundColor="black"
            w="100%"
            py="1rem"
            textAlign="center"
            fontSize={[`1.2rem`, `1.2rem`, `1.2rem`, `2rem`, `2rem`]}
          >
            {` `}
            {imageArray[selectedIndex].label}
          </Text>

          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ x: exitX }}
            >
              <Image
                objectFit={objectFit ? `scale-down` : `cover`}
                src={imageArray[selectedIndex].src}
                alt={`${imageArray[selectedIndex].label}`}
                width="100vw"
                h="100%"
              />
            </motion.div>
          </AnimatePresence>

          <Flex
            align="center"
            justify="space-between"
            backgroundColor="black"
            h="8vh"
          >
            <Button
              onClick={handleLeftClick}
              ml="0.5rem"
              backgroundColor="rgba(0,0,0,0.8)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-caret-left"
                viewBox="0 0 16 16"
              >
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
              </svg>
            </Button>
            <Text
              mx="1rem"
              fontSize={[`1rem`, `1rem`, `1.2rem`, `1.2rem`, `1.2rem`]}
            >
              {imageArray[selectedIndex].description}
            </Text>
            <Button
              onClick={handleRightClick}
              mr="0.5rem"
              backgroundColor="rgba(0,0,0,0.8)"

            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-caret-right"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Grid>
  );
};
