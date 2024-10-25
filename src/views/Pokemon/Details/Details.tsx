import useFetchQueryById from "@/hooks/query/useFetchQueryById";
import { url } from "@/constant/urls";
import { useParams } from "react-router-dom";
import { IDetailsQueryResponse } from "./types";
import HeaderComponent from "@/components/Layout/Header";
import {
  Box,
  Container,
  Space,
  Image,
  Title,
  Center,
  Switch,
} from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import BasicInfo from "./BasicInfo";
import TableMoves from "./TableMoves";
import PokemonSprites from "./PokemonSprites";
import FooterComponent from "@/components/Layout/Footer";
import PokemonSpritesShowdown from "./PokemonSpritesShowdown";
import { useState } from "react";
import ClassicLoading from "@/components/Widget/loader/ClassicLoading";
import { motion } from "framer-motion";

const PokemonDetails = () => {
  const param = useParams();

  const [isDisplayShiny, setIsDisplayShiny] = useState(false);

  const { state } = useFetchQueryById<IDetailsQueryResponse>({
    url: url.pokemon_list,
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
        initial={{ x: 100, rotate: 90 }}
        animate={{ x: 0, rotate: 0 }}
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
            { title: upperFirst(param.id || ""), href: "" },
          ]}
        />
        <Container pl={5} mt={50}>
          <Box>
            <Title>{upperFirst(state.data?.name || "")}</Title>
          </Box>

          <Center>
            <motion.div
              animate={{ y: [0, -10, 0] }} // Bounces up and down
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                display: "inline-flex",
              }}
            >
              <Box w={300} h={300}>
                <Image
                  src={
                    isDisplayShiny
                      ? state.data?.sprites.other["official-artwork"]
                          .front_shiny
                      : state.data?.sprites.other["official-artwork"]
                          .front_default
                  }
                  alt="sprite"
                  w={"100%"}
                  h={"100%"}
                />
              </Box>
            </motion.div>
          </Center>
          <Center>
            <Switch
              label="Shiny"
              checked={isDisplayShiny}
              onChange={(event) =>
                setIsDisplayShiny(event.currentTarget.checked)
              }
            />
          </Center>
          <Space h={50} />
          <BasicInfo state={state} />
          <Space h={50} />
          <TableMoves state={state} />
          <Space h={50} />
          <PokemonSprites state={state} />
          <Space h={50} />
          <PokemonSpritesShowdown state={state} />
          <FooterComponent />
        </Container>
      </motion.div>
    </>
  );
};

export default PokemonDetails;
