import { Flex, Grid, Text } from '@chakra-ui/react';
import { CarouselComponent, ICarouselItem } from '@organisms';
import Link from 'next/link';
import React from 'react';

import airbnbImage from '../../../../assets/img/airbnb.png';
import compraImage from '../../../../assets/img/compraminha.png';
import ongImage from '../../../../assets/img/team-seas.png';

export const PortfolioSection = () => {
  const imageArray: ICarouselItem[] = [
    {
      label: `Gerenciador de lista de compras`,
      src: compraImage.src,
      description: `Facilidade em qualquer lugar`,
    },
    {
      label: `Página de uma empresa de hospedagem`,
      src: airbnbImage.src,
      description: `Conectado ao mundo`,
    },
    {
      label: `Sistema de doações e página de ONG`,
      src: ongImage.src,
      description: `Sua empresa pertinho dos clientes`,
    },
  ];

  return (
    <Grid
      placeItems="center"
      backgroundColor="brand.700"
      w="100%"
      pb="5rem"
    >
      <Flex
        align="center"
        flexDir="column"
        maxW={[`100vw`, `100vw`, `100vw`, `1366px`, `1366px`]}
      >
        <Link href="/">
          <Text
            textAlign="center"
            py={[`2rem`, `2rem`, `2rem`, `4rem`, `4rem`]}
            fontFamily="gloock"
            fontSize={[`1rem`, `2rem`, `2rem`, `2rem`, `2rem`]}
            fontWeight="bold"
          >
            Nosso Trabalho
          </Text>
        </Link>
        <CarouselComponent objectFit imageArray={imageArray} />

      </Flex>
    </Grid>
  );
};
