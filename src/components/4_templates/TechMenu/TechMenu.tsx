/* eslint-disable max-len */
import {
  Box, Flex, Grid, Text,
} from '@chakra-ui/react';
import { TechIcon } from '@molecules';
import React from 'react';

import framer from '../../../../assets/img/framer.png';
import mysql from '../../../../assets/img/mysql.png';
import nest from '../../../../assets/img/nest.png';
import node from '../../../../assets/img/node.png';
import python from '../../../../assets/img/python.png';
import react from '../../../../assets/img/react.png';
import tailwind from '../../../../assets/img/tailwind.png';
import typescript from '../../../../assets/img/typescript.png';
import vue from '../../../../assets/img/vue.png';

export const TechMenu = () => (
  <Grid
    placeItems="center"
    w="100%"
  >
    <Flex
      maxW={[`100vw`, `100vw`, `100vw`, `1364px`, `1364px`]}
      w="100%"
      minH="100vh"
      justifyContent="space-around"
      alignItems="center"
      flexDirection={[`column`, `column`, `column`, `row`, `row`]}
    >
      <Box
        width={[`100%`, `100%`, `40%`, `40%`, `40%`]}
        h={[`40vh`, `100vh`]}
        pl={[0, `3rem`]}
        textAlign={[`center`, `unset`]}
      >
        <Text
          color="black"
          marginTop="7rem"
          fontWeight="bold"
          fontSize={[`2rem`, `4rem`]}
        >
          TECH
        </Text>
        <Text
          color="black"
          fontWeight="bold"
          fontSize={[`2rem`, `4rem`]}
        >
          STACK
        </Text>
        <Text
          color="black"
          fontSize="1rem"
        >
          Como a magia acontece
        </Text>
      </Box>
      <Grid
        gridTemplateColumns={[`1fr`, `1fr 1fr 1fr`]}
        placeItems="center"
        gridGap={[`1rem`, `2rem`]}
        backgroundColor="black"
        width={[`100%`, `60%`]}
        h={[`100%`, `100vh`]}
        pr={[0, `2rem`]}
        pt={[`1rem`, `4rem`]}
      >
        <TechIcon
          alt="Typescript"
          image={typescript}
          label="Typescript"
          description="O TypeScript é uma linguagem de programação de código aberto que é uma extensão do JavaScript, desenvolvida pela Microsoft. Ela adiciona recursos como tipagem estática, classes, interfaces, e outras funcionalidades orientadas a objetos para o JavaScript, tornando-o uma opção mais robusta e escalável para o desenvolvimento de aplicativos.

            Uma das principais vantagens do TypeScript é que ele ajuda a evitar erros comuns de tipagem que podem ocorrer durante o desenvolvimento do JavaScript. Com a tipagem estática, os desenvolvedores podem detectar e corrigir erros em tempo de compilação, em vez de esperar para encontrá-los em tempo de execução."
        />
        <TechIcon
          alt="react"
          image={react}
          label="React"
          description="React é uma biblioteca JavaScript de código aberto para construir interfaces de usuário (UI). Ele é mantido pelo Facebook e uma comunidade ativa de desenvolvedores, e é usado por muitas empresas e organizações em todo o mundo.

Uma das principais vantagens do React é que ele permite que os desenvolvedores criem aplicativos de página única (SPA) complexos e dinâmicos com facilidade, usando uma abordagem baseada em componentes. Os componentes React são unidades independentes de funcionalidade que podem ser facilmente reutilizadas em diferentes partes do aplicativo, tornando o código mais modular e fácil de manter."
        />
        <TechIcon
          alt="python"
          description="Python é uma linguagem de programação de alto nível, interpretada, orientada a objetos e de propósito geral, criada por Guido van Rossum e lançada pela primeira vez em 1991. Desde então, ela se tornou uma das linguagens de programação mais populares do mundo, usada em muitas áreas, como desenvolvimento web, ciência de dados, inteligência artificial, automação, entre outras.

Uma das principais vantagens do Python é sua facilidade de uso e legibilidade de código. A sintaxe é simples e direta, o que a torna fácil de aprender e entender, mesmo para programadores iniciantes. Ela também possui uma grande comunidade de desenvolvedores e uma vasta biblioteca padrão, o que facilita o desenvolvimento de aplicativos em diversas áreas."
          image={python}
          label="Python"
        />
        <TechIcon
          alt="framer"
          description="Framer Motion é uma biblioteca de animação para React que permite criar animações fluidas e interativas em seus aplicativos React. Ele fornece um conjunto de componentes e utilitários fáceis de usar que permitem criar animações sofisticadas com facilidade.

Uma das principais vantagens do Framer Motion é sua flexibilidade. Ele oferece uma ampla gama de opções para controlar a animação, como a duração, atraso, tipo de curva de animação, bem como a capacidade de adicionar comportamentos de física, como gravidade e fricção. Além disso, o Framer Motion é altamente configurável, permitindo que você ajuste a animação para atender às necessidades do seu projeto."
          image={framer}
          label="Framer Motion"
        />
        <TechIcon
          alt="vuejs"
          description="Vue.js é um framework JavaScript de código aberto para construir interfaces de usuário (UI) e aplicativos de página única (SPA). Ele é mantido pela comunidade e é liderado pelo core team do Vue.js, que é composto por membros ativos da comunidade."
          image={vue}
          label="VueJS"
        />
        <TechIcon
          alt="nodejs"
          description="Node.js é um ambiente de tempo de execução JavaScript construído sobre o motor V8 do Google Chrome. Ele permite que os desenvolvedores usem JavaScript tanto no lado do servidor quanto no cliente, o que o torna uma ferramenta poderosa e versátil para a construção de aplicativos web e de rede.

Uma das principais vantagens do Node.js é sua capacidade de processar solicitações assíncronas de entrada e saída. Isso permite que ele lide com um grande número de conexões simultâneas com baixo consumo de recursos, tornando-o uma escolha popular para aplicativos da web de alto tráfego. Além disso, o Node.js oferece um grande conjunto de módulos e bibliotecas de código aberto para aprimorar a funcionalidade do aplicativo."
          image={node}
          label="NodeJS"
        />
        <TechIcon
          alt="tailwind"
          description="Tailwind CSS é um framework CSS de utilidade-first que fornece classes utilitárias para estilização de elementos. Ele se concentra em fornecer uma grande variedade de classes utilitárias que podem ser facilmente combinadas para criar estilos personalizados sem escrever CSS personalizado. Isso torna o desenvolvimento mais rápido e fácil, especialmente para desenvolvedores que não têm habilidades avançadas em CSS.

Além disso, o Tailwind CSS é altamente personalizável, permitindo que os desenvolvedores personalizem seu próprio conjunto de estilos com base em suas necessidades de projeto. Ele também possui uma grande comunidade ativa de desenvolvedores e mantenedores, que fornecem documentação abrangente, tutoriais e suporte para aprimorar o uso do framework."
          image={tailwind}
          label="Tailwind"
        />
        <TechIcon
          alt="Mysql"
          description="MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) open source que utiliza a linguagem SQL (Structured Query Language) para gerenciar e manipular dados. Ele é amplamente utilizado para armazenar, gerenciar e recuperar dados em aplicativos da web, aplicativos móveis e outros tipos de aplicativos.

O MySQL oferece alta escalabilidade, desempenho e confiabilidade, e é capaz de lidar com grandes volumes de dados. Ele também é altamente flexível, permitindo que os desenvolvedores escolham o melhor método de armazenamento e recuperação de dados para seus aplicativos. O MySQL suporta muitos recursos avançados, como transações ACID (Atomicity, Consistency, Isolation, Durability), replicação e backups, o que o torna uma escolha popular para aplicativos empresariais e de missão crítica."
          image={mysql}
          label="MySQL"
        />
        <TechIcon
          alt="NestJS"
          image={nest}
          label="NestJS"
          description="O NestJS é um framework para Node.js que usa a sintaxe do TypeScript e a arquitetura do Angular para desenvolver aplicativos backend escaláveis e modularizados. O NestJS é baseado em módulos, que são unidades independentes de funcionalidade que podem ser combinadas para criar aplicativos maiores e mais complexos. Ele também usa os princípios de Injeção de Dependência (IoC) e Programação Orientada a Aspectos (AOP) para aumentar a modularidade e a reutilização de código."
        />
      </Grid>
    </Flex>
  </Grid>
);
