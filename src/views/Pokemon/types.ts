export interface IGeneralResponseResult {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface IPokemonListQueryResult {
  name: string;
  url: string;
}

export interface IPokemonTypeListQueryResult {
  name: string;
  url: string;
}

export interface IPokemonListQuery extends IGeneralResponseResult {
  results: IPokemonListQueryResult[];
}

export interface IPokemonTypeListQuery extends IGeneralResponseResult {
  results: IPokemonTypeListQueryResult[];
}
