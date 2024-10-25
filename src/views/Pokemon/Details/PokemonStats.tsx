import { IReducerInit } from "@/hooks/query/useFetchQuery";
import { IDetailsQueryResponse } from "./types";
import { Box, Grid, Text } from "@mantine/core";
import { upperFirst } from "@mantine/hooks";

export interface IProps<D> {
  state: IReducerInit<D>;
}

const PokemonStats = (props: IProps<IDetailsQueryResponse>) => {
  const { state } = props;
  return (
    <Box w={"100%"} h={"100%"}>
      {state.data?.stats.map((e, idx) => (
        <Grid key={idx}>
          <Grid.Col span={6}>
            <Text fw={"bold"}>{upperFirst(e.stat.name)}</Text>
          </Grid.Col>
          <Grid.Col span={6}>{e.base_stat}</Grid.Col>
        </Grid>
      ))}
    </Box>
  );
};

export default PokemonStats;
