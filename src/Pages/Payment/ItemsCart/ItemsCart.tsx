import { createStyles, Text, Button, Box, TextInput } from "@mantine/core";

import { useState } from "react";
import { FloatingLabelInput } from "../../../Components/FloatingLabelInput/FloatingLabelInput";
import Lists from "../Lists/Lists";

const ItemsCart = () => {
  const useStyles = createStyles((theme) => ({
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
      alignItems: "center",
    },

    borderleft: {
      borderLeft: "1px solid #BDC1C6",
      paddingLeft: "10px",
      marginLeft: "20px",
    },

    txtBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  }));

  const { classes, theme } = useStyles();
  //   const [value, setValue] = useState<Date | null>(null);
  //   const [value2, setValue2] = useState<Date | null>(null);
  //   const [color, setColor] = useState("");
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.headingSection}>
          <Text fz={"24px"} fw={"bold"}>
            Items
          </Text>
          <Text fz={"14px"} color="#979797">
            Edit item
          </Text>
        </div>
        <div>
          <Lists />
        </div>

        <TextInput
          style={{
            borderBottom: "1px solid grey",
          }}
          mt="150px"
          label={
            <>
              <Text transform="uppercase" color={"#A0A0A7"}>
                PROMO CODE
              </Text>
            </>
          }
          //   placeholder="PROMO CODE"
          variant="unstyled"
        />

        <Box className={classes.txtBox} mt="40px">
          <Text fz={"14px"} fw={"500"} transform="capitalize">
            Total
          </Text>
          <Text fw={"bold"} fz={"24px"} color="#0C0C1D">
            $ 261.87
          </Text>
        </Box>
      </div>
    </>
  );
};

export default ItemsCart;