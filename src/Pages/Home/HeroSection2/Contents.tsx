import {
  createStyles,
  Badge,
  Group,
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
    // description:
    //   "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: IconGauge,
  },
  {
    title: "Search for a product",
    // description:
    //   "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconUser,
  },
  {
    title: "Search for a product",
    // description:
    //   "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconCookie,
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

    // "&::after": {
    //   content: '""',
    //   display: "block",
    //   backgroundColor: theme.fn.primaryColor(),
    //   width: rem(45),
    //   height: rem(2),
    //   marginTop: theme.spacing.sm,
    //   marginLeft: "auto",
    //   marginRight: "auto",
    // },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    backgroundColor: "black",
    color: "white",
  },

  //   cardTitle: {
  //     "&::after": {
  //       content: '""',
  //       display: "block",
  //       backgroundColor: theme.fn.primaryColor(),
  //       width: rem(45),
  //       height: rem(2),
  //       marginTop: theme.spacing.sm,
  //     },
  //   },

  btn: {
    marginTop: "20px",
    backgroundColor: "#834BFF;",
    borderRadius: "12px",
  },
  btnIcon: {
    // marginTop: "20px",
    backgroundColor: "#242434",
    borderRadius: "12px",
  },
}));

export function Contents() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Button className={classes.btnIcon}>
        <feature.icon
          //   size={rem(50)}
          stroke={2}
          //   color={theme.fn.primaryColor()}
        />
      </Button>
      <Text fz="lg" fw={500} mt="md">
        {feature.title}
      </Text>
      {/* <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text> */}
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
