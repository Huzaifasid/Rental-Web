import {
  Col,
  Container,
  Progress,
  Button,
  createStyles,
  Flex,
  Grid,
  Group,
  Text,
} from "@mantine/core";
import React from "react";
import { ProductCard } from "./Product Cards/ProductCard";
import Sidebar from "./Sidebar/Sidebar";
import card1img from "../../Assets/card1img.png";
import card2img from "../../Assets/card2img.png";
import card3img from "../../Assets/card3img.png";
import card4img from "../../Assets/card4img.png";
import card5img from "../../Assets/card5img.png";
import card6img from "../../Assets/card6img.png";
import card7img from "../../Assets/card7img.png";
import card8img from "../../Assets/card8img.png";
import { useMediaQuery } from "@mantine/hooks";
const AllProducts = () => {
  const useStyles = createStyles((theme) => ({
    group: {
      justifyContent: "space-between",
      // alignItems: "flex-start",
      // gap: "18px",
      width: "100%",
      // margin: "auto",
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

    sideFlex: {
      display: "flex",
      justifyContent: "space-between",
      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
      },
    },
  }));

  const { classes, theme } = useStyles();

  let images = {
    img1: card1img,
    img2: card2img,
    img3: card3img,
    img4: card4img,
    img5: card5img,
    img6: card6img,
    img7: card7img,
    img8: card8img,
  };
  let data = {
    title: "HTC Vice XR Elite Virtual Reality",
    country: "Croatia",
    description: "1920 * 1920 pixels per eye (3640 x 1920 pixels in total)",
  };
  const isMobile = useMediaQuery("(max-width: 755px)");
  const span = isMobile ? 12 : 4;
  const span2 = isMobile ? 12 : 3;

  return (
    <>
      <div className={classes.container}>
        <Group position="right" spacing="sm">
          <Text color={"#ACACB0"}>4025 Products</Text>
        </Group>
        <div className={classes.sideFlex}>
          <Sidebar />
          <Grid>
            <Col span={span}>
              <ProductCard
                image={images.img1}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span}>
              <ProductCard
                image={images.img2}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span}>
              <ProductCard
                image={images.img3}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span}>
              <ProductCard
                image={images.img4}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span}>
              <ProductCard
                image={images.img5}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span}>
              <ProductCard
                image={images.img6}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span}>
              <ProductCard
                image={images.img7}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span}>
              <ProductCard
                image={images.img8}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span}>
              <ProductCard
                image={images.img1}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
          </Grid>
        </div>
        <Flex
          mih={50}
          gap="xs"
          justify="flex-start"
          align="center"
          direction="column"
          // wrap="wrap"
          mt={"50px"}
        >
          <Text fz="sm" fw={500} color="#A0A0A7">
            21 of 300 Products
          </Text>
          <Progress w={"20%"} color="grape" value={10} bg="white" />
          <Button variant="default" color="dark" radius="md" mt={"40px"}>
            Load more
          </Button>
        </Flex>

        <div>
          <Text color={"dark"} fz="2rem" fw={"bold"}>
            Recently Viewed
          </Text>
          <Grid>
            <Col span={span2}>
              <ProductCard
                image={images.img1}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span2}>
              <ProductCard
                image={images.img2}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span2}>
              <ProductCard
                image={images.img3}
                country={data.country}
                description={data.description}
                title={data.title}
              />
            </Col>
            <Col span={span2}>
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
