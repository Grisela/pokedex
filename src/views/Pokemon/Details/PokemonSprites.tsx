import { IReducerInit } from "@/hooks/query/useFetchQuery";
import { IDetailsQueryResponse } from "./types";
import { Box, Flex, Title, Image, Text, Card } from "@mantine/core";

export interface IProps<D> {
  state: IReducerInit<D>;
}

const PokemonSprites = (props: IProps<IDetailsQueryResponse>) => {
  const { state } = props;
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Box>
        <Title>Pokemon Sprites</Title>
        <Box>
          <Flex wrap={"wrap"} justify={"center"}>
            <Box w={200} h={150}>
              <Image
                src={state.data?.sprites.front_default}
                w={"100%"}
                h={"100%"}
              />
              <Text style={{ textAlign: "center" }}>Front Default</Text>
            </Box>
            <Box w={200} h={150}>
              <Image
                src={state.data?.sprites.back_default}
                w={"100%"}
                h={"100%"}
              />
              <Text style={{ textAlign: "center" }}>Back Default</Text>
            </Box>
            <Box w={200} h={150}>
              <Image
                src={state.data?.sprites.front_shiny}
                w={"100%"}
                h={"100%"}
              />
              <Text style={{ textAlign: "center" }}>Front Shiny</Text>
            </Box>
            <Box w={200} h={150}>
              <Image
                src={state.data?.sprites.back_shiny}
                w={"100%"}
                h={"100%"}
              />
              <Text style={{ textAlign: "center" }}>Back Shiny</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Card>
  );
};

export default PokemonSprites;
