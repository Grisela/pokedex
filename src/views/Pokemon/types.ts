export interface IPokemonListQueryResult {
  name: string;
  url: string;
}

export interface IPokemonListQuery {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonListQueryResult[];
}
