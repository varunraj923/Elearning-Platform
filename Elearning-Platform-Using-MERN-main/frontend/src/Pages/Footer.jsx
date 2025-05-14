import React from "react";
import { Box, Flex, Image, Text, Heading, Link, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bgGradient="linear(to-r, #1a202c, #2d3748)"
      color="white"
      direction="column"
      py={12}
      px={{ base: 6, md: 16 }}
      fontFamily="Source Sans 3"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        wrap="wrap"
        gap={10}
      >
        {/* About Section */}
        <Box maxW="450px">
          <Heading as="h3" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="15px" lineHeight="1.8">
            I'm <b>Varun Raj</b>, a passionate <b>MERN Stack Developer</b> with 1 year of experience building modern full-stack applications using MongoDB, Express.js, React, and Node.js. I love crafting scalable, efficient, and engaging web experiences.
          </Text>
          <Flex align="center" mt={5}>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/mongodb.svg"
              alt="MongoDB"
              boxSize="30px"
              mx={1}
            />
            <Image
              src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
              alt="Express"
              boxSize="30px"
              mx={1}
            />
            <Image
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="React"
              boxSize="30px"
              mx={1}
            />
            <Image
              src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
              alt="Node.js"
              boxSize="30px"
              mx={1}
            />
            <Text fontSize="14px" ml={3}>
              MERN Stack Developer
            </Text>
          </Flex>
        </Box>

        {/* Contributors Section */}
        <Box textAlign={{ base: "center", md: "right" }}>
          <Heading as="h4" size="md" mb={4}>
            Contributors
          </Heading>
          <Stack spacing={1}>
            <Text
              fontSize="14px"
              _hover={{ color: "teal.300", cursor: "pointer" }}
              transition="color 0.2s"
            >
              Harsh Dhiman
            </Text>
            <Text
              fontSize="14px"
              _hover={{ color: "teal.300", cursor: "pointer" }}
              transition="color 0.2s"
            >
              Anjarul Haque
            </Text>
          </Stack>
        </Box>
      </Flex>

      {/* Bottom Footer */}
      <Flex
        mt={12}
        pt={6}
        borderTop="1px solid #4a5568"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        textAlign="center"
        fontSize="13.5px"
      >
        <Text>© {new Date().getFullYear()} Varun Raj. All rights reserved.</Text>
        <Flex align="center" mt={{ base: 3, md: 0 }}>
          <Text mr={2}>Created with Love</Text>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt="Love Icon"
            boxSize="20px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
