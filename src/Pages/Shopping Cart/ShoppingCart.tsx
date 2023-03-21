import { createStyles, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

const ShoppingCart = () => {
  const useStyles = createStyles((theme) => ({
    container: {
      marginLeft: "170px",
      paddingRight: "180px",

      [theme.fn.smallerThan("md")]: {
        paddingLeft: "10px",
        paddingRight: "10px",
        margin: "auto",
      },
    },

    flexBox: {
      display: "flex",
      alignItems: "center",
      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
      },
    },
  }));

  const { classes } = useStyles();
  const isLap = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const span = isMobile ? 12 : isLap ? 6 : 7;
  const span2 = isMobile ? 12 : isLap ? 6 : 4;

  return (
    <>
      <div className={classes.container}>
        <Grid
          gutter={5}
          gutterXs="md"
          gutterMd="xl"
          gutterXl={50}
          className={classes.flexBox}
        >
          <Grid.Col span={span}>
            <CartDetails />
          </Grid.Col>
          <Grid.Col span={span2}>
            <Checkout />
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

export default ShoppingCart;
