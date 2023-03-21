import {
  Button,
  createStyles,
  Flex,
  Group,
  Progress,
  Text,
} from "@mantine/core";

import Links from "./Links/Links";
import { ProductCard } from "./Product Cards/ProductCard";
import { Grid, Col } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import card1img from "../../Assets/card/card1img.png";
import card2img from "../../Assets/card/card2img.png";
import card3img from "../../Assets/card/card3img.png";
import card4img from "../../Assets/card/card4img.png";
import card5img from "../../Assets/card/card5img.png";
import card6img from "../../Assets/card/card6img.png";
import card7img from "../../Assets/card/card7img.png";
import card8img from "../../Assets/card/card8img.png";
import { CustumerReview } from "./Custumer Review Section/CustumerReview";
import RecommendedProducts from "./Recommended Products/Recommended";
import { TopRented } from "./TopRented/TopRented";
import RentedImg1 from "../../Assets/home/TopRented1.png";
import RentedImg2 from "../../Assets/home/TopRented2.png";
import RentedImg3 from "../../Assets/home/TopRented3.png";
import RentedImg4 from "../../Assets/home/TopRented4.png";
import { useNavigate } from "react-router";

const TopProducts = () => {
  const useStyles = createStyles((theme) => ({
    group: {
      justifyContent: "space-between",
      width: "100%",
    },
    container: {
      marginLeft: "170px",
      paddingRight: "180px",

      [theme.fn.smallerThan("md")]: {
        paddingLeft: "10px",
        paddingRight: "10px",
        margin: "auto",
      },
    },
    container2: {
      marginLeft: "170px",
      marginTop: "60px",
      width: "81.5%",
      padding: "20px",
      backgroundColor: "#D9D9D9",
      [theme.fn.smallerThan("md")]: {
        paddingLeft: "10px",
        paddingRight: "10px",
        margin: "auto",
        marginTop: "40px",
        width: "100%",
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
    {
      img: card5img,
      id: 5,
    },
    {
      img: card6img,
      id: 6,
    },
    {
      img: card7img,
      id: 7,
    },
    {
      img: card8img,
      id: 8,
    },
  ];
  let data = {
    title: "HTC Vice XR Elite Virtual Reality",
    country: "Croatia",
    description: "1920 * 1920 pixels per eye (3640 x 1920 pixels in total)",
  };
  let topRentedArr = [
    {
      image: RentedImg1,
      category:
        "Google Pixel Watch Wi-Fi - Bluetooth, Stainless Steel Case and Fluoroelastomer,",
      title: "41mm Wi-Fi, Bluetooth 5.0, NFC, Up to 24h",
      date: "Feb 6th",
      author: {
        name: "Elsa Brown",
        avatar:
          "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      },
      id: 1,
    },
    {
      image: RentedImg2,
      category:
        "Google Pixel Watch Wi-Fi - Bluetooth, Stainless Steel Case and Fluoroelastomer,",
      title: "41mm Wi-Fi, Bluetooth 5.0, NFC, Up to 24h",
      date: "Feb 6th",
      author: {
        name: "Elsa Brown",
        avatar:
          "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      },
      id: 2,
    },
    {
      image: RentedImg3,
      category:
        "Google Pixel Watch Wi-Fi - Bluetooth, Stainless Steel Case and Fluoroelastomer,",
      title: "41mm Wi-Fi, Bluetooth 5.0, NFC, Up to 24h",
      date: "Feb 6th",
      author: {
        name: "Elsa Brown",
        avatar:
          "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      },
      id: 3,
    },
    {
      image: RentedImg4,
      category:
        "Google Pixel Watch Wi-Fi - Bluetooth, Stainless Steel Case and Fluoroelastomer,",
      title: "41mm Wi-Fi, Bluetooth 5.0, NFC, Up to 24h",
      date: "Feb 6th",
      author: {
        name: "Elsa Brown",
        avatar:
          "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      },
      id: 4,
    },
  ];

  return (
    <>
      <div className={classes.container}>
        <h1>Popular Products</h1>

        <Group className={classes.group} position="apart" spacing="xl">
          <Links />

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

        <Flex
          mih={50}
          gap="xs"
          justify="flex-start"
          align="center"
          direction="column"
          mt={"50px"}
        >
          <Text fz="sm" fw={500} color="#A0A0A7">
            8 of 24 Products
          </Text>
          <Progress w={"20%"} color="grape" value={30} bg="#D9D9D9" />
          <Button variant="default" color="dark" radius="md" mt={"40px"}>
            Load more
          </Button>
        </Flex>
      </div>

      <CustumerReview />

      <RecommendedProducts />

      <div className={classes.container2}>
        <h1>Top Rented</h1>
        {topRentedArr.map((i) => {
          return (
            <TopRented
              key={i.id}
              image={i.image}
              title={i.title}
              author={i.author}
              category={i.category}
              date={i.date}
            />
          );
        })}
        <Button
          variant="default"
          color="gray"
          radius="md"
          size="xs"
          mt={"30px"}
        >
          Show all
        </Button>
      </div>
    </>
  );
};

export default TopProducts;
