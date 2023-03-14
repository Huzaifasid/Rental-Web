import { Button, Container, createStyles, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const SearchBar = () => {
  const useStyles = createStyles((theme) => ({
    borderBox: {
      padding: "10px 15px",
      border: "1px solid rgba(160, 160, 167, 0.3)",
      borderRadius: "34px",
      width: "865px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      backgroundColor: "#FFFFFF",

      [theme.fn.smallerThan("md")]: {
        width: "auto",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
    firstDiv: {
      paddingLeft: "20px",
      [theme.fn.smallerThan("md")]: {
        paddingLeft: "0px",
      },
    },
    searchBox: {
      display: "flex",
      alignItems: "center",
      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
        justifyContent: "center",
      },
    },
    border: {
      borderLeft: "2px solid rgba(160, 160, 167, 0.3)",
      padding: "0px 20px",

      [theme.fn.smallerThan("md")]: {
        borderLeft: "none",
        borderTop: "2px solid rgba(160, 160, 167, 0.3)",
        padding: "20px 0px",
      },
    },
    btn: {
      display: "flex",
      alignItems: "center",
    },
  }));

  const { classes, theme } = useStyles();
  return (
    <>
      <Container mb={"30px"}>
        <div className={classes.borderBox}>
          <div className={classes.firstDiv}>
            <Text fw={"bold"}>What</Text>
            <Text color={"#102437"} fw={"lighter"}>
              Searching for...
            </Text>
          </div>
          <div className={classes.searchBox}>
            <div className={classes.border}>
              <Text fw={"bold"}>Where</Text>
              <Text color={"#102437"} fw={"lighter"}>
                Search Destination
              </Text>
            </div>
            <div className={classes.border}>
              <Text fw={"bold"}>When</Text>
              <Text color={"#102437"} fw={"lighter"}>
                Select Renting Date
              </Text>
            </div>
            <div>
              <Button
                className={classes.btn}
                color="violet"
                radius="xl"
                size="xl"
              >
                <IconSearch />
                <span>Search</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SearchBar;
