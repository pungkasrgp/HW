import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';

function BodyPage() {
  return (
    <Box>
      <Box
        color="#76B88F"
        py={13}
        px={4}
        textAlign="center"
      >
        <Flex alignItems="center" justifyContent="center" mt={4}>
          <Image src="https://static.vecteezy.com/system/resources/previews/001/192/065/non_2x/circle-logo-turbine-png.png" alt="libraries" maxW="400px" />
        </Flex>
        <Heading as="h1" size="2xl" mb={4} mt={4}>
          Welcome to libraries
        </Heading>
        <Text fontSize="xl" mb={8}>
            "easy to use, makes you comfortable"
        </Text>
      </Box>
    </Box>
  );
}

export default BodyPage;
