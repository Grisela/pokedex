import CardViewComponent from "@/components/Widget/CardView";
import { Box, Center, Grid, Image, Loader, Space, Title } from "@mantine/core";
import { isEmpty, uniqBy } from "lodash";
import { useEffect } from "react";
import useIsBottomScroll from "@/hooks/general/useIsBottomScroll";
import { useNavigate } from "react-router-dom";
import PokemonTypeList from "./PokemonTypeList";
import useSimpleLazyQuery from "@/hooks/query/useSimpleLazyQuery";
import { ALL_POKEMON_LIST } from "@/graphql/queries/pokemon_v2_pokemon";
import useDefaultFetchState from "@/hooks/state/useDefaultFetchState";
import {
  IPokemonV2PokemonGraphqlQuery,
  IPokemonV2PokemonQueryResponse,
} from "@/graphql/queries/pokemon_v2_pokemon/types";
import { motion } from "framer-motion";

const DEFAULT_POKEMON_LIMIT = 60;

const ListComponent = () => {
  const navigate = useNavigate();

  const { state: statePokemonList, dispatch: dispatchPokemonList } =
    useDefaultFetchState<IPokemonV2PokemonQueryResponse[]>({
      fetchOnLoad: true,
    });

  const [getAllPokemon, { data: pokemonData }] = useSimpleLazyQuery(
    ALL_POKEMON_LIST,
    {
      variables: {
        limit: statePokemonList.limit || DEFAULT_POKEMON_LIMIT,
        offset: statePokemonList.offset || 0,
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
        offset:
          (statePokemonList.offset || 0) +
          (statePokemonList.limit || DEFAULT_POKEMON_LIMIT),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAtBottom]);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 1,
          delay: 1,
        }}
      >
        <Center style={{ flexDirection: "column" }}>
          <Box w={250} h={250}>
            <Image
              src={"/pikadance.gif"}
              w={"100%"}
              h={"100%"}
              alt="pikadance"
            />
          </Box>
          <motion.div
            animate={{ y: [0, -5, 0], x: [0, -5, 0] }} // Bounces up and down
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              display: "inline-flex",
            }}
          >
            <Title fz={"10vw"} c={"yellow"}>
              Pokedex
            </Title>
          </motion.div>
          <Space h={50} />
          <PokemonTypeList />
        </Center>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeInOut",
          }}
        >
          <Grid
            mt={50}
            type="container"
            breakpoints={{
              xs: "300px",
              sm: "400px",
              md: "400px",
              lg: "600px",
              xl: "800px",
            }}
          >
            {isEmpty(statePokemonList.data) && !statePokemonList.isFetching ? (
              <Center h={"50vh"}>No Post Yet!</Center>
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
        </motion.div>
        {!isEmpty(pokemonData?.pokemon_v2_pokemon) &&
          pokemonData?.pokemon_v2_pokemon.length === statePokemonList.limit &&
          statePokemonList.isFetching && (
            <Center mt={10}>
              <Loader />
            </Center>
          )}
      </motion.div>
    </>
  );
};

export default ListComponent;
