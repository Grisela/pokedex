export interface IAbilitiesEffectEntries {
  effect: string;
  language: { name: string; url: string };
  short_effect: string;
}
export interface IAbilitiesFlavorTextEntries {
  flavor_text: string;
  language: { name: string; url: string };
  version_group: {
    name: string;
    url: string;
  };
}

export interface IAbilitiesNamesBasedOnLanguage {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

export interface IAbilitiesPokemonChildList {
  is_hidden: boolean;
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface IPokemonAbilitiesQuery {
  effect_changes: unknown[];
  effect_entries: IAbilitiesEffectEntries[];
  flavor_text_entries: IAbilitiesFlavorTextEntries[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  is_main_series: boolean;
  name: string;
  names: IAbilitiesNamesBasedOnLanguage[];
  pokemon: IAbilitiesPokemonChildList[];
}
