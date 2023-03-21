import { createStyles, Group, rem } from "@mantine/core";

const Links = () => {
  const useStyles = createStyles((theme) => ({
    group: {
      alignItems: "flex-start",
      gap: "12px",

      margin: "auto",
    },
    container: {
      marginLeft: "170px",

      [theme.fn.smallerThan("md")]: {
        margin: "auto",
      },
    },

    link: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: "none",

      color: "#A0A0A7",
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
      borderBottom: "3px solid #A0A0A7 ",
      [theme.fn.smallerThan("sm")]: {
        height: rem(42),
        display: "flex",
        alignItems: "center",
        width: "100%",
      },

      ...theme.fn.hover({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      }),
    },
  }));

  const { classes, theme } = useStyles();
  return (
    <>
      <div>
        <Group sx={{ height: "100%" }} spacing={0}>
          <a href={"/top-products"} className={classes.link}>
            All Categories
          </a>
          <a href={"/top-products"} className={classes.link}>
            Commercial property
          </a>
          <a href={"/top-products"} className={classes.link}>
            Industrial property
          </a>
          <a href={"/top-products"} className={classes.link}>
            Land property
          </a>
        </Group>
      </div>
    </>
  );
};

export default Links;
