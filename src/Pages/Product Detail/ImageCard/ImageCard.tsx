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
import React from "react";
import img1 from "../../../Assets/ProductdetailImg1.png";
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
                <Box className={classes.boxImg}>
                  <Image
                    src={img1}
                    alt={"img1"}
                    height={"91px"}
                    width={"104px"}
                  />
                </Box>
                <Image
                  src={img1}
                  alt={"img1"}
                  height={"91px"}
                  width={"104px"}
                />
                <Image
                  src={img1}
                  alt={"img1"}
                  height={"91px"}
                  width={"104px"}
                />
              </Flex>
            </div>
          </Grid.Col>
          <Grid.Col span={span2}>
            <div className={classes.flexBox2}>
              <Image src={img1} className={classes.mainImg} alt={"img1"} />
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
