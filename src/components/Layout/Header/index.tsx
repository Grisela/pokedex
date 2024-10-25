import { Box, Space, Title } from "@mantine/core";
import BreadcrumbComponent from "@/components/Layout/Breadcrumb";

interface IProps {
  items: { title: string; href: string }[];
}

const HeaderComponent = (props: IProps) => {
  const { items } = props;
  return (
    <Box py={3} px={10}>
      <Box>
        <Title>Pokedex</Title>
        <Space h={30} />
      </Box>
      <BreadcrumbComponent items={items} />
    </Box>
  );
};

export default HeaderComponent;
