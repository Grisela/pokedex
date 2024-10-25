import useFetchQueryById from "@/hooks/query/useFetchQueryById";
import { url } from "@/constant/urls";
import { useParams } from "react-router-dom";
import { IDetailsQueryResponse } from "./types";
import HeaderComponent from "@/components/Layout/Header";
import { Box, Container, Space, Image, Title, Center } from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import BasicInfo from "./BasicInfo";
import TableMoves from "./TableMoves";
import PokemonSprites from "./PokemonSprites";
import FooterComponent from "@/components/Layout/Footer";

const PokemonDetails = () => {
  const param = useParams();

  const { state } = useFetchQueryById<IDetailsQueryResponse>({
    url: url.pokemon_list,
    byId: {
      id: param.id!,
    },
  });

  if (state.isFetching) {
    return <>Loading...</>;
  }

  return (
    <>
      <HeaderComponent
        items={[
          { title: "Home", href: "/" },
          { title: upperFirst(param.id || ""), href: "" },
        ]}
      />
      <Container pl={5} mt={50}>
        <Box>
          <Title>{upperFirst(state.data?.name || "")}</Title>
        </Box>
        <Center>
          <Box w={300} h={300}>
            <Image
              src={state.data?.sprites.other["official-artwork"].front_default}
              alt="sprite"
              w={"100%"}
              h={"100%"}
            />
          </Box>
        </Center>
        <Space h={50} />
        <BasicInfo state={state} />
        <Space h={50} />
        <TableMoves state={state} />
        <Space h={50} />
        <PokemonSprites state={state} />
        <FooterComponent />
      </Container>
    </>
  );
};

export default PokemonDetails;
