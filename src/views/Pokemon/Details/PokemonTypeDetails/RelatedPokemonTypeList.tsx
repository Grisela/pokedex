import { Box, Center, Grid, Title } from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { isEmpty, uniqBy } from "lodash";
import { IPokemonTypeDetailsQuery } from "./types";
import { IReducerInit } from "@/hooks/query/useFetchQuery";
import { useNavigate } from "react-router-dom";
import CardViewComponent from "@/components/Widget/CardView";
import useDefaultFetchState from "@/hooks/state/useDefaultFetchState";
import {
  IPokemonV2PokemonGraphqlQuery,
  IPokemonV2PokemonQueryResponse,
} from "@/graphql/queries/pokemon_v2_pokemon/types";
import useSimpleLazyQuery from "@/hooks/query/useSimpleLazyQuery";
import { ALL_POKEMON_LIST } from "@/graphql/queries/pokemon_v2_pokemon";
import { useEffect } from "react";
import useIsBottomScroll from "@/hooks/general/useIsBottomScroll";

interface IProps {
  state: IReducerInit<IPokemonTypeDetailsQuery>;
}

const RelatedPokemonTypeList = (props: IProps) => {
  const navigate = useNavigate();

  const { state } = props;

  const { state: statePokemonList, dispatch: dispatchPokemonList } =
    useDefaultFetchState<IPokemonV2PokemonQueryResponse[]>({
      fetchOnLoad: true,
    });

  const [getAllPokemon, { data: pokemonData }] = useSimpleLazyQuery(
    ALL_POKEMON_LIST,
    {
      variables: {
        limit: statePokemonList.limit || 60,
        offset: statePokemonList.offset || 0,
        where: {
          pokemon_v2_pokemontypes: {
            pokemon_v2_type: { name: { _eq: state.data?.name } },
          },
        },
      },
      onCompleted: (res: IPokemonV2PokemonGraphqlQuery) => {
        const isPaginated = statePokemonList.offset !== 0;
        const currentData = statePokemonList.data || [];

        const tempData = !isPaginated
          ? res.pokemon_v2_pokemon
          : uniqBy(currentData.concat(res.pokemon_v2_pokemon), "name");

        dispatchPokemonList({
          data: tempData,
          isFetching: false,
        });
      },
      onError: (err) => {
        console.error(err);
        dispatchPokemonList({
          data: [],
          isFetching: false,
        });
      },
    }
  );

  useEffect(() => {
    if (statePokemonList.isFetching) getAllPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statePokemonList.isFetching]);

  const { isAtBottom } = useIsBottomScroll();

  useEffect(() => {
    if (
      isAtBottom &&
      !isEmpty(pokemonData?.pokemon_v2_pokemon) &&
      pokemonData?.pokemon_v2_pokemon.length === statePokemonList.limit
    ) {
      dispatchPokemonList({
        isFetching: true,
        offset: (statePokemonList.offset || 0) + (statePokemonList.limit || 60),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAtBottom]);

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
        {isEmpty(statePokemonList.data) ? (
          <Center h={"100vh"}>No Post Yet!</Center>
        ) : (
          statePokemonList.data?.map((e, idx: number) => {
            return (
              <Grid.Col
                span={{ base: 12, md: 6, lg: 4, xl: 3 }}
                key={idx}
                onClick={() => navigate(`/pokemon-details/${e.name}`)}
              >
                <CardViewComponent
                  name={e.name}
                  sprite_img={
                    e?.pokemon_v2_pokemonsprites[0].sprites.other[
                      "official-artwork"
                    ].front_default
                  }
                />
              </Grid.Col>
            );
          })
        )}
      </Grid>
    </Box>
  );
};

export default RelatedPokemonTypeList;
