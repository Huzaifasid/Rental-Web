import {
  Title,
  Text,
  Container,
  createStyles,
  rem,
  Group,
} from "@mantine/core";
import { ArticleCard } from "./Card";
import img1 from "../../Assets/Product1img.png";
import img2 from "../../Assets/Product2img.png";
import img3 from "../../Assets/Product3img.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundColor: "#0C0C1D",
    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export function HowItWorks() {
  const { classes, cx } = useStyles();
  let list = {
    image: img1,
    link: "https://mantine.dev/",
    title: "Find a product & rent it",
    rating: "outstanding",
    description:
      "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: {
      name: "Bill Wormeater",
      image:
        "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
  };
  let list2 = {
    image: img2,
    link: "https://mantine.dev/",
    title: "Find a product & rent it",
    rating: "outstanding",
    description:
      "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: {
      name: "Bill Wormeater",
      image:
        "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
  };
  let list3 = {
    image: img3,
    link: "https://mantine.dev/",
    title: "Find a product & rent it",
    rating: "outstanding",
    description:
      "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: {
      name: "Bill Wormeater",
      image:
        "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Title className={classes.title}>How it works</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
        </Container>

        <Group position="center" mt={"lg"}>
          <ArticleCard
            image={list.image}
            link={list.link}
            title={list.title}
            description={list.description}
            rating={list.rating}
            author={list.author}
          />
          <ArticleCard
            image={list2.image}
            link={list2.link}
            title={list2.title}
            description={list2.description}
            rating={list2.rating}
            author={list2.author}
          />
          <ArticleCard
            image={list3.image}
            link={list3.link}
            title={list3.title}
            description={list3.description}
            rating={list3.rating}
            author={list3.author}
          />
        </Group>
      </div>
    </div>
  );
}
