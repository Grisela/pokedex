import { unsetLink } from "@/constant/variables";
import { Anchor, Breadcrumbs, Text } from "@mantine/core";

interface IProps {
  items: { title: string; href: string }[];
}

const BreadcrumbComponent = (props: IProps) => {
  const { items } = props;

  const itemFactory = items.map((item, idx) => (
    <Anchor href={item.href} key={idx} style={unsetLink}>
      <Text c={"blue"}>{item.title}</Text>
    </Anchor>
  ));
  return <Breadcrumbs mb={30}>{itemFactory}</Breadcrumbs>;
};

export default BreadcrumbComponent;
