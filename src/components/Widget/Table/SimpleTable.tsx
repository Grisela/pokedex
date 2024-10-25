import { Box, Table } from "@mantine/core";
import { ISimpleTableProps } from "./types";

const SimpleTable = (props: ISimpleTableProps) => {
  const { tableData, minWidth = 650 } = props;

  return (
    <Box>
      <Table.ScrollContainer minWidth={minWidth}>
        <Table data={tableData} highlightOnHover withTableBorder />
      </Table.ScrollContainer>
    </Box>
  );
};

export default SimpleTable;
