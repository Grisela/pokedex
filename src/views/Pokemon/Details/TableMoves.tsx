import { IReducerInit } from "@/hooks/query/useFetchQuery";
import { IDetailsQueryResponse, IPokemonMoves } from "./types";
import { tableConfig as config } from "./TableConfig";
import tableHeadBuilder from "@/components/Widget/Table/tableHeadBuilder";
import { Box, TableData, Title } from "@mantine/core";
import SimpleTable from "@/components/Widget/Table/SimpleTable";
import { sortBy } from "lodash";

export interface IProps<D> {
  state: IReducerInit<D>;
}

const TableMoves = (props: IProps<IDetailsQueryResponse>) => {
  const { state } = props;

  const tableConfig = {
    head: config.head,
    body: config.body(
      sortBy(
        state.data?.moves,
        (move: IPokemonMoves) => move.version_group_details[0].level_learned_at
      ) || []
    ),
  };

  const tableData: TableData = {
    head: tableConfig.head.map((head) =>
      tableHeadBuilder({
        title: head.title,
        withSearch: head.withSearch,
        withSorter: head.withSorter,
      })
    ),
    body: tableConfig.body,
  };

  return (
    <Box>
      <Title order={2} mb={20}>
        Moves Pool
      </Title>
      <SimpleTable tableData={tableData} />
    </Box>
  );
};

export default TableMoves;
