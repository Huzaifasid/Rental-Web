import { Box, createStyles, Image, Text } from "@mantine/core";

const DescriptionBox = (props: { img: any; text: String }) => {
  const { img, text } = props;
  const useStyles = createStyles((theme) => ({
    desBox: {
      display: "flex",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(131, 75, 255, 0.1)",
      borderRadius: "12px",
      padding: "50px 0px",

      [theme.fn.smallerThan("md")]: {
        marginTop: "20px",
      },
    },
  }));

  const { classes, theme } = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Image src={img} alt={"img1"} width={"24px"} />
        <Text fz={"14px"} align="center" w={"65%"} mt="5px" color={"#834BFF"}>
          {text}
        </Text>
      </Box>
    </>
  );
};

export default DescriptionBox;
