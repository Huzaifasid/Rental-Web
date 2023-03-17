import { Box, createStyles, Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ItemsCart from "./ItemsCart/ItemsCart";
import PaymentDetails from "./CheckoutDetails/CheckoutDetails";
import leftArrow from "../../Assets/leftDirectArrow.png";
const Checkout = () => {
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
      justifyContent: "space-evenly",
      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
      },
    },

    box: {
      display: "flex",
      gap: "10px",
    },
  }));

  const { classes, theme } = useStyles();
  const isLap = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const span = isMobile ? 12 : isLap ? 6 : 7;
  const span2 = isMobile ? 12 : isLap ? 6 : 4;
  return (
    <>
      <div className={classes.container}>
        <Box>
          <Text
            fz={"14px"}
            color="#979797"
            className={classes.box}
            transform="uppercase"
            fw="600"
          >
            <img src={leftArrow} alt="" />
            Continue Shopping
          </Text>
        </Box>
        <Text fz={"24px"} fw="600" mt={"15px"}>
          Checkout
        </Text>
        <Grid
          gutter={5}
          gutterXs="md"
          gutterMd="xl"
          gutterXl={50}
          className={classes.flexBox}
        >
          <Grid.Col span={span}>
            <PaymentDetails />
          </Grid.Col>
          <Grid.Col span={span2}>
            <ItemsCart />
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

export default Checkout;
