import { createStyles, Grid, Text } from "@mantine/core";

const UnderTheHood = () => {
  const useStyles = createStyles((theme) => ({
    headingFont: {
      fontSize: "14px",
      [theme.fn.smallerThan("md")]: {
        fontSize: "10px",
      },
    },
    paraFont: {
      fontSize: "13px",
      [theme.fn.smallerThan("md")]: {
        fontSize: "10px",
      },
    },
  }));

  const { classes } = useStyles();
  let listArr = [
    {
      heading: "GPU",
      para: "Custom RDNA 2, 20 CUs at 1.565 GHz 4 TFLOPS",
      id: 1,
    },
    {
      heading: "TYPE",
      para: "Borem ipsum ",
      id: 2,
    },
    {
      heading: "Storage",
      para: "10 GB GDDR6, 8 GB at 224 GB / s, 2 GB at 56 GB / s",
      id: 3,
    },
    {
      heading: "TARGET PERFORMANCE",
      para: "1440p at 60 FPS, up to 120 FPS",
      id: 4,
    },
    {
      heading: "Main Processor",
      para: "Custom Zen 2 processor with 8 cores at 3.6 GHz (3.4 GHz with SMT)",
      id: 5,
    },
    {
      heading: "STORAGE CAPACITY",
      para: "512 GB PCIe Gen 4 custom NVME SSD, 2.4 GB / s raw, 4.8 GB / s compressed",
      id: 6,
    },
    {
      heading: "size",
      para: "275 mm × 151 mm × 63.5 mm",
      id: 7,
    },
    {
      heading: "Model",
      para: "Microsoft Xbox Series X",
      id: 8,
    },
    {
      heading: "Connections",
      para: "1x power connection port, 1x HDMI output, 2x USB ports, and 1x Ethernet port",
      id: 9,
    },
    {
      heading: "Model",
      para: "Borem ipsum dolor sit amet, consectetur adipiscing",
      id: 10,
    },
    {
      heading: "OPTICAL DRIVE",
      para: "None",
      id: 11,
    },
    {
      heading: "External",
      para: "Support for external USB 3.2 hard drives",
      id: 12,
    },
  ];
  return (
    <>
      <div>
        <Text fw={"bold"} fz="24px" mb={"20px"}>
          Under the hood
        </Text>

        <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
          {listArr.map((item) => {
            return (
              <Grid.Col key={item.id} span={6}>
                <Text
                  fw={"bold"}
                  transform="uppercase"
                  className={classes.headingFont}
                >
                  {item.heading}
                </Text>
                <Text color={"#979797"} className={classes.paraFont}>
                  {item.para}
                </Text>
              </Grid.Col>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default UnderTheHood;
