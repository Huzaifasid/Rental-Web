import {
  createStyles,
  List,
  Text,
  ThemeIcon,
  Radio,
  Button,
  Box,
  Group,
  Rating,
} from "@mantine/core";
import {
  IconCircleCheck,
  IconCircleDashed,
  IconHeart,
  IconShare,
} from "@tabler/icons-react";
import icon1 from "../../../Assets/umbrellaIcon.png";
import icon2 from "../../../Assets/shoppingbasketIcon.png";
import icon3 from "../../../Assets/deliveryIcon.png";
import icon4 from "../../../Assets/giftIcon.png";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { useNavigate } from "react-router";

const AddToCart = () => {
  const useStyles = createStyles((theme) => ({
    like: {
      color: "#A0A0A7",
      marginLeft: "5px",
    },
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid gray",
      borderRadius: "16px",
      padding: "24px 24px 36px",
      backgroundColor: "white",
      boxShadow:
        "0px 84px 33px rgba(53, 45, 73, 0.01), 0px 47px 28px rgba(53, 45, 73, 0.03), 0px 21px 21px rgba(53, 45, 73, 0.04), 0px 5px 12px rgba(53, 45, 73, 0.05), 0px 0px 0px rgba(53, 45, 73, 0.05)",

      "@media (max-width: 768px)": {
        width: "50%",
        margin: "auto",
        marginTop: "70px",
      },
      "@media (max-width: 425px)": {
        width: "90%",
        margin: "auto",
        marginTop: "70px",
      },
      "@media (max-width: 320px)": {
        width: "100%",
        margin: "auto",
        marginTop: "70px",
      },
      // [theme.fn.smallerThan("md")]: {
      //   marginTop: "40px",
      // },
    },
    headingSection: {
      display: "flex",
      justifyContent: "space-between",
    },
    iconSection: {},
    span: {
      fontSize: "11px",
      fontWeight: "lighter",
      color: "#979797",
    },

    listContainer: {},
    underlineTxt: {
      textDecoration: "underline",
      marginLeft: "2px",
      fontWeight: 500,
    },

    inputContainer: {
      marginTop: "20px",
    },
    inputBox: {
      marginTop: "20px",
      display: "flex",
      border: "1px solid #D9DCDF",
      borderRadius: "12px",
      padding: "0px 15px",
    },
    borderleft: {
      borderLeft: "1px solid #BDC1C6",
      paddingLeft: "10px",
      marginLeft: "20px",
    },
    inputBox2: {
      marginTop: "20px",
      display: "flex",
      alignItems: "center",

      border: "1px solid #D9DCDF",
      borderRadius: "12px",
      padding: "10px 15px",
    },
    btnColor: {
      backgroundColor: "black",
      width: "18px",
      height: "18px",
      borderRadius: "50px",
    },
  }));

  const { classes, theme } = useStyles();
  const [value, setValue] = useState<Date | null>(null);
  const [value2, setValue2] = useState<Date | null>(null);
  const navigate = useNavigate();
  let iconArr = [
    { icon: icon1, free: "FREE", underLinetext: "Rental App Care", id: 1 },
    { icon: icon2, text: "Include", underLinetext: "Purchase option", id: 2 },
    { icon: icon3, text: "Delivery in 3-5 business days", id: 3 },
    { icon: icon4, free: "FREE", text: "Shipping and return", id: 4 },
  ];
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.headingSection}>
          <Text fz={"24px"} fw={"bold"} w="70%">
            HTC Vice XR Elite Virtual Reality
          </Text>
          <div className={classes.iconSection}>
            <IconShare size="1.8rem" className={classes.like} />
            <IconHeart size="1.8rem" className={classes.like} stroke={1.5} />
          </div>
        </div>
        <div>
          <Text fz={"14px"} color="#A0A0A7" transform="capitalize">
            1920 * 1920 pixels per eye (3640 x 1920 pixels in total)
          </Text>
          <Text fz={"36px"} fw={"bold"} color="#0C0C1D">
            $59.90
            <span className={classes.span}> /per day</span>
          </Text>
        </div>
        <div className={classes.listContainer}>
          {iconArr.map((item) => {
            return (
              <List
                spacing="xs"
                size="sm"
                center
                icon={<img src={item.icon} alt="" />}
              >
                <List.Item mt={"20px"}>
                  <span style={{ color: "#834BFF" }}>{item.free} </span>
                  <span style={{ fontWeight: "500" }}> {item.text} </span>

                  <span className={classes.underlineTxt}>
                    {item.underLinetext}
                  </span>
                </List.Item>
              </List>
            );
          })}
        </div>
        <div className={classes.inputContainer}>
          <Text color="#0C0C1D" fw={"500"}>
            Select your
            <span className={classes.underlineTxt}>minimum rental period</span>
          </Text>

          <div className={classes.inputBox}>
            <DateInput
              value={value}
              onChange={setValue}
              label={"Rent From"}
              placeholder="Add Dates"
              variant="unstyled"
            />

            <DateInput
              value={value2}
              onChange={setValue2}
              label={"Rent Till"}
              placeholder="Add Dates"
              variant="unstyled"
              className={classes.borderleft}
            />
          </div>
          <div className={classes.inputBox2}>
            <Box className={classes.btnColor}></Box>
            <Text ml={"10px"} fw="500">
              Black
            </Text>
          </div>
        </div>
        <Button
          color="violet"
          radius="md"
          mt={"20px"}
          onClick={() => navigate("/shopping-cart")}
        >
          Add to cart
        </Button>
      </div>
      <Group position="center" mt={"20px"}>
        <div>REVIEWS</div>
        <Rating fractions={4} defaultValue={3.75} />
        <span>4/5</span>
      </Group>
    </>
  );
};

export default AddToCart;
