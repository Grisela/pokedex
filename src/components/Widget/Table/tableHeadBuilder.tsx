import { Flex, Space, Title } from "@mantine/core";
import { IconArrowsSort, IconSearch } from "@tabler/icons-react";
import { tableHeadBuilderPropsType } from "./types";

const tableHeadBuilder = (props: tableHeadBuilderPropsType) => {
  const { title, withSearch, withSorter } = props;
  return (
    <Flex justify="space-between" align="center">
      <Title order={5}>{title}</Title>
      <Flex>
        {withSearch && <IconSearch size={15} />}
        <Space w="sm" />
        {withSorter && <IconArrowsSort size={15} />}
      </Flex>
    </Flex>
  );
};

export default tableHeadBuilder;
