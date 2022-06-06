import { Box, Card, Image, Input, SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchCharacters } from "../api";
import { Character } from "../api/types";
import useDebounce from "../hooks/useDebounce";

function Debounce() {
  const [name, setName] = useState("");
  const [calls, setCalls] = useState(0);

  const debouncedValue = useDebounce(name, 500);

  const query = useQuery<{ results: Character[] }>(
    ["characters-debounce", debouncedValue],
    () => fetchCharacters(debouncedValue, setCalls)
  );

  const characters = query.data?.results || [];

  return (
    <Box>
      <Input
        size="xl"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        placeholder="search"
      />

      <h1>
        The API has been called {calls} {calls === 1 ? "time" : "times"}
      </h1>

      <p>Name: {name}</p>
      <p>debouncedValue: {debouncedValue}</p>

      <SimpleGrid cols={8}>
        {characters.map((character) => {
          return (
            <Card key={character.id}>
              <Image src={character.image} />
              {character.name}
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Debounce;
