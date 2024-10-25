import { Card, Center, Image, Text } from "@mantine/core";

interface IProps {
  name: string;
  sprite_img?: string;
}

const CardViewComponent = (props: IProps) => {
  const { name, sprite_img = "/pokeball.png" } = props;
  return (
    <Card shadow="sm" padding="sm" h={200} w={"100%"}>
      <Card.Section>
        <Center mt={"sm"}>
          <Image
            src={sprite_img}
            h={100}
            w={100}
            alt="No way!"
            fallbackSrc="/pokeball.png"
          />
        </Center>
      </Card.Section>

      <Center>
        <Text fw={500} size="lg" mt="md">
          {name}
        </Text>
      </Center>
    </Card>
  );
};

export default CardViewComponent;
