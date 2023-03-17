import {
  Box,
  Button,
  createStyles,
  Flex,
  Grid,
  Select,
  Radio,
  Text,
  Checkbox,
  Group,
  Image,
} from "@mantine/core";

import React, { useState } from "react";
import img from "../../../Assets/CheckoutImg.png";
import { FloatingLabelInput } from "../../../Components/FloatingLabelInput/FloatingLabelInput";

const CheckoutDetails = () => {
  const useStyles = createStyles((theme) => ({
    flexInput: {
      display: "flex",
      width: "100%",
    },
    flexBox: {
      display: "flex",
      flexDirection: "column",
      width: "70%",
      margin: "auto",
    },
    heading: {
      width: "70%",
    },
  }));
  const [color, setColor] = useState("");
  const { classes, theme } = useStyles();
  const [data, setData] = useState([
    { value: "+1", label: "+1" },
    { value: "+43", label: "+43" },
  ]);
  return (
    <>
      <div className={classes.flexBox}>
        <Image maw={240} mx="auto" radius="md" src={img} alt="Random image" />
        <Text
          sx={{
            width: "100%",
            fontSize: "32px",
            fontWeight: 700,
            marginTop: "10px",
            "@media (max-width: 768px)": {
              width: "90%",
            },
            "@media (max-width: 425px)": {
              width: "90%",
              fontSize: "22px",
            },
            "@media (max-width: 375px)": {
              width: "100%",
              //   fontSize: "22px",
            },
          }}
        >
          Thank you for shopping with Rental. You've made a great choice
        </Text>
        <Text
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            marginTop: "10px",
            color: "rgba(16, 36, 55, 0.5)",
          }}
        >
          Confirmation letter has been sent to David.sad34@gmail.com
        </Text>
        <Text
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            marginTop: "10px",
            color: "rgba(16, 36, 55, 0.5)",
          }}
        >
          Hello, David
        </Text>
        <Text
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            marginTop: "10px",
            color: "rgba(16, 36, 55, 0.5)",
          }}
        >
          Your order has been successfully completed and will be delivered to
          you in the near future. You can track the delivery status in the
          Personal Account. You could also receive a notification with a link to
          track the parcel from our partner DHL.
        </Text>

        <Button
          style={{
            backgroundColor: "#0C0C1D",
            height: "60px",
          }}
          radius="md"
          mt={"30px"}

          // onClick={() => {
          //   setShowNext(true);
          // }}
        >
          Back to Store
        </Button>
      </div>
    </>
  );
};

export default CheckoutDetails;
