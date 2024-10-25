import { IPokemonMoves } from "./types";

export const breadcrumbContent = [{ title: "Users", href: "/users" }];
export const toolbarAction = () => console.info("toolbar");

export const tableConfig = {
  head: [
    {
      title: "Level Learned At",
      withSearch: false,
      withSorter: false,
    },
    {
      title: "Name",
      withSearch: false,
      withSorter: false,
    },
    {
      title: "Learn Method",
      withSearch: false,
      withSorter: false,
    },
  ],
  body: (dataSource: IPokemonMoves[]) =>
    dataSource.map((data) => [
      data.version_group_details?.[0].level_learned_at,
      data.move.name,
      data.version_group_details?.[0].move_learn_method.name,
    ]),
};
