import {
  Flex, Grid, Image, Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

export const Presentation = () => (
  <Grid
    placeItems="center"
    backgroundColor="brand.800"
    w="100%"
  >
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
    >
      <Flex
        align="center"
        flexDir="column"
        maxW={[`100vw`, `100vw`, `100vw`, `1366px`, `1366px`]}
        pt="2rem"
      >
        <Text
          textAlign="center"
          py={[`2rem`, `2rem`, `2rem`, `4rem`, `4rem`]}
          fontFamily="gloock"
          fontSize={[`1rem`, `2rem`, `2rem`, `2rem`, `2rem`]}
          fontWeight="bold"
        >
          Um novo conceito em tecnologia
        </Text>
        <Flex
          gap="2rem"
          pl={[0, 0, 0, `2rem`, `2rem`]}
          flexDir={[`column-reverse`, `column-reverse`, `column-reverse`, `row`, `row`]}
          alignItems="center"
        >
          <Text
            textAlign={[`center`, `center`, `center`, `justify`, `justify`]}
            maxW="50vw"
            pb="3rem"
          >
            A SparkInTech é uma empresa de tecnologia que vem revolucionando o mercado por meio de suas soluções inovadoras.
            {` `}
            <br />
            A empresa tem se destacado por seu compromisso em oferecer produtos e serviços de alta qualidade, que sejam capazes de atender às necessidades
            de seus clientes de maneira eficiente e satisfatória.
            {` `}
            <br />
            Com uma visão inovadora e uma atuação diferenciada, a SparkInTech conquista cada vez mais espaço no mercado de tecnologia, tornando-se referência no
            desenvolvimento de soluções inteligentes e criativas para os mais diversos segmentos e necessidades.
            <br />
            Com uma equipe de profissionais competentes e uma visão inovadora, a empresa está pronta para atender às suas demandas e superar suas expectativas.
          </Text>
          <Image
            src="https://cdn.pixabay.com/photo/2018/01/17/04/14/industry-3087393_960_720.jpg"
            alt="man holding a tablet"
            maxWidth={[`100vw`, `100vw`, `100vw`, `60vw`, `60vw`]}
            maxH="30vh"
            alignSelf="center"
            borderRadius={12}
          />
        </Flex>
      </Flex>
    </motion.div>
  </Grid>
);
