import {
  Button,
  Container,
  createStyles,
  Flex,
  Group,
  Progress,
  Text,
} from "@mantine/core";
import React from "react";

// import { ProductCard } from "./Product Cards/ProductCard";
import { Grid, Col } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import card1img from "../../../Assets/card1img.png";
import card2img from "../../../Assets/card2img.png";
import card3img from "../../../Assets/card3img.png";
import card4img from "../../../Assets/card4img.png";
import card5img from "../../../Assets/card5img.png";
import card6img from "../../../Assets/card6img.png";
import card7img from "../../../Assets/card7img.png";
import card8img from "../../../Assets/card8img.png";
import { ProductCard } from "../Product Cards/ProductCard";

const RecommendedProducts = () => {
  const useStyles = createStyles((theme) => ({
    group: {
      justifyContent: "space-between",
      // alignItems: "flex-start",
      // gap: "18px",
      width: "100%",
      // margin: "auto",
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

  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery("(max-width: 755px)");
  const span = isMobile ? 12 : 3;
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
    badges: [
      {
        emoji: "☀️",
        label: "Sunny weather",
      },
      {
        emoji: "🦓",
        label: "Onsite zoo",
      },
      {
        emoji: "🌊",
        label: "Sea",
      },
      {
        emoji: "🌲",
        label: "Nature",
      },
      {
        emoji: "🤽",
        label: "Water sports",
      },
    ],
  };
  return (
    <>
      <div className={classes.container}>
        <Group className={classes.group} position="apart" spacing="xl">
          <h1>Recommended Products</h1>

          <Button className={classes.btn} radius="md">
            Browse all products
          </Button>
        </Group>
        <Grid>
          <Col span={span}>
            <ProductCard
              image={images.img1}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img2}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img3}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img4}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
        </Grid>
        {/* <Grid>
          <Col span={span}>
            <ProductCard
              image={images.img5}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img6}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img7}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img8}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
        </Grid> */}
      </div>
      <div className={classes.container}>
        <Group className={classes.group} position="apart" spacing="xl">
          <h1>Commonly Rented</h1>

          <Button className={classes.btn} radius="md">
            Browse all products
          </Button>
        </Group>
        {/* <Grid>
          <Col span={span}>
            <ProductCard
              image={images.img1}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img2}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img3}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img4}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
        </Grid> */}
        <Grid>
          <Col span={span}>
            <ProductCard
              image={images.img5}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img6}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img7}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
          <Col span={span}>
            <ProductCard
              image={images.img8}
              badges={data.badges}
              country={data.country}
              description={data.description}
              title={data.title}
            />
          </Col>
        </Grid>
      </div>
    </>
  );
};

export default RecommendedProducts;
