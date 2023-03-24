import { Flex, Grid, Text } from '@chakra-ui/react';
import { css, keyframes } from '@emotion/react';
import { SideMenu } from '@molecules';
import React, { useEffect, useState } from 'react';

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

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);

    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  return (
    <Grid
      placeItems="center"
      w="100%"
      position="absolute"
    >
      <Flex
        maxW={[`100vw`, `100vw`, `100vw`, `1364px`, `1364px`]}
        w="100%"
        h="10vh"
        justifyContent="space-between"
        alignItems="center"
        px={[`1rem`, `1rem`, `3rem`, `3rem`, `3rem`]}
        position="fixed"
        top={0}
        backgroundColor={scroll ? `rgba(0,0,0,0.7)` : `none`}
        transition="background-color 0.5s ease-in-out"
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
          `}
          fontSize={[`1.2rem`, `1.2rem`, `2rem`, `2rem`, `2rem`]}
        >
          SparkInTech
        </Text>
      </Flex>
    </Grid>
  );
};
