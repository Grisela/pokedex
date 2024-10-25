import { IReducerInit } from "@/hooks/query/useFetchQuery";
import { IPokemonAbilitiesQuery } from "./types";
import { Card, Grid, Text } from "@mantine/core";

interface IProps {
  state: IReducerInit<IPokemonAbilitiesQuery>;
  dispatch: (args: IReducerInit<IPokemonAbilitiesQuery>) => void;
}

const BasicInfo = (props: IProps) => {
  const { state } = props;

  const AbilitiesDescription = () => {
    if (!state.data?.effect_entries) return;

    const desc = state.data?.effect_entries.find(
      (e) => e.language.name === "en"
    )?.effect;
    if (!desc) return;

    return <Text>{desc}</Text>;
  };

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
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col span={{ base: 4, md: 2, lg: 2, xl: 2 }}>
                Generation
              </Grid.Col>
              <Grid.Col span={{ base: 8, md: 10, lg: 10, xl: 10 }}>
                {state.data?.generation.name}
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={{ base: 4, md: 2, lg: 2, xl: 2 }}>
                Description
              </Grid.Col>
              <Grid.Col span={{ base: 8, md: 10, lg: 10, xl: 10 }}>
                {AbilitiesDescription()}
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
};

export default BasicInfo;
