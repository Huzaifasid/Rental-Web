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
  TextInput,
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

const Checkout = () => {
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

      [theme.fn.smallerThan("md")]: {
        marginTop: "40px",
      },
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
    txtBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  }));

  const { classes, theme } = useStyles();
  const [value, setValue] = useState<Date | null>(null);
  const [value2, setValue2] = useState<Date | null>(null);
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
            Summary
          </Text>
        </div>
        <div>
          <Box className={classes.txtBox} mt="10px">
            <Text fz={"14px"} fw={"500"} transform="capitalize">
              Subtotal
            </Text>
            <Text fw={"bold"} color="#0C0C1D">
              $ 252.67
            </Text>
          </Box>
          <Box className={classes.txtBox} mt="10px">
            <Text fz={"14px"} fw={"500"} transform="capitalize">
              Shipping
            </Text>
            <Text fw={"bold"} color="#0C0C1D">
              $2.99
            </Text>
          </Box>
          <Box className={classes.txtBox} mt="10px">
            <Text fz={"14px"} fw={"500"} transform="capitalize">
              Tax
            </Text>
            <Text fw={"bold"} color="#0C0C1D">
              $ 5.27
            </Text>
          </Box>
        </div>

        <TextInput
          style={{
            borderBottom: "1px solid grey",
            // paddingLeft: "10px",
          }}
          mt="40px"
          description="PROMO CODE"
          //   placeholder="PROMO CODE"
          variant="unstyled"
        />
        <Box className={classes.txtBox} mt="150px">
          <Text fz={"14px"} fw={"500"} transform="capitalize">
            Total
          </Text>
          <Text fw={"bold"} fz={"24px"} color="#0C0C1D">
            $ 261.87
          </Text>
        </Box>
        <Button color="violet" radius="md" mt={"20px"}>
          CHECKOUT
        </Button>
      </div>
    </>
  );
};

export default Checkout;
