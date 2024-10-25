import { gql } from "@apollo/client";

export const ALL_POKEMON_LIST = gql`
  query samplePokeAPIquery(
    $limit: Int
    $offset: Int
    $where: pokemon_v2_pokemon_bool_exp
  ) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: $where) {
      pokemon_v2_pokemonsprites {
        sprites
        pokemon_id
        id
      }
      name
    }
  }
`;
