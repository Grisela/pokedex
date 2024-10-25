import { IReducerInit } from "@/hooks/query/useFetchQuery";
import { IDetailsQueryResponse } from "./types";
import { Box, Grid, Space, Title } from "@mantine/core";

export interface IProps<D> {
  state: IReducerInit<D>;
}

const PokemonStats = (props: IProps<IDetailsQueryResponse>) => {
  const { state } = props;
  return (
    <Box w={"100%"} h={"100%"}>
      <Title>Stats</Title>
      <Space h={30} />
      {state.data?.stats.map((e, idx) => (
        <Grid key={idx}>
          <Grid.Col span={6}>{e.stat.name}</Grid.Col>
          <Grid.Col span={6}>{e.base_stat}</Grid.Col>
        </Grid>
      ))}
    </Box>
  );
};

export default PokemonStats;
