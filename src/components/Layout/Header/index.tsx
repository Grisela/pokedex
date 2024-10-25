import { Box, Space, Title } from "@mantine/core";
import BreadcrumbComponent from "@/components/Layout/Breadcrumb";
import { useNavigate } from "react-router-dom";

interface IProps {
  items: { title: string; href: string }[];
}

const HeaderComponent = (props: IProps) => {
  const navigate = useNavigate();
  const { items } = props;
  return (
    <Box py={3} px={10} onClick={() => navigate("/")}>
      <Box>
        <Title c={"yellow"} style={{ cursor: "pointer" }}>
          Pokedex
        </Title>
        <Space h={30} />
      </Box>
      <BreadcrumbComponent items={items} />
    </Box>
  );
};

export default HeaderComponent;
