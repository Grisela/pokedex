import { Card, Center, Image, Text } from "@mantine/core";

interface IProps {
  name: string;
  sprite_img: string;
}

const CardViewComponent = (props: IProps) => {
  const { name, sprite_img } = props;
  return (
    <Card shadow="sm" padding="xl" component="a" target="_blank">
      <Card.Section>
        <Image src={sprite_img} h={160} alt="No way!" />
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
