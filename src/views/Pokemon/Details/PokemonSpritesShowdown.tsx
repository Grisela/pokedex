import { IReducerInit } from "@/hooks/query/useFetchQuery";
import { IDetailsQueryResponse } from "./types";
import { Box, Flex, Title, Image, Text, Card, Space } from "@mantine/core";

export interface IProps<D> {
  state: IReducerInit<D>;
}

const PokemonSpritesShowdown = (props: IProps<IDetailsQueryResponse>) => {
  const { state } = props;
  return (
    <>
      <Title order={2}>Pokemon Showdown</Title>
      <Space h={20} />
      <Card shadow="sm" padding="xl" component="a" target="_blank">
        <Box>
          <Box>
            <Flex wrap={"wrap"} justify={"center"}>
              {state.data?.sprites.other.showdown.front_default && (
                <Box w={200} h={150}>
                  <Image
                    src={state.data?.sprites.other.showdown.front_default}
                    w={"100%"}
                    h={"100%"}
                  />
                  <Text style={{ textAlign: "center" }}>Front Default</Text>
                </Box>
              )}
              {state.data?.sprites.other.showdown.back_default && (
                <Box w={200} h={150}>
                  <Image
                    src={state.data?.sprites.other.showdown.back_default}
                    w={"100%"}
                    h={"100%"}
                  />
                  <Text style={{ textAlign: "center" }}>Back Default</Text>
                </Box>
              )}
              {state.data?.sprites.other.showdown.front_shiny && (
                <Box w={200} h={150}>
                  <Image
                    src={state.data?.sprites.other.showdown.front_shiny}
                    w={"100%"}
                    h={"100%"}
                  />
                  <Text style={{ textAlign: "center" }}>Front Shiny</Text>
                </Box>
              )}
              {state.data?.sprites.other.showdown.back_shiny && (
                <Box w={200} h={150}>
                  <Image
                    src={state.data?.sprites.other.showdown.back_shiny}
                    w={"100%"}
                    h={"100%"}
                  />
                  <Text style={{ textAlign: "center" }}>Back Shiny</Text>
                </Box>
              )}
            </Flex>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default PokemonSpritesShowdown;
