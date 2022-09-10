import { Flex, Stack, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex justify="center" maxWidth="1280px" w="95%" position="fixed">
      <Stack
        direction=""
        h="64px"
        maxW="1280px"
        w="95%"
        borderBottomRadius="20px"
        bgColor="#111"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          marginLeft="20px"
          fontFamily="Lexend"
          fontWeight="600"
          fontSize="1.3rem"
          color="white"
        >
          Artists Search
        </Text>
      </Stack>
    </Flex>
  );
}

export default Header;
