import { url } from "@/constant/urls";
import useFetchQueryById from "@/hooks/query/useFetchQueryById";
import { Center, Container, Space, Title } from "@mantine/core";
import { upperFirst } from "lodash";
import { useParams } from "react-router-dom";
import { IPokemonTypeDetailsQuery } from "./types";
import HeaderComponent from "@/components/Layout/Header";
import FooterComponent from "@/components/Layout/Footer";
import RelatedPokemonTypeList from "./RelatedPokemonTypeList";
import BasicInfo from "./BasicInfo";
import ClassicLoading from "@/components/Widget/loader/ClassicLoading";
import { motion } from "framer-motion";

const Details = () => {
  const param = useParams();

  const { state, dispatch } = useFetchQueryById<IPokemonTypeDetailsQuery>({
    url: url.pokemon_type,
    byId: {
      id: param.id!,
    },
  });

  if (state.isFetching) {
    return (
      <Center mih={"100vh"}>
        <ClassicLoading />
      </Center>
    );
  }

  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 150,
          duration: 1,
          delay: 1,
        }}
      >
        <HeaderComponent
          items={[
            { title: "Home", href: "/" },
            { title: `${upperFirst(state.data?.name || "")} Type`, href: "" },
          ]}
        />
        <Container mt={50} size={"lg"}>
          <Title order={2}>{upperFirst(state.data?.name || "")} Type</Title>
          <Space h={30} />
          <BasicInfo state={state} dispatch={dispatch} />
          <Space h={30} />
          <RelatedPokemonTypeList state={state} />
        </Container>
        <FooterComponent />
      </motion.div>
    </>
  );
};

export default Details;
