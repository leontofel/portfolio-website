import {
  Box, Flex, Grid, Image, Text,
} from '@chakra-ui/react';
import { ImageLink } from '@molecules';
import { CarouselComponent, ICarouselItem } from '@organisms';
import {
  DifferentialsSection, Footer, Header, PortfolioSection, Presentation,
} from '@templates';
import Link from 'next/link';

import techLink from '../../assets/img/techlink.jpg';
import { Container } from '../components/Container';
// import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Index = () => {
  const imageArray: ICarouselItem[] = [
    {
      label: `Conectados com as tendências mundiais`,
      src: `https://cdn.pixabay.com/photo/2018/07/14/11/33/earth-3537401_960_720.jpg`,
      description: `A SparkInTech está sempre de olho em novas formas de inovar`,
    },
    {
      label: `Somos mobile!`,
      src: `https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg`,
      description: `Quer alavancar seu negócio com um aplicativo próprio? Vem com a gente!`,
    },
    {
      label: `Na SparkInTech nós acreditamos nas ideias`,
      src: `https://cdn.pixabay.com/photo/2019/09/29/22/06/light-bulb-4514505_960_720.jpg`,
      description: `Vamos tirar aquela ideia do papel?`,
    },
  ];

  return (
    <Container height="100vh" fontFamily="main" color="white">
      <Header />
      <Image
        alt="Main banner"
        src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg"
        w="100vw"
        maxH="80vh"
        objectFit="cover"
      />

      <Presentation />
      <CarouselComponent imageArray={imageArray} />
      <DifferentialsSection />
      <PortfolioSection />

      <ImageLink
        title="Como a magia acontece?"
        description="Conheça nossas tecnologias, clique aqui"
        image={techLink}
        link="/tech"
      />
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

          <Box my="3rem">
            <Link href="/contact">
              <Text position="absolute" mt="1rem" ml="3rem" fontSize="1.2rem">Está esperando o quê?</Text>
              <Text position="absolute" mt="3rem" ml="6rem" fontSize="1.2rem">Entre em contato</Text>
              <Image
                alt="Link de contato"
                src="https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_960_720.jpg"
                w="60vw"
                maxH="40vh"
                borderRadius={8}
              />
            </Link>
          </Box>
        </Flex>
      </Grid>

      <Footer />
    </Container>
  );
};

export default Index;
