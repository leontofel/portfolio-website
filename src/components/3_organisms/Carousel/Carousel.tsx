import {
  Box, Button, Flex, Grid, Image, Text,
} from '@chakra-ui/react';
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

  const handleLeftClick = () => {
    // eslint-disable-next-line no-unused-expressions
    selectedIndex === 0 ? setSelectedIndex(imageArray.length - 1) : setSelectedIndex(selectedIndex - 1);
  };

  const handleRightClick = () => {
    // eslint-disable-next-line no-unused-expressions
    selectedIndex < imageArray.length - 1 ? setSelectedIndex(selectedIndex + 1) : setSelectedIndex(0);
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
            backgroundColor="rgba(0,0,0,0.5)"
            w="100%"
            position="absolute"
            pt="2rem"
            pl="4rem"
            fontSize="2rem"
          >
            {` `}
            {imageArray[selectedIndex].label}
          </Text>

          <Image
            objectFit={objectFit ? `scale-down` : `cover`}
            src={imageArray[selectedIndex].src}
            alt={`${imageArray[selectedIndex].label}`}
            width="100vw"
            h="60vh"
          />
          <Flex
            position="relative"
            top={-20}
            mb={-20}
            align="center"
            justify="space-between"
            backgroundColor="rgba(0,0,0,0.5)"
            h="8vh"
          >
            <Button
              onClick={handleLeftClick}
              ml="1rem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-left"
                viewBox="0 0 16 16"
              >
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
              </svg>
            </Button>
            <Text
              mx="1rem"
              fontSize="1.2rem"
            >
              {` `}
              {imageArray[selectedIndex].description}
            </Text>
            <Button
              onClick={handleRightClick}
              mr="1rem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
