import { url } from "@/constant/urls";
import useFetchQueryById from "@/hooks/query/useFetchQueryById";
import { Container, Space, Title, Text } from "@mantine/core";
import { upperFirst } from "lodash";
import { useParams } from "react-router-dom";
import { IPokemonAbilitiesQuery } from "./types";
import HeaderComponent from "@/components/Layout/Header";
import FooterComponent from "@/components/Layout/Footer";
import BasicInfo from "./BasicInfo";
import RelatedPokemonAbilitiesList from "./RelatedPokemonAbilitiesList";

const Details = () => {
  const param = useParams();

  const { state, dispatch } = useFetchQueryById<IPokemonAbilitiesQuery>({
    url: url.pokemon_ability,
    byId: {
      id: param.id!,
    },
  });

  const AbilitiesShortDescription = () => {
    if (!state.data?.flavor_text_entries) return;

    const desc = state.data?.flavor_text_entries.find(
      (e) => e.language.name === "en"
    )?.flavor_text;
    if (!desc) return;

    return <Text>{desc}</Text>;
  };

  if (state.isFetching) {
    return <>Loading...</>;
  }

  return (
    <>
      <HeaderComponent
        items={[
          { title: "Home", href: "/" },
          { title: `${upperFirst(state.data?.name || "")}`, href: "" },
        ]}
      />
      <Container mt={50} size={"lg"}>
        <Title order={2}>{upperFirst(state.data?.name || "")} Abilities</Title>
        {AbilitiesShortDescription()}
        <Space h={30} />
        <BasicInfo state={state} dispatch={dispatch} />
        <Space h={30} />
        <RelatedPokemonAbilitiesList state={state} />
      </Container>
      <FooterComponent />
    </>
  );
};

export default Details;
