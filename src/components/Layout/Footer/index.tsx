import { APP_VERSION } from "@/constant/variables";
import { Center, Flex, Text } from "@mantine/core";
import dayjs from "dayjs";

const FooterComponent = () => {
  return (
    <Center h={20} mt={50} mb={20}>
      <Flex direction={"column"} align={"center"}>
        <Text size="xs" c={"blue"}>
          v.{APP_VERSION}
        </Text>
        <Text size="xs">Copyright &copy; 2024 - {dayjs().format("YYYY")}</Text>
      </Flex>
    </Center>
  );
};

export default FooterComponent;
