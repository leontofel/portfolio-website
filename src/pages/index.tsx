import {
  Box, Flex, Grid, Image, Text,
} from '@chakra-ui/react';
import { CarouselComponent, ICarouselItem } from '@organisms';
import {
  DifferentialsSection, Footer, Header, PortfolioSection, Presentation,
} from '@templates';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import contactBanner from '../../assets/img/contact-link.png';
import techBanner from '../../assets/img/tech-link.png';
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

  const router = useRouter();

  return (
    <motion.div
      key={router.route}
      initial={{ x: `-100%` }}
      animate={{ x: `0%` }}
      exit={{ x: `100%` }}
    >
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

        <Box>
          <Link href="/tech">
            <Image
              alt="Main banner"
              src={techBanner.src}
              w="100vw"
              maxH="80vh"
              objectFit="scale-down"
            />
          </Link>
        </Box>

        <Box py="3rem" backgroundColor="brand.900">
          <Link href="/contact">
            <Image
              alt="Link de contato"
              src={contactBanner.src}
              w="100vw"
              borderRadius={8}
            />
          </Link>
        </Box>

        <Footer />
      </Container>
    </motion.div>
  );
};

export default Index;
