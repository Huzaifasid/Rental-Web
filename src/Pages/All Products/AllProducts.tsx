import {
  Col,
  Progress,
  Button,
  createStyles,
  Flex,
  Grid,
  Group,
  Text,
} from "@mantine/core";

import { ProductCard } from "./Product Cards/ProductCard";
import Sidebar from "./Sidebar/Sidebar";
import card1img from "../../Assets/card/card1img.png";
import card2img from "../../Assets/card/card2img.png";
import card3img from "../../Assets/card/card3img.png";
import card4img from "../../Assets/card/card4img.png";
import card5img from "../../Assets/card/card5img.png";
import card6img from "../../Assets/card/card6img.png";
import card7img from "../../Assets/card/card7img.png";
import card8img from "../../Assets/card/card8img.png";
import { useMediaQuery } from "@mantine/hooks";
const AllProducts = () => {
  const useStyles = createStyles((theme) => ({
    group: {
      justifyContent: "space-between",
      width: "100%",
    },
    container: {
      marginLeft: "170px",
      paddingRight: "180px",

      "@media (max-width: 1024px)": {
        marginLeft: "80px",
        paddingRight: "100px",
      },
      "@media (max-width: 768px)": {
        margin: "auto",
        marginLeft: "30px",
        paddingRight: "30px",
      },
      // [theme.fn.smallerThan("md")]: {
      //   paddingLeft: "10px",
      //   paddingRight: "10px",
      //   margin: "auto",
      // },
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

    sideFlex: {
      display: "flex",

      gap: "40px",
      "@media (max-width: 1024px)": {
        gap: "20px",
      },

      "@media (max-width: 768px)": {
        gap: "80px",
      },
      "@media (max-width: 425px)": {
        flexDirection: "column",
      },
    },
    gridWidth: {
      width: "100%",
      "@media (max-width: 768px)": {
        width: "80%",
      },
    },
  }));

  const { classes } = useStyles();

  let images = {
    img1: card1img,
    img2: card2img,
    img3: card3img,
    img4: card4img,
  };
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
    {
      img: card1img,
      id: 9,
    },
    {
      img: card2img,
      id: 10,
    },
    {
      img: card3img,
      id: 11,
    },
    {
      img: card4img,
      id: 12,
    },
    {
      img: card5img,
      id: 13,
    },
    {
      img: card6img,
      id: 14,
    },
    {
      img: card7img,
      id: 15,
    },
    {
      img: card8img,
      id: 16,
    },
    {
      img: card1img,
      id: 17,
    },
    {
      img: card2img,
      id: 18,
    },
  ];
  let data = {
    title: "HTC Vice XR Elite Virtual Reality",
    country: "Croatia",
    description: "1920 * 1920 pixels per eye (3640 x 1920 pixels in total)",
  };

  const islap2 = useMediaQuery("(max-width: 1440px)");
  const islap = useMediaQuery("(max-width: 1024px)");
  const isTab = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 425px)");
  const isMobileS = useMediaQuery("(max-width: 320px)");

  const span = isMobileS
    ? 12
    : isMobile
    ? 10
    : isTab
    ? 10
    : islap
    ? 6
    : islap2
    ? 5
    : 4;

  const span2 = isMobileS
    ? 12
    : isMobile
    ? 10
    : isTab
    ? 5
    : islap
    ? 6
    : islap2
    ? 5
    : 3;

  return (
    <>
      <div className={classes.container}>
        <Group position="right" spacing="sm">
          <Text color={"#ACACB0"}>4025 Products</Text>
        </Group>
        <div className={classes.sideFlex}>
          <Sidebar />
          <Grid className={classes.gridWidth}>
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
        <Flex
          mih={50}
          gap="xs"
          justify="flex-start"
          align="center"
          direction="column"
          mt={"50px"}
        >
          <Text fz="sm" fw={500} color="#A0A0A7">
            21 of 300 Products
          </Text>
          <Progress w={"20%"} color="grape" value={10} bg="#D9D9D9" />
          <Button variant="default" color="dark" radius="md" mt={"40px"}>
            Load more
          </Button>
        </Flex>

        <div>
          <Text color={"dark"} fz="2rem" fw={"bold"}>
            Recently Viewed
          </Text>
          <Grid>
            <Col m={"auto"} span={span2}>
              <ProductCard
                image={images.img1}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col m={"auto"} span={span2}>
              <ProductCard
                image={images.img2}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col m={"auto"} span={span2}>
              <ProductCard
                image={images.img3}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col m={"auto"} span={span2}>
              <ProductCard
                image={images.img4}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
