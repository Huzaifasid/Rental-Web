import { Button, createStyles, Group } from "@mantine/core";

import { Grid, Col } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import card1img from "../../../Assets/card/card1img.png";
import card2img from "../../../Assets/card/card2img.png";
import card3img from "../../../Assets/card/card3img.png";
import card4img from "../../../Assets/card/card4img.png";
import card5img from "../../../Assets/card/card5img.png";
import card6img from "../../../Assets/card/card6img.png";
import card7img from "../../../Assets/card/card7img.png";
import card8img from "../../../Assets/card/card8img.png";
import { ProductCard } from "../Product Cards/ProductCard";
import { useNavigate } from "react-router";

const RecommendedProducts = () => {
  const useStyles = createStyles((theme) => ({
    group: {
      justifyContent: "space-between",

      width: "100%",
    },
    container: {
      marginTop: "50px",
      marginLeft: "170px",
      paddingRight: "180px",

      [theme.fn.smallerThan("md")]: {
        paddingLeft: "10px",
        paddingRight: "10px",
        margin: "auto",
      },
    },
    btn: {
      border: "1px solid #A0A0A7 ",
      backgroundColor: "#FFFFFF",
      color: "#0C0C1D",
    },
  }));

  const { classes } = useStyles();

  const navigate = useNavigate();
  const islap2 = useMediaQuery("(max-width: 1400px)");
  const islap = useMediaQuery("(max-width: 1100px)");
  const isTab = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 425px)");
  const isMobileS = useMediaQuery("(max-width: 320px)");

  const span = isMobileS
    ? 12
    : isMobile
    ? 10
    : isTab
    ? 5
    : islap
    ? 6
    : islap2
    ? 4
    : 3;

  let imgArray = [
    {
      img: card1img,
      id: 1,
    },
    {
      img: card2img,
      id: 2,
    },
    {
      img: card3img,
      id: 3,
    },
    {
      img: card4img,
      id: 4,
    },
  ];
  let imgArray2 = [
    {
      img: card5img,
      id: 1,
    },
    {
      img: card6img,
      id: 2,
    },
    {
      img: card7img,
      id: 3,
    },
    {
      img: card8img,
      id: 4,
    },
  ];
  let data = {
    title: "HTC Vice XR Elite Virtual Reality",
    country: "Croatia",
    description: "1920 * 1920 pixels per eye (3640 x 1920 pixels in total)",
  };
  return (
    <>
      <div className={classes.container}>
        <Group className={classes.group} position="apart" spacing="xl">
          <h1>Recommended Products</h1>

          <Button
            className={classes.btn}
            radius="md"
            onClick={() => navigate("/all-products")}
          >
            Browse all products
          </Button>
        </Group>
        <Grid>
          {imgArray.map((item) => {
            return (
              <Col m={"auto"} span={span} key={item.id}>
                <ProductCard
                  image={item.img}
                  country={data.country}
                  description={data.description}
                  title={data.title}
                />
              </Col>
            );
          })}
        </Grid>
      </div>
      <div className={classes.container}>
        <Group className={classes.group} position="apart" spacing="xl">
          <h1>Commonly Rented</h1>

          <Button
            className={classes.btn}
            radius="md"
            onClick={() => navigate("/all-products")}
          >
            Browse all products
          </Button>
        </Group>

        <Grid>
          {imgArray2.map((item) => {
            return (
              <Col m={"auto"} span={span} key={item.id}>
                <ProductCard
                  image={item.img}
                  country={data.country}
                  description={data.description}
                  title={data.title}
                />
              </Col>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default RecommendedProducts;
