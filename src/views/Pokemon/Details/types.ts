export interface IPokemonAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

export interface IGameIndices {
  game_index: number;
  version: { name: string; url: string };
}

export interface IPokemonTypes {
  slot: number;
  type: { name: string; url: string };
}

export interface IPokemonMoves {
  move: { name: string; url: string };
  version_group_details: [
    {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    },
    {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }
  ];
}

export interface IDetailsQueryResponse {
  abilities: IPokemonAbilities[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: [{ name: string; url: string }];
  game_indices: IGameIndices[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IPokemonMoves[];
  name: string;
  order: 1;
  past_abilities: unknown[];
  past_types: unknown[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string | null;
        front_shiny: string | null;
      };
      showdown: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    versions: unknown;
  };
  stats: IPokemonStats[];
  types: IPokemonTypes[];
  weight: number;
}
