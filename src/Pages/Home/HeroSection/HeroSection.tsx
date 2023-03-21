import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  rem,
} from "@mantine/core";

import image1 from "../../../Assets/home/herosectionhome1.png";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },

    span: {
      color: "#834BFF",
    },
  },

  control: {
    backgroundColor: "#834BFF",
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },
  control2: {
    backgroundColor: "white",
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function HeroSectionHome() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Experience everything, your way,
              <span> at one place</span>
            </Title>
            <Text color="dimmed" mt="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Explore Products
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control2}
              >
                Learn More
              </Button>
            </Group>
          </div>
          <Image src={image1} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
