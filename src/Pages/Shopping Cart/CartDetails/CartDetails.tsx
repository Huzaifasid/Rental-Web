import { Box, createStyles, Table, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ProductTable } from "../ProductTable/ProductTable";
import leftArrow from "../../../Assets/leftDirectArrow.png";
const CartDetails = () => {
  const useStyles = createStyles((theme) => ({
    headingSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "15px",
      marginBottom: "20px",
    },
    box: {
      display: "flex",
      gap: "10px",
    },
  }));

  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery("(max-width: 755px)");
  const span = isMobile ? 12 : 7;
  const span2 = isMobile ? 12 : 4;

  let data = [
    {
      title: "Foundation",
      author: "Isaac Asimov",
      year: 1951,
      reviews: {
        positive: 2223,
        negative: 259,
      },
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      year: 1818,
      reviews: {
        positive: 5677,
        negative: 1265,
      },
    },
    {
      title: "Solaris",
      author: "Stanislaw Lem",
      year: 1961,
      reviews: {
        positive: 3487,
        negative: 1845,
      },
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      year: 1965,
      reviews: {
        positive: 8576,
        negative: 663,
      },
    },
    {
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      year: 1969,
      reviews: {
        positive: 6631,
        negative: 993,
      },
    },
    {
      title: "A Scanner Darkly",
      author: "Philip K Dick",
      year: 1977,
      reviews: {
        positive: 8124,
        negative: 1847,
      },
    },
  ];

  return (
    <>
      <div>
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
        <Box className={classes.headingSection}>
          <Text fz={"24px"}>Shopping Cart</Text>
          <Text fz={"14px"} fw="400" color={"#102437"}>
            4 Items
          </Text>
        </Box>

        <ProductTable data={data} />
      </div>
    </>
  );
};

export default CartDetails;
