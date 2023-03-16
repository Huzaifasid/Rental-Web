import { createStyles, Box, Image, Text, Grid } from "@mantine/core";
import ImageCard from "./ImageCard/ImageCard";
import desc1 from "../../Assets/productDesImg1.png";
import desc2 from "../../Assets/productDesImg2.png";
import desc3 from "../../Assets/productDesImg3.png";
import desc4 from "../../Assets/productDesImg4.png";

import DescriptionBox from "./DescriptionBox/DescriptionBox";
import AddToCart from "./Add To Cart/AddToCart";
import UnderTheHood from "./UnderHood/UnderTheHood";
import { useMediaQuery } from "@mantine/hooks";
import UserReviews from "./User Reviews/UserReviews";
import { FrequentlyAskQuestion } from "./Frequently Ask Question/FrequentlyAskQuestion";
import Recommended from "./Recommended/Recommended";

const ProductDetail = () => {
  const useStyles = createStyles((theme) => ({
    container: {
      marginLeft: "170px",
      paddingRight: "180px",

      [theme.fn.smallerThan("md")]: {
        paddingLeft: "10px",
        paddingRight: "10px",
        margin: "auto",
      },
      // [theme.fn.largerThan("md")]: {
      //   paddingLeft: "10px",
      //   paddingRight: "10px",
      //   margin: "auto",
      // },
    },
    desBox: {
      marginTop: "50px",
      display: "flex",
      width: "60%",
      justifyContent: "space-between",
      [theme.fn.smallerThan("md")]: {
        width: "100%",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      },
      // [theme.fn.largerThan("md")]: {
      //   width: "100%",
      // },
    },
    underthehood: {
      border: "1px solid gray",
      width: "60%",
      borderRadius: "16px",
      padding: "24px 24px 36px",
      backgroundColor: "white",
      marginTop: "50px",

      [theme.fn.smallerThan("md")]: {
        width: "100%",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      },
      // [theme.fn.largerThan("md")]: {
      //   width: "100%",
      // },
    },
    flexBox: {
      display: "flex",
      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
      },
    },
    userReview: {
      border: "1px solid gray",
      width: "60%",
      borderRadius: "16px",
      padding: "24px 24px 36px",
      backgroundColor: "white",
      marginTop: "50px",

      [theme.fn.smallerThan("md")]: {
        width: "100%",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      },
      // [theme.fn.largerThan("md")]: {
      //   width: "100%",
      // },
    },
    frequentlyQ: {
      border: "1px solid gray",
      width: "60%",
      borderRadius: "16px",
      padding: "24px 24px 36px",
      backgroundColor: "white",
      marginTop: "50px",

      [theme.fn.smallerThan("md")]: {
        width: "100%",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      },
      // [theme.fn.largerThan("md")]: {
      //   width: "100%",
      // },
    },
    recentlyView: {
      marginTop: "50px",
    },
  }));

  const { classes, theme } = useStyles();
  const isLap = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const span = isMobile ? 12 : isLap ? 6 : 7;
  const span2 = isMobile ? 12 : isLap ? 6 : 4;
  let descBoxArray = [
    {
      img: desc1,
      text: "Damage coverage by Rental App",
      id: 1,
    },
    {
      img: desc2,
      text: "Damage coverage by Rental App",
      id: 2,
    },
    {
      img: desc3,
      text: "Damage coverage by Rental App",
      id: 3,
    },
    {
      img: desc4,
      text: "Damage coverage by Rental App",
      id: 4,
    },
  ];
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
            <ImageCard />
          </Grid.Col>
          <Grid.Col span={span2}>
            <AddToCart />
          </Grid.Col>
        </Grid>

        <div className={classes.desBox}>
          {descBoxArray.map((item) => {
            return (
              <DescriptionBox key={item.id} img={item.img} text={item.text} />
            );
          })}
        </div>
        <div className={classes.underthehood}>
          <UnderTheHood />
        </div>
        <div className={classes.userReview}>
          <UserReviews />
        </div>
        <div className={classes.frequentlyQ}>
          <FrequentlyAskQuestion />
        </div>
        <div className={classes.recentlyView}>
          <Recommended />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
