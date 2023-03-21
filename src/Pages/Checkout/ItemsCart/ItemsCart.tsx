import { createStyles, Text, Box } from "@mantine/core";

import Lists from "../Lists/Lists";
import bookmark from "../../../Assets/icons/bookmark.png";

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
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.headingSection}>
          <Text fz={"24px"} fw={"bold"}>
            Order Summary
          </Text>
          <Text fz={"14px"} color="#979797">
            <img src={bookmark} alt="" />
          </Text>
        </div>
        <div>
          <Lists />
        </div>

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
