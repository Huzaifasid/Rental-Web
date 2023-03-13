import {
  Title,
  Text,
  Container,
  Button,
  Flex,
  Progress,
  Overlay,
  createStyles,
  rem,
  Group,
  Col,
  Grid,
} from "@mantine/core";

import {
  IconArrowLeft,
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconArrowRight,
} from "@tabler/icons-react";
// import { ArticleCard } from "./Card";
import img1 from "../../../Assets/Product1img.png";
import img2 from "../../../Assets/Product2img.png";
import img3 from "../../../Assets/Product3img.png";
import { CommentSection } from "./CommentSection";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(100),
    paddingBottom: rem(130),
    backgroundColor: "#0C0C1D",
    marginTop: "100px",
    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
      paddingLeft: rem(10),
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
  txtWidth: {
    width: "30%",
    fontSize: "48px",

    [theme.fn.smallerThan("md")]: {
      width: "100%",
      fontSize: "16px",
    },
  },
  txtWidth2: {
    width: "30%",
    fontSize: "20px",

    [theme.fn.smallerThan("md")]: {
      width: "100%",
      fontSize: "14px",
    },
  },
  span: {
    color: "#FFFFFF",
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

export function CustumerReview() {
  const { classes, cx } = useStyles();
  let commentData = {
    postedAt: "10 minutes ago",
    body: "<p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>",
    author: {
      name: "Olivia Ryhe",
      image:
        "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    },
  };

  return (
    <>
      <div className={classes.wrapper}>
        <Group position="center" spacing="xl">
          <Text color={"white"} fw={"bold"} className={classes.txtWidth}>
            What our Customer Says About Rental App
          </Text>
          <Text
            color={"#A0A0A7"}
            fz="20px"
            fw={"lighter"}
            className={classes.txtWidth2}
          >
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>

          <Flex
            mih={50}
            gap="xs"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Button color="gray" radius="130px" size="xs">
              <IconArrowLeft />
            </Button>
            <span className={classes.span}>1/3</span>

            <Button color="violet" radius="130px" size="xs">
              <IconArrowRight />
            </Button>
          </Flex>
        </Group>
        {/* width: 481px; */}
        <Flex
          mih={50}
          gap="lg"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
          mt={"50px"}
        >
          <CommentSection
            postedAt={commentData.postedAt}
            author={commentData.author}
            body={commentData.body}
          />
          <CommentSection
            postedAt={commentData.postedAt}
            author={commentData.author}
            body={commentData.body}
          />
          <CommentSection
            postedAt={commentData.postedAt}
            author={commentData.author}
            body={commentData.body}
          />
        </Flex>
        <Group position="center" spacing="xl" mt={"60px"}>
          <Progress w={"20%"} color="grape" value={30} bg="white" />
        </Group>
      </div>
    </>
  );
}
