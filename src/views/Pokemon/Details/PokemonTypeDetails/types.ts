export interface IGameIndices {
  game_index: number;
  generation: {
    name: string;
    url: string;
  };
}

export interface IPokemonMoves {
  name: string;
  url: string;
}

export interface IPokemonNamesBasedOnLanguage {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

export interface IDamage {
  name: string;
  url: string;
}

export interface IDamageRelation {
  double_damage_from: IDamage[];
  double_damage_to: IDamage[];
  half_damage_from: IDamage[];
  half_damage_to: IDamage[];
  no_damage_from: IDamage[];
  no_damage_to: IDamage[];
}

export interface IPastDamageRelation {
  damage_relations: IDamageRelation;
  generation: {
    name: string;
    url: string;
  };
}

export interface IPokemonListTypeChild {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface IPokemonTypeDetailsQuery {
  damage_relations: IDamageRelation;
  game_indices: IGameIndices[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  move_damage_class: {
    name: string;
    url: string;
  };
  moves: IPokemonMoves[];
  name: string;
  names: IPokemonNamesBasedOnLanguage[];
  past_damage_relations: {
    damage_relations: IDamageRelation;
    generation: {
      name: string;
      url: string;
    };
  }[];
  pokemon: IPokemonListTypeChild[];
  sprites: object;
}
