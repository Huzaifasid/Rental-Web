import {
  Button,
  Container,
  createStyles,
  Group,
  Select,
  Text,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const SearchBar = () => {
  const isLap = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const btn = isMobile ? "sm" : isLap ? "xl" : "xl";

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
      "@media (max-width: 768px)": {
        marginTop: "40px",
        width: "auto",
        justifyContent: "center",
        alignItems: "center",
      },
      "@media (max-width: 425px)": {
        flexDirection: "column",

        padding: "10px 0px",
      },
    },
    firstDiv: {
      paddingLeft: "20px",
      "@media (max-width: 425px)": {
        paddingLeft: "0px",
      },
    },
    searchBox: {
      display: "flex",
      alignItems: "center",
      "@media (max-width: 768px)": {
        justifyContent: "center",
      },
      "@media (max-width: 425px)": {
        flexDirection: "column",
      },
    },
    border: {
      borderLeft: "2px solid rgba(160, 160, 167, 0.3)",
      padding: "0px 20px",

      "@media (max-width: 425px)": {
        borderLeft: "none",
        borderTop: "2px solid rgba(160, 160, 167, 0.3)",
        padding: "20px 0px",
      },
    },
    btn: {
      display: "flex",
      alignItems: "center",
    },
    selectWidth: {
      width: "270px",
      "@media (max-width: 768px)": {
        width: "170px",
      },
    },
  }));

  const { classes, theme } = useStyles();
  const [data, setData] = useState([
    { value: "Recent Searches", label: "Recent Searches", disabled: true },
    { value: "Xbox Gen 5", label: "Xbox Gen 5" },
    { value: "iPhone", label: "iPhone" },
    { value: "Mackbook 16”", label: "Mackbook 16”" },
  ]);
  const [data2, setData2] = useState([
    { value: "Cities", label: "Cities", disabled: true },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "Chicago", label: "Chicago" },
    { value: "Houston", label: "Houston" },
    { value: "Philadelphia", label: "Philadelphia" },
    { value: "Phoenix", label: "Phoenix" },
    { value: "San Antonio", label: "San Antonio" },
  ]);
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <>
      <Container mb={"30px"}>
        <div className={classes.borderBox}>
          <div className={classes.firstDiv}>
            <Text fw={"bold"}>What</Text>
            <Select
              data={data}
              placeholder="Searching for..."
              nothingFound="Nothing found"
              searchable
              className={classes.selectWidth}
              creatable
              variant={"unstyled"}
              rightSection={<IconChevronDown size="0rem" />}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setData((current) => [...current, item]);
                return item;
              }}
            />
          </div>
          <div className={classes.searchBox}>
            <div className={classes.border}>
              <Text fw={"bold"}>Where</Text>

              <Select
                data={data2}
                variant={"unstyled"}
                rightSection={<IconChevronDown size="0rem" />}
                placeholder="Search Destination"
                dropdownComponent="div"
              />
            </div>
            <div className={classes.border}>
              <Text fw={"bold"}>When</Text>

              <Group position="center">
                <DatePickerInput
                  type="range"
                  placeholder="Select Renting Date"
                  value={value}
                  variant="unstyled"
                  numberOfColumns={2}
                  onChange={setValue}
                />
              </Group>
            </div>
            <div>
              <Button
                className={classes.btn}
                color="violet"
                radius="xl"
                size={btn}
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
