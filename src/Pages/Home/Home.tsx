import React from "react";
import { Button, createStyles, Group, Input, Tooltip } from "@mantine/core";
import {
  IconAlertCircle,
  IconArmchair,
  IconCategory,
  IconSearch,
} from "@tabler/icons-react";
import { HeroSectionHome } from "./HeroSection/HeroSection";
import HeroSection2 from "./HeroSection2/HeroSection2";

const Home = () => {
  const useStyles = createStyles((theme) => ({
    input: {
      borderRadius: "38px",
      width: "71%",
    },
    catBtn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      border: "1px solid rgba(160, 160, 167, 0.08)",
      borderRadius: "32px",
      //   width: "auto",
      color: "black",
      //   margin: "auto",

      // padding: 17px 24px 17px 20px;
    },
    group: {
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "12px",

      margin: "auto",
    },
  }));

  const { classes, theme } = useStyles();
  return (
    <>
      <Group pb="xl" px="md" className={classes.group}>
        <Button className={classes.catBtn}>
          <IconCategory />
          Categories
        </Button>
        <Input
          className={classes.input}
          radius="32px"
          //   width={"631px"}
          icon={<IconSearch size="1rem" />}
          placeholder="Search For Products"
        />
        <Button className={classes.catBtn}>
          <IconArmchair />
        </Button>
      </Group>

      <HeroSectionHome />
      <HeroSection2 />
    </>
  );
};

export default Home;
