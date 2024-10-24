import CardViewComponent from "@/components/Widget/CardView";
import { url } from "@/constant/urls";
import useFetchQuery from "@/hooks/query/useFetchQuery";
import { Center, Grid, Image, Loader, Title } from "@mantine/core";
import { IPokemonListQuery, IPokemonListQueryResult } from "./types";
import { isEmpty, uniqBy } from "lodash";
import { useEffect } from "react";
import useIsBottomScroll from "@/hooks/general/useIsBottomScroll";

const DEFAULT_POKEMON_LIMIT = 60;

const ListComponent = () => {
  const paginatedDataHandler = (data: IPokemonListQuery) => {
    const isPaginated = state.offset !== 0;
    const currentData = state.data?.results || [];
    const results = !isPaginated
      ? data.results
      : uniqBy(currentData.concat(data.results), "name");

    return {
      ...data,
      results,
    };
  };

  const { state, dispatch } = useFetchQuery<IPokemonListQuery>({
    url: url.pokemon_list,
    limit: DEFAULT_POKEMON_LIMIT,
    fetchOnLoad: true,
    paginatedDataHandler,
  });

  const { isAtBottom } = useIsBottomScroll();

  useEffect(() => {
    if (isAtBottom && (state.data?.count || 0) > (state.offset || 0)) {
      dispatch({
        isFetching: true,
        offset: (state.offset || 0) + DEFAULT_POKEMON_LIMIT,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAtBottom]);

  return (
    <>
      <Center style={{ flexDirection: "column" }}>
        <Image mb={-80} src={"/pikadance.gif"} w={"40vw"} alt="pikadance" />
        <Title fz={"8em"}>Pokedex</Title>
      </Center>
      <Grid
        mt={50}
        type="container"
        breakpoints={{
          xs: "100px",
          sm: "200px",
          md: "300px",
          lg: "600px",
          xl: "800px",
        }}
      >
        {isEmpty(state.data?.results) ? (
          <Center h={"100vh"}>No Post Yet!</Center>
        ) : (
          state.data?.results.map((e: IPokemonListQueryResult, idx: number) => (
            <Grid.Col
              span={{ base: 12, md: 6, lg: 4, xl: 3 }}
              key={idx}
              onClick={() => console.log(e.name)}
            >
              <CardViewComponent name={e.name} />
            </Grid.Col>
          ))
        )}
      </Grid>
      {(state.data?.count || 0) > (state.offset || 0) && state.isFetching && (
        <Center mt={10}>
          <Loader />
        </Center>
      )}
    </>
  );
};

export default ListComponent;
