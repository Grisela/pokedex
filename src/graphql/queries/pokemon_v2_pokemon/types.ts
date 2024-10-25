export interface IPokemonSprites {
  other: {
    home: {
      front_shiny: string | string;
      front_female: string | string;
      front_default: string | string;
      front_shiny_female: string | string;
    };
    showdown: {
      back_shiny: string | string;
      back_female: string | string;
      front_shiny: string | string;
      back_default: string | string;
      front_female: string | string;
      front_default: string | string;
      back_shiny_female: string | string;
      front_shiny_female: string | string;
    };
    dream_world: {
      front_female: string | string;
      front_default: string | string;
    };
    "official-artwork": {
      front_shiny: string | string;
      front_default: string | string;
    };
  };
  versions: unknown;
  back_shiny: string | string;
  back_female: string | string;
  front_shiny: string | string;
  back_default: string | string;
  front_female: string | string;
  front_default: string | string;
  back_shiny_female: string | string;
  front_shiny_female: string | string;
}

export interface IPokemonV2PokemonQueryResponse {
  pokemon_v2_pokemonsprites: {
    sprites: IPokemonSprites;
    pokemon_id: string;
    id: string;
  }[];
  name: string;
}

export interface IPokemonV2PokemonGraphqlQuery {
  pokemon_v2_pokemon: IPokemonV2PokemonQueryResponse[];
}
