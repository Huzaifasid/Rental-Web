import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  Button,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";

const mockdata = [
  {
    title: "Search for a product",
    icon: IconGauge,
    id: 1,
  },
  {
    title: "Search for a product",
    icon: IconUser,
    id: 2,
  },
  {
    title: "Search for a product",
    icon: IconCookie,
    id: 3,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    backgroundColor: "black",
    color: "white",
  },

  btn: {
    marginTop: "20px",
    backgroundColor: "#834BFF;",
    borderRadius: "12px",
  },
  btnIcon: {
    backgroundColor: "#242434",
    borderRadius: "12px",
  },
  grid: {
    "@media (max-width: 768px)": {
      display: "flex",
    },
    "@media (max-width: 425px)": {
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
    },
  },
}));

export function Contents() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.id}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Button className={classes.btnIcon}>
        <feature.icon stroke={2} />
      </Button>
      <Text fz="lg" fw={500} mt="md">
        {feature.title}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Rent anything, hassle free
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        You can rent devices from all sorts of categories at Rental App–and on
        your terms. Whether it's a new hobby or a device that's had your eye for
        a while, try this tech out for as long as you like.
      </Text>

      <SimpleGrid
        className={classes.grid}
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
      <Button className={classes.btn}>Explore all products</Button>
    </Container>
  );
}
