import {
  Button,
  Checkbox,
  Col,
  createStyles,
  Grid,
  Text,
  Progress,
  Radio,
  Group,
  RangeSlider,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";

const Sidebar = () => {
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

    mainContainer: {
      width: "auto",
      padding: "0px 20px",
    },
    progressBar: {
      display: "flex",
      alignItems: "center",
    },
    priceCircle: {
      backgroundColor: "#0C0C1D",
      width: "16px",
      height: "15px",
      borderRadius: "100px",
    },
    txt: {
      fontWeight: "bold",
      textTransform: "uppercase",
      marginTop: "30px",
      marginBottom: "20px",
    },
    txtPrice: {
      marginTop: "10px",
    },
  }));

  const { classes, theme } = useStyles();
  //   const [checked, setChecked] = useState(false);
  const [color, setColor] = useState("");

  const islap2 = useMediaQuery("(max-width: 1440px)");
  const islap = useMediaQuery("(max-width: 1024px)");
  const isTab = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 425px)");

  const span = isMobile ? 6 : isTab ? 6 : islap ? 8 : islap2 ? 8 : 6;
  // const span2 = isMobile ? 12 : isTab ? 6 : islap ? 6 : 3;

  let checkBoxArr = [
    {
      label: "Norem",
      id: 1,
    },
    {
      label: "Norem",
      id: 2,
    },
    {
      label: "Norem",
      id: 3,
    },
    {
      label: "Norem",
      id: 4,
    },
    {
      label: "Norem",
      id: 5,
    },
    {
      label: "Norem",
      id: 6,
    },
    {
      label: "Yorem ipsum",
      id: 7,
    },
    {
      label: "Yorem ipsum",
      id: 8,
    },
    {
      label: "Yorem ipsum",
      id: 9,
    },
    {
      label: "Norem",
      id: 10,
    },
    {
      label: "Norem",
      id: 11,
    },
    {
      label: "Norem",
      id: 12,
    },
    {
      label: "Most Popular",
      id: 13,
    },
    {
      label: "Most Popular",
      id: 14,
    },
    {
      label: "Most Popular",
      id: 15,
    },
  ];
  return (
    <>
      <div className={classes.mainContainer}>
        <div>
          <Text className={classes.txt}>Rent For</Text>
          <Grid mt={"20px"}>
            <Col span={span}>
              <Button variant="outline" color="dark" radius="xl" size="sm">
                1 month
              </Button>
            </Col>
            <Col span={span}>
              <Button variant="outline" color="dark" radius="xl" size="sm">
                3 month
              </Button>
            </Col>
            <Col span={span}>
              <Button color="violet" radius="xl" size="sm">
                6 month
              </Button>
            </Col>
            <Col span={span}>
              <Button variant="outline" color="dark" radius="xl" size="sm">
                12 month
              </Button>
            </Col>
            <Col span={12}>
              <Button variant="outline" color="dark" radius="xl" size="sm">
                18 month
              </Button>
            </Col>
          </Grid>
        </div>
        <div>
          <Text className={classes.txt}>Sort by</Text>

          <Radio.Group name="favoriteFramework">
            <Group mt="xs" display={"flex"}>
              <Radio
                onClick={() => {
                  setColor("violet");
                }}
                color={color}
                value="Most Popular"
                label="Most Popular"
              />
              <Radio
                onClick={() => {
                  setColor("violet");
                }}
                color={color}
                value="Price (high to low)"
                label="Price (high to low)"
              />
              <Radio
                onClick={() => {
                  setColor("violet");
                }}
                color={color}
                value="Price (low to high)"
                label="Price (low to high)"
              />
              <Radio
                onClick={() => {
                  setColor("violet");
                }}
                color={color}
                value="New arrivals"
                label="New arrivals"
              />
            </Group>
          </Radio.Group>
        </div>
        <div>
          <Text className={classes.txt}>Monthly Price</Text>
          {/* <div className={classes.progressBar}>
            <div className={classes.priceCircle}></div>
            <Progress
              w={"100%"}
              color="dark"
              radius="xs"
              size="xs"
              value={100}
            />
            <div className={classes.priceCircle}></div>
          </div> */}

          <RangeSlider color="dark" size="sm" radius="xs" />

          <Text className={classes.txtPrice}>$2.67 - $99.67</Text>
        </div>

        <div>
          <Text className={classes.txt}>Sort by</Text>
          {checkBoxArr.map((item) => {
            return (
              <Checkbox
                key={item.id}
                onClick={() => {
                  setColor("violet");
                }}
                color={color}
                label={item.label}
                mt={"10px"}
              />
            );
          })}
          {/* <Checkbox
            onClick={() => {
              setColor("violet");
            }}
            color={color}
            label="Norem"
            mt={"10px"}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
