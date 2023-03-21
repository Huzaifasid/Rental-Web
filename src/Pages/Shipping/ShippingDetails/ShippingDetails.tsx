import { Box, Button, createStyles, Grid, Select, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FloatingLabelInput } from "../../../Components/FloatingLabelInput/FloatingLabelInput";

const ShippingDetails = () => {
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
  const [data, setData] = useState([
    { value: "+1", label: "+1" },
    { value: "+43", label: "+43" },
  ]);
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
          Where would you like your order to be sent
        </Text>

        <Box>
          <FloatingLabelInput label={"Country"} setColor={setColor} />
          <FloatingLabelInput label={"Address"} setColor={setColor} />

          <Grid justify={"space-between"}>
            <Grid.Col span={6}>
              <FloatingLabelInput label={"City"} setColor={setColor} />
            </Grid.Col>
            <Grid.Col span={6}>
              <FloatingLabelInput label={"Zip Code"} setColor={setColor} />
            </Grid.Col>
          </Grid>
          <Grid align={"flex-end"}>
            <Grid.Col span={2}>
              <Select
                data={data}
                placeholder="+1"
                nothingFound="Nothing found"
                searchable
                creatable
                mt={"25px"}
                variant={"unstyled"}
                rightSection={<IconChevronDown size="1rem" />}
                style={{ borderBottom: "1px solid #A0A0A7" }}
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => {
                  const item = { value: query, label: query };
                  setData((current) => [...current, item]);
                  return item;
                }}
              />
            </Grid.Col>
            <Grid.Col span={10}>
              <FloatingLabelInput label={"Phone Number"} setColor={setColor} />
            </Grid.Col>
          </Grid>
        </Box>
        <Button
          style={{
            backgroundColor: color === "" ? "rgba(131, 75, 255, 0.4)" : color,
            height: "60px",
          }}
          radius="md"
          mt={"30px"}
          onClick={() => navigate("/payment")}
        >
          Proceed to Shipping
        </Button>
      </div>
    </>
  );
};

export default ShippingDetails;
