import {
  Avatar,
  Box,
  Button,
  createStyles,
  Grid,
  Group,
  Progress,
  Rating,
  Text,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import user1 from "../../../Assets/userreview1.png";
import user2 from "../../../Assets/userreview2.png";
import user3 from "../../../Assets/userreview3.png";

const UserReviews = () => {
  const useStyles = createStyles((theme) => ({
    mainContainer: {
      display: "flex",

      "@media (max-width: 1024px)": {
        flexWrap: "wrap",
      },
      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
      },
    },
    reviewBox: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      width: "140px",
      [theme.fn.smallerThan("md")]: {
        width: "auto",
      },
    },
    txt1: {
      color: "white",
      background: "#F79E1B",
      fontSize: "64px",
      borderRadius: "12px 12px 0px 0px",
      padding: "0px 16px",
    },
    txt2: {
      color: "white",
      background: "#494E5B",
      fontSize: "16px",
      borderRadius: "0px 0px 12px 12px",
      padding: "10px 16px",
    },
    ratingContainer: {
      marginLeft: "20px",

      "@media (max-width: 1440px)": {
        width: "80%",
        marginLeft: "0px",
        marginTop: "10px",
      },
      "@media (max-width: 1024px)": {
        width: "100%",
        marginLeft: "0px",
        marginTop: "10px",
      },
      [theme.fn.smallerThan("md")]: {
        marginLeft: "0px",
        marginTop: "20px",
      },
    },
    ratingBox: {
      display: "flex",
      alignItems: "center",
    },
    userContainer: {
      marginTop: "30px",
    },
    user: {
      marginTop: "20px",
    },
    userBox: {
      display: "flex",
      alignItems: "center",
    },
  }));

  const { classes, theme } = useStyles();
  return (
    <>
      <Text fw={"bold"} fz="24px" mb={"20px"}>
        User Reviews
      </Text>
      <div className={classes.mainContainer}>
        <Box className={classes.reviewBox}>
          <Text className={classes.txt1}>4.2</Text>
          <Text className={classes.txt2}>3.57k reviews</Text>
        </Box>
        <div className={classes.ratingContainer}>
          <Box className={classes.ratingBox}>
            <Rating fractions={5} defaultValue={5} ml={"10px"} />
            <Progress color="gray" value={80} w="389px" mr="10px" ml={"10px"} />
            <Text mr="10px" ml={"10px"}>
              2367
            </Text>
          </Box>
          <Box className={classes.ratingBox}>
            <Rating fractions={5} defaultValue={4} ml={"10px"} />
            <Progress color="gray" value={30} w="389px" mr="10px" ml={"10px"} />
            <Text mr="10px" ml={"10px"}>
              154
            </Text>
          </Box>
          <Box className={classes.ratingBox}>
            <Rating fractions={5} defaultValue={3} ml={"10px"} />
            <Progress color="gray" value={20} w="389px" mr="10px" ml={"10px"} />
            <Text mr="10px" ml={"10px"}>
              113
            </Text>
          </Box>
          <Box className={classes.ratingBox}>
            <Rating fractions={5} defaultValue={2} ml={"10px"} />
            <Progress color="gray" value={35} w="389px" mr="10px" ml={"10px"} />
            <Text mr="10px" ml={"10px"}>
              217
            </Text>
          </Box>
          <Box className={classes.ratingBox}>
            <Rating fractions={5} defaultValue={1} ml={"10px"} />
            <Progress color="gray" value={10} w="389px" mr="10px" ml={"10px"} />
            <Text mr="10px" ml={"10px"}>
              67
            </Text>
          </Box>
        </div>

        {/* <Grid>
          <Grid.Col md={6} lg={3}></Grid.Col>
          <Grid.Col md={6} lg={3}></Grid.Col>
          <Grid.Col md={6} lg={3}></Grid.Col>
        </Grid> */}
      </div>
      <div className={classes.userContainer}>
        <div className={classes.user}>
          <Box className={classes.userBox}>
            <Avatar radius="xl" size="lg" src={user1} />
            <div>
              <Text mr="10px" fz={"14px"} ml={"10px"}>
                Tatiana Culhane
              </Text>
              <div className={classes.ratingBox}>
                <Rating size="xs" fractions={5} defaultValue={4} ml={"10px"} />
                <Text mr="10px" fz={"14px"} color="#959BAC" ml={"10px"}>
                  4.0
                </Text>
              </div>
            </div>
          </Box>
          <Text fz={"14px"} fw="400" color="#0C0C1D" ml={"10px"} mt="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
        </div>
        <div className={classes.user}>
          <Box className={classes.userBox}>
            <Avatar radius="xl" size="lg" src={user2} />
            <div>
              <Text mr="10px" fz={"14px"} ml={"10px"}>
                Lindsey Culhane
              </Text>
              <div className={classes.ratingBox}>
                <Rating size="xs" fractions={5} defaultValue={5} ml={"10px"} />
                <Text mr="10px" fz={"14px"} color="#959BAC" ml={"10px"}>
                  4.0
                </Text>
              </div>
            </div>
          </Box>
          <Text fz={"14px"} fw="400" color="#0C0C1D" ml={"10px"} mt="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
        </div>
        <div className={classes.user}>
          <Box className={classes.userBox}>
            <Avatar radius="xl" size="lg" src={user3} />
            <div>
              <Text mr="10px" fz={"14px"} ml={"10px"}>
                Corey Gouse
              </Text>
              <div className={classes.ratingBox}>
                <Rating size="xs" fractions={5} defaultValue={4} ml={"10px"} />
                <Text mr="10px" fz={"14px"} color="#959BAC" ml={"10px"}>
                  4.0
                </Text>
              </div>
            </div>
          </Box>
          <Text fz={"14px"} fw="400" color="#0C0C1D" ml={"10px"} mt="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
        </div>

        <Group position="center" mt={"30px"}>
          <Button variant="default" color="gray" radius="md">
            Show more
            <span>
              <IconChevronDown />
            </span>
          </Button>
          <Button variant="default" color="gray" radius="md">
            Write a review
          </Button>
        </Group>
      </div>
    </>
  );
};

export default UserReviews;
