import { IReducerInit } from "@/hooks/query/useFetchQuery";
import { IDamage, IPokemonTypeDetailsQuery } from "./types";
import { Badge, Card, Grid, Text } from "@mantine/core";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import extractIdFromUrl from "@/utils/extractIdFromUrl";

interface IProps {
  state: IReducerInit<IPokemonTypeDetailsQuery>;
  dispatch: (args: IReducerInit<IPokemonTypeDetailsQuery>) => void;
}

const BasicInfo = (props: IProps) => {
  const { state, dispatch } = props;
  const navigate = useNavigate();

  const NoneComponent = <Text ml={3}>None</Text>;

  const PokemonTypeBadge = (e: IDamage, idx: number) => (
    <Badge
      m={3}
      size="sm"
      key={idx}
      onClick={() => {
        navigate(`/pokemon-type-details/${extractIdFromUrl(e.url)}`);
        dispatch({ isFetching: true });
      }}
    >
      {e.name}
    </Badge>
  );

  return (
    <>
      <Card shadow="sm" padding="xl">
        <Grid
          breakpoints={{
            xs: "100px",
            sm: "200px",
            md: "300px",
            lg: "600px",
            xl: "800px",
          }}
        >
          <Grid.Col span={{ base: 12, md: 12, lg: 5, xl: 5 }}>
            <Grid>
              <Grid.Col span={6}>
                <Text fw={"bold"}>Generation</Text>
              </Grid.Col>
              <Grid.Col span={6}>{state.data?.generation.name}</Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={6}>
                <Text fw={"bold"}>Move Damage Class</Text>
              </Grid.Col>
              <Grid.Col span={6}>{state.data?.move_damage_class.name}</Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 12, lg: 7, xl: 7 }}>
            <Grid>
              <Grid.Col span={5}>
                <Text fw={"bold"}>Double Damage From</Text>
              </Grid.Col>
              <Grid.Col span={7}>
                {isEmpty(state.data?.damage_relations.double_damage_from)
                  ? NoneComponent
                  : state.data?.damage_relations.double_damage_from.map(
                      (e, idx) => PokemonTypeBadge(e, idx)
                    )}
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={5}>
                <Text fw={"bold"}>Double Damage To</Text>
              </Grid.Col>
              <Grid.Col span={7}>
                {isEmpty(state.data?.damage_relations.double_damage_to)
                  ? NoneComponent
                  : state.data?.damage_relations.double_damage_to.map(
                      (e, idx) => PokemonTypeBadge(e, idx)
                    )}
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={5}>
                <Text fw={"bold"}>Half Damage From</Text>
              </Grid.Col>
              <Grid.Col span={7}>
                {isEmpty(state.data?.damage_relations.half_damage_from)
                  ? NoneComponent
                  : state.data?.damage_relations.half_damage_from.map(
                      (e, idx) => PokemonTypeBadge(e, idx)
                    )}
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={5}>
                <Text fw={"bold"}>Half Damage From</Text>
              </Grid.Col>
              <Grid.Col span={7}>
                {isEmpty(state.data?.damage_relations.half_damage_to)
                  ? NoneComponent
                  : state.data?.damage_relations.half_damage_to.map((e, idx) =>
                      PokemonTypeBadge(e, idx)
                    )}
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={5}>
                <Text fw={"bold"}>No Damage From</Text>
              </Grid.Col>
              <Grid.Col span={7}>
                {isEmpty(state.data?.damage_relations.no_damage_from)
                  ? NoneComponent
                  : state.data?.damage_relations.no_damage_from.map((e, idx) =>
                      PokemonTypeBadge(e, idx)
                    )}
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={5}>
                <Text fw={"bold"}>No Damage To</Text>
              </Grid.Col>
              <Grid.Col span={7}>
                {isEmpty(state.data?.damage_relations.no_damage_to)
                  ? NoneComponent
                  : state.data?.damage_relations.no_damage_to.map((e, idx) =>
                      PokemonTypeBadge(e, idx)
                    )}
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
};

export default BasicInfo;
