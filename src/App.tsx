import {
  Card,
  Group,
  Text,
  Title,
  Button,
  SimpleGrid,
  Box,
  List,
} from "@mantine/core";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title
        sx={(theme) => ({
          color: "white",
        })}
        mb="lg"
      >
        Debounce Vs. Throttle
      </Title>

      <Box
        sx={(theme) => ({
          maxWidth: theme.breakpoints.lg,
          margin: "0 auto",
        })}
      >
        <SimpleGrid cols={2} spacing="xl">
          <Card shadow="sm" p="lg">
            <Group position="apart">
              <Text weight={500}>
                <Title>Debounce</Title>
              </Text>
            </Group>

            <Text align="left" size="lg" style={{ lineHeight: 1.5 }}>
              Wait for a a value to finish changing before updating the
              debounced value
            </Text>
            <Text align="left" size="lg" style={{ lineHeight: 1.5 }}>
              Waits for the updates to finish before executing
            </Text>

            <Button
              component={Link}
              to="debounce"
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Go to Debounce
            </Button>
          </Card>
          <Card shadow="sm" p="lg">
            <Group position="apart">
              <Text weight={500}>
                <Title>Throttle</Title>
              </Text>
            </Group>

            <Text align="left" size="lg" style={{ lineHeight: 1.5 }}>
              Update a value, but only ones for a given period of time
            </Text>

            <Text align="left" size="lg" style={{ lineHeight: 1.5 }}>
              Executes straight away, then won't execute until the wait period
              is over
            </Text>

            <Button
              component={Link}
              to="throttle"
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Go to Throttle
            </Button>
          </Card>
        </SimpleGrid>

        <Card mt="xl" shadow="sm" p="lg">
          <Group position="apart">
            <Text weight={500}>
              <Title>Use cases</Title>
            </Text>
          </Group>

          <Text align="left" size="lg" style={{ lineHeight: 1.5 }}>
            <List size="xl">
              <List.Item>Reduce network calls when searching</List.Item>
              <List.Item>
                Listening to window or element resizing events
              </List.Item>
              <List.Item>Listing to scroll events</List.Item>
            </List>
          </Text>
        </Card>

        <Card mt="xl" shadow="sm" p="lg">
          <Group position="apart">
            <Text weight={500}>
              <Title>Two variants</Title>
            </Text>
          </Group>

          <Text align="left" size="lg" style={{ lineHeight: 1.5 }}>
            <List listStyleType="ordered" size="xl">
              <List.Item>Updating a value</List.Item>
              <List.Item>Function execution</List.Item>
            </List>
          </Text>
        </Card>
      </Box>
    </div>
  );
}

export default App;
