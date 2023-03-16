import { createStyles, Text } from "@mantine/core";
import img1 from "../../../Assets/wifiIcon.png";
import img2 from "../../../Assets/simcardIcon.png";
import img3 from "../../../Assets/help.png";
const List = () => {
  const useStyles = createStyles((theme) => ({
    mainContainer: {
      marginTop: "20px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    imageContainer: {
      width: "48px",
      padding: "10px",
      backgroundColor: "#F1F1F1",
      borderRadius: "90px",
      textAlign: "center",
    },
    txt: {
      fontWeight: 400,
      fontSize: "15px",
      color: "rgba(12, 12, 29, 0.5)",
      width: "289px",
      marginLeft: "10px",
    },
    span: {
      fontWeight: "bold",
      margin: "0px 5px",
    },
  }));

  const { classes, theme } = useStyles();
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <img width={"20px"} src={img1} alt="" />
        </div>
        <Text className={classes.txt}>
          Check out
          <span className={classes.span}>Feed</span>
          for your personalized suggestions.
        </Text>
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <img width={"20px"} src={img2} alt="" />
        </div>
        <Text className={classes.txt}>
          Manage your rentals in
          <span className={classes.span}>My Rentals</span>
        </Text>
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <img width={"20px"} src={img3} alt="" />
        </div>
        <Text className={classes.txt}>
          We're always happy to help. Just visit
          <span className={classes.span}>Account {">"} Chat with us</span>
        </Text>
      </div>
    </>
  );
};

export default List;
