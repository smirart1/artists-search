import React, { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import Header from "./assets/components/Header";
import SearchBar from "./assets/components/SearchBar";
import Container from "./assets/components/Container";

function App() {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [texto, setTexto] = useState("paramore");

  const getArtists = async () => {
    const res = await fetch(
      `https://theaudiodb.com/api/v1/json/2/search.php?s=${texto}`
    );
    const data = await res.json();
    setArtists(data.artists);
    setLoading(false);
  };

  useEffect(() => {
    !!texto && getArtists();
  }, [texto]);

  useEffect(() => {}, [artists]);

  return (
    <Stack
      minH="100vh"
      alignItems="center"
      spacing="0px"
      maxWidth="1280px"
      w="100%"
      m="0 auto"
    >
      <Header />

      <SearchBar texto={texto} setTexto={setTexto} getArtists={getArtists} />
      {loading ? (
        <div>Loading...</div>
      ) : !!artists ? (
        artists.map((artists) => (
          <Container
            artists={artists}
            key={artists.strArtist}
            name={artists.strArtist}
            year={artists.intFormedYear}
            label={artists.strLabel}
            genre={artists.strGenre}
            text={artists.strBiographyEN}
            image={artists.strArtistThumb}
          />
        ))
      ) : (
        
        <div>
          <br/><br/><br/><br/><br/><br/>
          Artist not found...</div>
      )}
    </Stack>
  );
}

export default App;
