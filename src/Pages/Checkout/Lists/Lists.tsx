import { Box, createStyles, Text } from "@mantine/core";
import { IconCopy } from "@tabler/icons-react";
import copyimg from "../../../Assets/copy.png";
const Lists = () => {
  const useStyles = createStyles((theme) => ({
    txtBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    txt2: {
      textAlign: "left",
      fontSize: "14px",
      fontWeight: 400,
      width: "40%",
    },
  }));

  const { classes, theme } = useStyles();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "23px",
        }}
      >
        <Box className={classes.txtBox} mt="40px">
          <Text fz={"14px"} fw={"500"} transform="capitalize">
            Order Number
          </Text>
          <Text className={classes.txt2} color="#0C0C1D">
            PTT6921
            <img style={{ marginLeft: "5px" }} src={copyimg} alt="" />
          </Text>
        </Box>
        <Box className={classes.txtBox} mt="10px">
          <Text fz={"14px"} fw={"500"} transform="capitalize">
            Estimate Delivery Date
          </Text>
          <Text className={classes.txt2} color="#0C0C1D">
            02 May, 2023
          </Text>
        </Box>
        <Box className={classes.txtBox} mt="10px">
          <Text fz={"14px"} fw={"500"} transform="capitalize">
            Shipping Details
          </Text>
          <Text className={classes.txt2} color="#0C0C1D">
            13th Street. 47 W 13th St, New York, NY 10011, USA
          </Text>
        </Box>
      </div>
    </>
  );
};

export default Lists;
