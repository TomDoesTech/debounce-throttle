import { Box, Card, Image, SimpleGrid, Text, Button } from "@mantine/core";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchCharacters } from "../api";
import { Character } from "../api/types";
import useThrottle from "../hooks/useThrottle";

function Throttle() {
  const [calls, setCalls] = useState(0);
  const [position, setPosition] = useState(0);

  const query = useQuery<{ results: Character[] }>(
    ["characters-throttle"],
    () => fetchCharacters("")
  );

  const characters = query.data?.results || [];

  function handleScroll() {
    setCalls((c) => c + 1);

    setPosition(
      Math.round(
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
          100
      )
    );
  }

  window.addEventListener("scroll", useThrottle(handleScroll, 1000));

  return (
    <Box>
      <Box
        sx={() => {
          return {
            position: "sticky",
            top: 0,
          };
        }}
      >
        <Text size="xl">Calls: {calls}</Text>{" "}
        <Button onClick={() => setCalls(0)}>Reset calls</Button>
        <Text size="xl">Position: {position}%</Text>
      </Box>

      <SimpleGrid
        cols={1}
        sx={(theme) => {
          return {
            maxWidth: "300px",
            margin: "0 auto",
          };
        }}
      >
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

export default Throttle;
