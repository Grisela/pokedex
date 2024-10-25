import { Box, Center, Grid, Title } from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { isEmpty, sortBy } from "lodash";
import { IAbilitiesPokemonChildList, IPokemonAbilitiesQuery } from "./types";
import { IReducerInit } from "@/hooks/query/useFetchQuery";
import { useNavigate } from "react-router-dom";
import CardViewComponent from "@/components/Widget/CardView";

interface IProps {
  state: IReducerInit<IPokemonAbilitiesQuery>;
}

const RelatedPokemonAbilitiesList = (props: IProps) => {
  const navigate = useNavigate();

  const { state } = props;

  return (
    <Box pl={5} mt={50}>
      <Title order={2}>
        {upperFirst(state.data?.name || "")} Type Pokemon (
        {state.data?.pokemon.length})
      </Title>
      <Grid
        mt={30}
        type="container"
        breakpoints={{
          xs: "100px",
          sm: "200px",
          md: "300px",
          lg: "600px",
          xl: "800px",
        }}
      >
        {isEmpty(state.data?.pokemon) ? (
          <Center h={"100vh"}>No Data Yet!</Center>
        ) : (
          sortBy(
            state.data?.pokemon,
            (pokemon: IAbilitiesPokemonChildList) => pokemon.pokemon.name
          ).map((e: IAbilitiesPokemonChildList, idx: number) => (
            <Grid.Col
              span={{ base: 12, md: 6, lg: 4, xl: 3 }}
              key={idx}
              onClick={() => navigate(`/pokemon-details/${e.pokemon.name}`)}
            >
              <CardViewComponent name={e.pokemon.name} />
            </Grid.Col>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default RelatedPokemonAbilitiesList;
