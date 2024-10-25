import { TableData } from "@mantine/core";

export interface ISimpleTableProps {
  tableData: TableData;
  minWidth?: number;
}

export interface tableHeadBuilderPropsType {
  title: string;
  withSearch?: boolean;
  withSorter?: boolean;
}
