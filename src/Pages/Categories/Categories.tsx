import { Box, Button, createStyles, Group, Text } from "@mantine/core";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import CategoryBox from "./CategoryBox/CategoryBox";
import category1 from "../../Assets/category/category1.png";
import category2 from "../../Assets/category/category2.png";
import category3 from "../../Assets/category/category3.png";
import category4 from "../../Assets/category/category4.png";
import category5 from "../../Assets/category/category5.png";
import category6 from "../../Assets/category/category6.png";
const Categories = () => {
  let categBoxArr = [
    {
      image: category1,
      text: "Computers",
      id: 1,
    },
    {
      image: category2,
      text: "Phones & Tablets",
      id: 2,
    },
    {
      image: category3,
      text: "Gaming & VR",
      id: 3,
    },
    {
      image: category4,
      text: "Wearable",
      id: 4,
    },
    {
      image: category5,
      text: "Cameras",
      id: 5,
    },
    {
      image: category6,
      text: "TV & Projectors",
      id: 6,
    },
  ];
  const useStyles = createStyles((theme) => ({
    container: {
      marginLeft: "170px",
      paddingRight: "180px",

      [theme.fn.smallerThan("md")]: {
        paddingLeft: "10px",
        paddingRight: "10px",
        margin: "auto",
      },
    },
    flexBox: {
      display: "flex",
      justifyContent: "space-between",
    },
    boxContainer: {
      margin: "auto",
      marginTop: "50px",
      display: "flex",
      justifyContent: "center",

      gap: "15px",

      "@media (max-width: 1024px)": {
        flexWrap: "wrap",
      },
    },
  }));

  const { classes, theme } = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Box className={classes.flexBox}>
          <Text fz={"36px"} color={"#31343F"} fw="800">
            Categories
          </Text>
          <Group>
            <Button variant="outline" color="gray" radius="xl">
              <IconArrowNarrowLeft />
            </Button>
            <Button variant="outline" color="dark" radius="xl">
              <IconArrowNarrowRight />
            </Button>
          </Group>
        </Box>

        <div className={classes.boxContainer}>
          {categBoxArr.map((item) => {
            return (
              <CategoryBox key={item.id} image={item.image} text={item.text} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
