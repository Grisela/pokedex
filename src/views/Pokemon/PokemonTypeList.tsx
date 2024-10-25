import { url } from "@/constant/urls";
import useFetchQuery from "@/hooks/query/useFetchQuery";
import { Badge, Box, Flex, Space, Title } from "@mantine/core";
import { IPokemonTypeListQuery } from "./types";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PokemonTypeList = () => {
  const navigate = useNavigate();

  const { state } = useFetchQuery<IPokemonTypeListQuery>({
    url: url.pokemon_type,
    limit: 20,
    fetchOnLoad: true,
  });

  return (
    <Box>
      <Title>Types</Title>
      <Space h={30} />
      <Flex wrap={"wrap"} justify={"center"}>
        {(state.data?.results || []).map((e, idx) => {
          if (e.name !== "unknown")
            return (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={idx}
              >
                <Badge
                  size="lg"
                  m={5}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/pokemon-type-details/${idx + 1}`)}
                >
                  {e.name}
                </Badge>
              </motion.div>
            );
        })}
      </Flex>
    </Box>
  );
};

export default PokemonTypeList;
