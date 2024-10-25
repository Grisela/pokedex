import { IReducerInit } from "@/hooks/query/useFetchQuery";
import pokeHeight from "@/utils/pokeHeight";
import pokeWeight from "@/utils/pokeWeight";
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Space,
  Text,
} from "@mantine/core";
import { IconVolume } from "@tabler/icons-react";
import {
  IDetailsQueryResponse,
  IPokemonAbilities,
  IPokemonTypes,
} from "./types";
import PokemonStats from "./PokemonStats";
import extractIdFromUrl from "@/utils/extractIdFromUrl";
import { useNavigate } from "react-router-dom";

export interface IProps<D> {
  state: IReducerInit<D>;
}

const BasicInfo = (props: IProps<IDetailsQueryResponse>) => {
  const navigate = useNavigate();

  const { state } = props;

  const handlePlayCries = (url: string) => {
    const cry = new Audio(url);
    cry.play();
  };

  const PokemonTypeBadge = (e: IPokemonTypes, idx: number) => (
    <Badge
      size="sm"
      mr={5}
      key={idx}
      onClick={() => {
        navigate(`/pokemon-type-details/${extractIdFromUrl(e.type.url)}`);
      }}
    >
      {e.type.name}
    </Badge>
  );

  const PokemonAbilitiesBadge = (e: IPokemonAbilities, idx: number) => (
    <Badge
      size="sm"
      mr={5}
      key={idx}
      onClick={() => {
        navigate(`/pokemon-ability-details/${extractIdFromUrl(e.ability.url)}`);
      }}
    >
      {e.ability.name}
    </Badge>
  );

  return (
    <Card shadow="sm" padding="xl" component="a" target="_blank">
      <Grid
        breakpoints={{
          xs: "100px",
          sm: "200px",
          md: "300px",
          lg: "600px",
          xl: "800px",
        }}
        gutter={100}
      >
        <Space h={30} />
        <Grid.Col span={{ base: 12, md: 12, lg: 7, xl: 7 }}>
          <Box>
            <Grid>
              <Grid.Col span={4}>
                <Text fw={"bold"}>Types</Text>
              </Grid.Col>
              <Grid.Col span={8}>
                <Flex>
                  {state.data?.types.map((e, idx) => PokemonTypeBadge(e, idx))}
                </Flex>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={4}>
                <Text fw={"bold"}>Base Experience</Text>
              </Grid.Col>
              <Grid.Col span={8}>{state.data?.base_experience}</Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={4}>
                <Text fw={"bold"}>Height</Text>
              </Grid.Col>
              <Grid.Col span={8}>
                {pokeHeight(state.data?.height || 0)}
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={4}>
                <Text fw={"bold"}>Weight</Text>
              </Grid.Col>
              <Grid.Col span={8}>
                {pokeWeight(state.data?.weight || 0)}
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={4}>
                <Text fw={"bold"}>Abilities</Text>
              </Grid.Col>
              <Grid.Col span={8}>
                <Flex>
                  {state.data?.abilities.map((e, idx) =>
                    PokemonAbilitiesBadge(e, idx)
                  )}
                </Flex>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={4}>
                <Text fw={"bold"}>Game Version</Text>
              </Grid.Col>
              <Grid.Col span={8}>
                <Flex wrap={"wrap"}>
                  {state.data?.game_indices.map((e, idx) => (
                    <Badge size="sm" mr={4} my={4} key={idx}>
                      {e.version.name}
                    </Badge>
                  ))}
                </Flex>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={4}>
                <Text fw={"bold"}>Cries</Text>
              </Grid.Col>
              <Grid.Col span={8}>
                <Flex>
                  <Button
                    size="compact-xs"
                    leftSection={<IconVolume size={14} />}
                    variant="default"
                    onClick={() =>
                      handlePlayCries(state.data?.cries.latest || "")
                    }
                  >
                    Latest
                  </Button>
                  <Button
                    size="compact-xs"
                    leftSection={<IconVolume size={14} />}
                    variant="default"
                    onClick={() =>
                      handlePlayCries(state.data?.cries.legacy || "")
                    }
                  >
                    Legacy
                  </Button>
                </Flex>
              </Grid.Col>
            </Grid>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 12, lg: 5, xl: 5 }}>
          <PokemonStats state={state} />
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default BasicInfo;
