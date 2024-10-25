import { Box, Space, Title } from "@mantine/core";
import BreadcrumbComponent from "@/components/Layout/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface IProps {
  items: { title: string; href: string }[];
}

const HeaderComponent = (props: IProps) => {
  const navigate = useNavigate();
  const { items } = props;
  return (
    <Box py={3} px={10} onClick={() => navigate("/")}>
      <Box>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: "none", // No background color
            border: "none", // No border
            cursor: "pointer", // Cursor style for hover
            padding: 0, // Remove any default padding
            display: "flex", // Flexbox for centering if needed
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title c={"yellow"} style={{ cursor: "pointer" }}>
            Pokedex
          </Title>
        </motion.button>
        <Space h={30} />
      </Box>
      <BreadcrumbComponent items={items} />
    </Box>
  );
};

export default HeaderComponent;
