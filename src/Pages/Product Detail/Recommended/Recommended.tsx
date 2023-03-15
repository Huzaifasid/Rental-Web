import { Col, Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ProductCard } from "../../All Products/Product Cards/ProductCard";
import card1img from "../../../Assets/card1img.png";
import card2img from "../../../Assets/card2img.png";
import card3img from "../../../Assets/card3img.png";
import card4img from "../../../Assets/card4img.png";

let images = {
  img1: card1img,
  img2: card2img,
  img3: card3img,
  img4: card4img,
};
let data = {
  title: "HTC Vice XR Elite Virtual Reality",
  country: "Croatia",
  description: "1920 * 1920 pixels per eye (3640 x 1920 pixels in total)",
};

const Recommended = () => {
  const isMobile = useMediaQuery("(max-width: 755px)");
  const span2 = isMobile ? 12 : 3;
  return (
    <>
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
    </>
  );
};

export default Recommended;
