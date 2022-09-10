import React from "react";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

let SearchBar = ({ texto, setTexto, getArtists }) => {
  const handleInputChange = ({ target }) => {
    setTexto(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getArtists();
  };
  return (
    <Flex position='fixed'>
      <form onSubmit={handleSubmit}>
        <Input
          value={texto}
          onChange={handleInputChange}
          type="text"
          fontSize="sm"
          placeholder="Search Artist"
          bg="#E6E6E6"
          mt="85px"
          w="200px"
          mb="30px"
        />
        <IconButton
          type="submit"
          ml="5px"
          bgColor="black"
          icon={<FaSearch color="white" />}
        />
      </form>
    </Flex>
  );
};

export default SearchBar;
