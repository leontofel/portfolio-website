import { Flex, Grid, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IImageLinkProps {
  title: string,
  description?: string,
  image: string | StaticImageData,
  link: string,
}

export const ImageLink = ({
  title, description, image, link,
}: IImageLinkProps) => (
  <Grid
    placeItems="center"
    backgroundColor="brand.800"
    w="100%"
  >
    <Flex
      align="center"
      flexDir="column"
      maxW={[`100vw`, `100vw`, `100vw`, `1366px`, `1366px`]}
    >
      <Link href={link}>
        {description && (
          <Text
            backgroundColor="rgba(0,0,0,0.5)"
            position="absolute"
            mt="10rem"
            ml="4rem"
            fontSize="1.5rem"
          >
            {description}
          </Text>
        )}
        <Text
          backgroundColor="rgba(0,0,0,0.5)"
          position="absolute"
          ml="4rem"
          mt="5rem"
          fontSize="1.5rem"
        >
          {title}
        </Text>
        <Image
          width={1100}
          src={image}
          alt={title}
          height={500}
        />
      </Link>
    </Flex>
  </Grid>
);
