import {
  Box,
  Button,
  createStyles,
  Grid,
  Radio,
  Text,
  Checkbox,
  Group,
} from "@mantine/core";

import { useState } from "react";
import { useNavigate } from "react-router";

import { FloatingLabelInput } from "../../../Components/FloatingLabelInput/FloatingLabelInput";

const PaymentDetails = () => {
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
  const { classes } = useStyles();

  const navigate = useNavigate();

  return (
    <>
      <div className={classes.flexBox}>
        <Text
          sx={{
            width: "70%",
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
            },
          }}
        >
          How would you like to pay?
        </Text>

        <Radio.Group name="favoriteFramework">
          <Group
            mt="xs"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Radio
              color={"violet"}
              mt="50px"
              value="Pay with Credit Card"
              label={
                <>
                  <Text transform="capitalize" fw={"500"} color={"#102437"}>
                    Pay with Credit Card
                  </Text>
                </>
              }
            />
            <Radio
              color={"violet"}
              mt="20px"
              value="Pay with PayPal"
              label={
                <>
                  <Text transform="capitalize" fw={"500"} color={"#102437"}>
                    Pay with PayPal
                  </Text>
                </>
              }
            />
          </Group>
        </Radio.Group>

        <Box>
          <FloatingLabelInput label={"Name on Card"} setColor={setColor} />
          <FloatingLabelInput label={"card number"} setColor={setColor} />

          <Grid justify={"space-between"}>
            <Grid.Col span={6}>
              <FloatingLabelInput label={"Expiration"} setColor={setColor} />
            </Grid.Col>
            <Grid.Col span={6}>
              <FloatingLabelInput label={"cvv"} setColor={setColor} />
            </Grid.Col>
          </Grid>
          <Checkbox
            label={
              <>
                <Text transform="capitalize" fw={"500"} color={"#102437"}>
                  Use shipping address as a billing address
                </Text>
              </>
            }
            mt="50px"
            color="violet"
          />
          <Checkbox
            label={
              <>
                <Text transform="capitalize" fw={"500"} color={"#102437"}>
                  I accept rental Term and Conditions
                </Text>
              </>
            }
            mt="20px"
            color="violet"
          />
        </Box>

        <Button
          style={{
            backgroundColor: color === "" ? "rgba(131, 75, 255, 0.4)" : color,
            height: "60px",
          }}
          radius="md"
          mt={"30px"}
          onClick={() => navigate("/checkout")}
        >
          Confirm Purchased
        </Button>
      </div>
    </>
  );
};

export default PaymentDetails;
