import {
  Box,
  Button,
  createStyles,
  Flex,
  Grid,
  Group,
  Image,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconZoomIn } from "@tabler/icons-react";
import React, { useState } from "react";
import img1 from "../../../Assets/ProductdetailImg1.png";
import img2 from "../../../Assets/card6img.png";
import img3 from "../../../Assets/card5img.png";
const ImageCard = () => {
  const useStyles = createStyles((theme) => ({
    boxImg: {
      backgroundColor: "rgba(30, 30, 32, 0.05)",
      borderRadius: "6px",
    },
    mainImg: {
      //    height={"534px"} width={"701px"}
      width: "701px",
      // height: "534px",
      [theme.fn.smallerThan("md")]: {
        width: "300px",
        // height: "250px",
      },
    },
    flexBox: {
      display: "flex",
      [theme.fn.smallerThan("md")]: {
        flexDirection: "column-reverse",
        justifyContent: "space-between",
      },
      "@media (max-width: 1024px)": {
        justifyContent: "space-between",
      },
    },
    flexBox2: {
      display: "flex",
      [theme.fn.smallerThan("md")]: {
        // flexDirection: "column",
      },
    },
    smallImages: {
      [theme.fn.smallerThan("md")]: {
        flexDirection: "row",
        justifyContent: "center",
      },
    },
  }));

  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery("(max-width: 755px)");
  const span = isMobile ? 12 : 1;
  const span2 = isMobile ? 12 : 9;
  const [images, setImages] = useState(img1);
  const [imgToggle, setImgToggle] = useState(false);

  return (
    <>
      <div>
        <Grid
          gutter={5}
          gutterXs="md"
          gutterMd="xl"
          gutterXl={50}
          className={classes.flexBox}
          align="center"
        >
          <Grid.Col span={span}>
            <div>
              <Flex
                mih={50}
                gap="xl"
                justify="flex-start"
                align="flex-start"
                direction="column"
                className={classes.smallImages}
              >
                <Box
                  // className={classes.boxImg}
                  style={{
                    backgroundColor:
                      images === img1 ? "rgba(30, 30, 32, 0.05)" : "",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setImages(img1);
                    setImgToggle(true);
                  }}
                >
                  <Image
                    src={img1}
                    alt={"img1"}
                    height={"91px"}
                    width={"104px"}
                  />
                </Box>
                <Box
                  style={{
                    backgroundColor:
                      images === img2 ? "rgba(30, 30, 32, 0.05)" : "",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setImages(img2);
                    setImgToggle(true);
                  }}
                >
                  <Image
                    src={img2}
                    alt={"img2"}
                    height={"91px"}
                    width={"104px"}
                  />
                </Box>
                <Box
                  style={{
                    backgroundColor:
                      images === img3 ? "rgba(30, 30, 32, 0.05)" : "",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setImages(img3);
                    setImgToggle(true);
                  }}
                >
                  <Image
                    style={{
                      backgroundColor:
                        images === img3 ? "rgba(30, 30, 32, 0.05)" : "",
                      borderRadius: "6px",
                    }}
                    src={img3}
                    alt={"img3"}
                    height={"91px"}
                    width={"104px"}
                  />
                </Box>
              </Flex>
            </div>
          </Grid.Col>
          <Grid.Col span={span2}>
            <div
              className={classes.flexBox2}
              onClick={() => {
                setImages(img1);
                setImgToggle(false);
              }}
            >
              <Image
                src={imgToggle ? images : img1}
                alt="Main Image"
                className={classes.mainImg}
              />
              <Group position="right">
                <IconZoomIn color="#28303F" />
              </Group>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

export default ImageCard;
