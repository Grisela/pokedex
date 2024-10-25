import { IReducerInit } from "@/hooks/query/useFetchQuery";
import { IDetailsQueryResponse } from "./types";
import { Box, Flex, Title, Image, Text, Card, Space } from "@mantine/core";

export interface IProps<D> {
  state: IReducerInit<D>;
}

const PokemonSprites = (props: IProps<IDetailsQueryResponse>) => {
  const { state } = props;
  return (
    <>
      <Title order={2}>Pokemon Sprites</Title>
      <Space h={20} />
      <Card shadow="sm" padding="xl" component="a" target="_blank">
        <Box>
          <Box>
            <Flex wrap={"wrap"} justify={"center"}>
              {state.data?.sprites.front_default && (
                <Box w={150} h={150} mb={50}>
                  <Image
                    src={state.data?.sprites.front_default}
                    w={"100%"}
                    h={"100%"}
                  />
                  <Text style={{ textAlign: "center" }}>Front Default</Text>
                </Box>
              )}
              {state.data?.sprites.back_default && (
                <Box w={150} h={150} mb={50}>
                  <Image
                    src={state.data?.sprites.back_default}
                    w={"100%"}
                    h={"100%"}
                  />
                  <Text style={{ textAlign: "center" }}>Back Default</Text>
                </Box>
              )}
              {state.data?.sprites.front_shiny && (
                <Box w={150} h={150} mb={50}>
                  <Image
                    src={state.data?.sprites.front_shiny}
                    w={"100%"}
                    h={"100%"}
                  />
                  <Text style={{ textAlign: "center" }}>Front Shiny</Text>
                </Box>
              )}
              {state.data?.sprites.back_shiny && (
                <Box w={150} h={150} mb={50}>
                  <Image
                    src={state.data?.sprites.back_shiny}
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

export default PokemonSprites;
