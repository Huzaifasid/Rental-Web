import {
  Button,
  Container,
  createStyles,
  rem,
  Text,
  Title,
} from "@mantine/core";

const ContactBox = () => {
  const useStyles = createStyles((theme) => ({
    wrapper: {
      marginTop: rem(120),
      position: "relative",
      paddingTop: rem(40),
      paddingBottom: rem(130),
      backgroundColor: "#834BFF",
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
      textAlign: "center",
      width: "50%",
      margin: "auto",
      fontWeight: 700,
      fontSize: rem(56),
      letterSpacing: rem(-1),
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      color: theme.white,
      marginBottom: theme.spacing.xs,

      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [theme.fn.smallerThan("xs")]: {
        fontSize: rem(28),
        width: "auto",
        textAlign: "center",
      },
    },

    description: {
      color: theme.colors.gray[0],
      textAlign: "center",

      [theme.fn.smallerThan("xs")]: {
        fontSize: theme.fontSizes.md,
        textAlign: "left",
      },
    },

    emailBox: {
      padding: "10px 25px",
      color: "white",
      background: "#9768FF",
      borderRadius: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  }));
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          With Rental anyone can deploy and find what you need
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          </Text>
        </Container>
        <Container size={640} mt="20px">
          <div className={classes.emailBox}>
            <Text>Email Address</Text>
            <Button variant="default" color="gray" radius="xl">
              Get Started
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactBox;
