import { createStyles, Text, Button, Box, TextInput } from "@mantine/core";

import { useNavigate } from "react-router";

const Checkout = () => {
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
    },

    underlineTxt: {
      textDecoration: "underline",
      marginLeft: "2px",
      fontWeight: 500,
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

  const { classes } = useStyles();
  const navigate = useNavigate();

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
          style={{ borderBottom: "1px solid grey" }}
          mt="40px"
          description="PROMO CODE"
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
        <Button
          color="violet"
          radius="md"
          mt={"20px"}
          onClick={() => navigate("/shipping")}
        >
          CHECKOUT
        </Button>
      </div>
    </>
  );
};

export default Checkout;
