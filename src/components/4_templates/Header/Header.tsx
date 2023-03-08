import {
  Flex, Grid, Text,
} from '@chakra-ui/react';
import { css, keyframes } from '@emotion/react';
import { SideMenu } from '@molecules';
import React from 'react';

export const Header = () => {
  const typingAnimation = keyframes`
  from {
    width: 0;
  }
`;

  const blinkAnimation = keyframes`
  50% {
    border-color: transparent;
  }
`;

  return (
    <Grid
      placeItems="center"
      // backgroundColor="indigo"
      w="100%"
      position="absolute"
    >
      <Flex
        maxW={[`100vw`, `100vw`, `100vw`, `1366px`, `1366px`]}
        w="100%"
        h="10vh"
        justifyContent="space-between"
        alignItems="center"
        px="3rem"
      >
        <SideMenu />
        <Text
          css={css`
            font-family: 'Silkscreen', cursive;
            width: 10.5ch;
            animation: ${typingAnimation} 2s steps(22), ${blinkAnimation} 0.5s step-end infinite alternate;
            white-space: nowrap;
            overflow: hidden;
            border-right: 3px solid;
            font-size: 2em;
          `}
        >
          SparkInTech
        </Text>
      </Flex>
    </Grid>
  );
};
