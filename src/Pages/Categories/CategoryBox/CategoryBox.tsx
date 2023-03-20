import { Box, createStyles, Text } from "@mantine/core";
const CategoryBox = (props: any) => {
  const { image, text } = props;
  const useStyles = createStyles((theme) => ({
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "210px",
      height: "210px",
      borderRadius: "12px",
      backgroundColor: "#F7F7F7",
    },
  }));

  const { classes, theme } = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <img src={image} alt="category1" />
        <Text fz={"16px"} fw="600" color="#494E5B">
          {text}
        </Text>
      </Box>
    </>
  );
};

export default CategoryBox;
