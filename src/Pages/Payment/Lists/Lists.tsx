import { Box, createStyles, Text } from "@mantine/core";
import img1 from "../../../Assets/Shippingimg1.png";
import img2 from "../../../Assets/Shippingimg2.png";
import img3 from "../../../Assets/Shippingimg3.png";
import img4 from "../../../Assets/Shippingimg4.png";

const Lists = () => {
  const useStyles = createStyles((theme) => ({
    txtBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    imgContainer: {
      display: "flex",
      gap: "10px",
    },
    priceContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
  }));

  const { classes, theme } = useStyles();
  return (
    <>
      <Box className={classes.txtBox} mt="10px">
        <div className={classes.imgContainer}>
          <img src={img1} alt="" />
          <div>
            <Text fz={"14px"} fw={"600"} transform="capitalize">
              Xbox Gen 5
            </Text>
            <Text fz={"14px"} fw={"400"} color="rgba(16, 36, 55, 0.5)">
              Alexander in London
            </Text>
          </div>
        </div>
        <div className={classes.priceContainer}>
          <Text fz={"12px"} fw={"400"} transform="capitalize">
            1x
          </Text>
          <Text fz={"12px"} fw={"600"} color="#0C0C1D">
            $ 30.31
          </Text>
        </div>
      </Box>
      <Box className={classes.txtBox} mt="10px">
        <div className={classes.imgContainer}>
          <img src={img2} alt="" />
          <div>
            <Text fz={"14px"} fw={"600"} transform="capitalize">
              Xbox Gen 5
            </Text>
            <Text fz={"14px"} fw={"400"} color="rgba(16, 36, 55, 0.5)">
              Alexander in London
            </Text>
          </div>
        </div>
        <div className={classes.priceContainer}>
          <Text fz={"12px"} fw={"400"} transform="capitalize">
            1x
          </Text>
          <Text fz={"12px"} fw={"600"} color="#0C0C1D">
            $ 30.31
          </Text>
        </div>
      </Box>
      <Box className={classes.txtBox} mt="10px">
        <div className={classes.imgContainer}>
          <img src={img3} alt="" />
          <div>
            <Text fz={"14px"} fw={"600"} transform="capitalize">
              Xbox Gen 5
            </Text>
            <Text fz={"14px"} fw={"400"} color="rgba(16, 36, 55, 0.5)">
              Alexander in London
            </Text>
          </div>
        </div>
        <div className={classes.priceContainer}>
          <Text fz={"12px"} fw={"400"} transform="capitalize">
            1x
          </Text>
          <Text fz={"12px"} fw={"600"} color="#0C0C1D">
            $ 30.31
          </Text>
        </div>
      </Box>
      <Box className={classes.txtBox} mt="10px">
        <div className={classes.imgContainer}>
          <img src={img4} alt="" />
          <div>
            <Text fz={"14px"} fw={"600"} transform="capitalize">
              Xbox Gen 5
            </Text>
            <Text fz={"14px"} fw={"400"} color="rgba(16, 36, 55, 0.5)">
              Alexander in London
            </Text>
          </div>
        </div>
        <div className={classes.priceContainer}>
          <Text fz={"12px"} fw={"400"} transform="capitalize">
            1x
          </Text>
          <Text fz={"12px"} fw={"600"} color="#0C0C1D">
            $ 30.31
          </Text>
        </div>
      </Box>
    </>
  );
};

export default Lists;
