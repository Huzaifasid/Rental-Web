import { Container, createStyles, Image, rem } from "@mantine/core";

import img from "../../../Assets/home/herosectionhome2.png";
import { Contents } from "./Contents";

const HeroSection2 = () => {
  const useStyles = createStyles((theme) => ({
    image: {
      width: "50%",
      flex: 1,
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
    group: {},

    inner: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },

    content: {
      maxWidth: rem(530),
      marginRight: `calc(${theme.spacing.xl} * 3)`,

      [theme.fn.smallerThan("md")]: {
        maxWidth: "100%",
        marginRight: 0,
      },
    },
  }));
  const { classes } = useStyles();
  return (
    <>
      <div>
        <Container>
          <div className={classes.inner}>
            <Image width={300} src={img} className={classes.image} />
            <div className={classes.content}>
              <Contents />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeroSection2;
