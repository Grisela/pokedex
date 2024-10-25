import { url } from "@/constant/urls";
import useFetchQuery from "@/hooks/query/useFetchQuery";
import { Badge, Box, Flex, Space, Title } from "@mantine/core";
import { IPokemonTypeListQuery } from "./types";
import { useNavigate } from "react-router-dom";

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
              <Badge
                size="lg"
                key={idx}
                m={5}
                onClick={() => navigate(`/pokemon-type-details/${idx + 1}`)}
              >
                {e.name}
              </Badge>
            );
        })}
      </Flex>
    </Box>
  );
};

export default PokemonTypeList;
