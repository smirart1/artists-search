import { Flex, Stack, Text, Box, Image, Heading } from "@chakra-ui/react";

function Container(props) {
  return (
    <Stack
      marginBottom="50px"
      direction={{ base: "column", md: "row" }}
      w={{ md: "80%", base: "407px" }}
      h={{ md: "407px", base: "750px" }}
      borderRadius="22px"
      boxShadow="5px 5px 15px 0px gray"
      position='fixed'
      top='150px'
    >
      <Box
        w={{ md: "70%", base: "100%" }}
        h={{ md: "100%", base: "25%" }}
        bgColor={{ md: "white", base: "black" }}
        borderLeftRadius={{ md: "22px", base: "0px" }}
        // borderTopRadius={{ md: "0pxpx", base: "22px" }}
      >
        <Flex direction="column" p="20px">
          <Box display={{ md: "block", base: "none" }}>
            <Heading
              fontFamily="Lexend"
              fontWeight="600"
              color={{ md: "black", base: "white" }}
              fontSize={{ lg: "2.5rem", md: "2.2rem", base: "2rem" }}
            >
              {props.name}
            </Heading>

            <Flex mt="15px">
              <Text fontFamily="Lexend" fontSize="1.3rem">
                Formed in:
              </Text>
              <Text ml="10px" mt="5px" fontFamily="Lexend" fontSize="1rem">
                {props.year}
              </Text>
            </Flex>

            <Flex mt="5px">
              <Text fontFamily="Lexend" fontSize="1.3rem">
                Label:
              </Text>
              <Text ml="10px" mt="5px" fontFamily="Lexend" fontSize="1rem">
                {props.label}
              </Text>
            </Flex>
            <Flex mt="5px">
              <Text fontFamily="Lexend" fontSize="1.3rem">
                Genre:
              </Text>
              <Text ml="10px" mt="5px" fontFamily="Lexend" fontSize="1rem">
                {props.genre}
              </Text>
            </Flex>
            <Flex mt="5px">
              <Text fontFamily="Lexend" fontSize="1.3rem">
                Biography:
              </Text>
            </Flex>
            <Flex
              mt="5px"
              bgColor="white"
              h="150px"
              w={{ xl: "90%", lg: "81%", md: "75%" }}
              p="5px"
              overflowY="scroll"
              boxShadow="3px 3px 10px 0px gray"
            >
              <Text fontFamily="Lexend" fontSize="1rem">
                {props.text}
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Flex
          display={{ md: "none", base: "flex" }}
          w="100%"
          h="100%"
          position="relative"
          justifyContent="center"
        >
          <Heading
            position="absolute"
            top="-20px"
            fontFamily="Lexend"
            fontWeight="600"
            color="white"
            fontSize="1.8rem"
          >
            {props.name}
          </Heading>
          <Image
            position="absolute"
            bottom="-70px"
            src={props.image}
            w="80%"
            maxW="220px"
            borderRadius="40px"
          />
        </Flex>
      </Box>

      <Box
        bgColor={{ md: "black", base: "white" }}
        w={{ md: "30%", base: "100%" }}
        h={{ md: "100%", base: "75%" }}
        borderRightRadius={{ md: "22px", base: "0px" }}
        // borderTopRadius={{ md: "0pxpx", base: "22px" }}
      >
        <Flex direction="column" p="20px">
          <Box display={{ md: "none", base: "block" }}>
            <Flex mt="100px" justifyContent="center">
              <Text fontFamily="Lexend" fontSize="1.3rem">
                Formed in:
              </Text>
              <Text ml="10px" mt="5px" fontFamily="Lexend" fontSize="1rem">
                {props.year}
              </Text>
            </Flex>

            <Flex mt="5px" justifyContent="center">
              <Text fontFamily="Lexend" fontSize="1.3rem">
                Label:
              </Text>
              <Text ml="10px" mt="5px" fontFamily="Lexend" fontSize="1rem">
                {props.label}
              </Text>
            </Flex>
            <Flex mt="5px" justifyContent="center">
              <Text fontFamily="Lexend" fontSize="1.3rem">
                Genre:
              </Text>
              <Text ml="10px" mt="5px" fontFamily="Lexend" fontSize="1rem">
                {props.genre}
              </Text>
            </Flex>
            <Flex mt="5px" justifyContent="center">
              <Text fontFamily="Lexend" fontSize="1.3rem">
                Biography:
              </Text>
            </Flex>
            <Flex
              mt="5px"
              bgColor="white"
              h="250px"
              w={{ xl: "90%", lg: "81%", md: "75%" }}
              p="5px"
              overflowY="scroll"
              boxShadow="3px 3px 10px 0px gray"
              justifyContent="center"
            >
              <Text fontFamily="Lexend" fontSize="1rem">
                {props.text}
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Flex w="100%" h="100%" position="relative">
          <Image
            display={{ md: "block", base: "none" }}
            position="absolute"
            right="30%"
            bottom="120px"
            src={props.image}
            w="125%"
            maxW="280px"
            borderRadius="40px"
          />
        </Flex>
      </Box>
    </Stack>
  );
}

export default Container;
