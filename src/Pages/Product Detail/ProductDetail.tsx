import { createStyles, Text, Grid } from "@mantine/core";
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
import rightArrow from "../../Assets/rightDirectArrow.png";
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
    },
    desBox: {
      marginTop: "50px",
      display: "flex",
      width: "60%",
      gap: "20px",
      justifyContent: "space-between",

      "@media (max-width: 1024px)": {
        gap: "20px",
        width: "63%",

        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      },
      "@media (max-width: 768px)": {
        gap: "20px",
        width: "80%",
        margin: "auto",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    underthehood: {
      border: "1px solid gray",
      width: "60%",
      borderRadius: "16px",
      padding: "24px 24px 36px",
      backgroundColor: "white",
      marginTop: "50px",

      "@media (max-width: 768px)": {
        width: "57%",
        margin: "auto",
        marginTop: "20px",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      },
      "@media (max-width: 425px)": {
        width: "90%",
        margin: "auto",
        marginTop: "20px",
      },
      "@media (max-width: 375px)": {
        width: "100%",
        margin: "auto",
        marginTop: "20px",
      },
      "@media (max-width: 320px)": {
        margin: "auto",
        marginTop: "20px",
      },
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

      "@media (max-width: 1024px)": {
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      },
      "@media (max-width: 768px)": {
        width: "57%",
        margin: "auto",
        marginTop: "40px",
      },
      "@media (max-width: 425px)": {
        width: "90%",
        margin: "auto",
        marginTop: "40px",
      },
      "@media (max-width: 375px)": {
        width: "100%",
        margin: "auto",
        marginTop: "40px",
      },
    },
    frequentlyQ: {
      border: "1px solid gray",
      width: "60%",
      borderRadius: "16px",
      padding: "24px 24px 36px",
      backgroundColor: "white",
      marginTop: "50px",
      "@media (max-width: 768px)": {
        width: "57%",
        margin: "auto",
        marginTop: "40px",
      },
      "@media (max-width: 425px)": {
        width: "90%",
        margin: "auto",
        marginTop: "40px",
      },
      "@media (max-width: 375px)": {
        width: "100%",
        margin: "auto",
        marginTop: "40px",
      },
    },
    recentlyView: {
      marginTop: "50px",
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
        <Text
          fz={"14px"}
          color="#000000"
          className={classes.box}
          transform="uppercase"
          fw="600"
        >
          All
          <img src={rightArrow} alt="" />
          Gaming & vr
          <img src={rightArrow} alt="" />
          xbox 5
        </Text>
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
