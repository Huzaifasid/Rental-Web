import {
  createStyles,
  Title,
  Accordion,
  ThemeIcon,
  MantineProvider,
  getStylesRef,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    color: theme.black,
  },

  title: {
    fontSize: "24px",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderBottom: 0,
    borderRadius: theme.radius.md,

    overflow: "hidden",
  },

  control: {
    fontSize: theme.fontSizes.lg,
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    color: theme.black,

    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  content: {
    paddingLeft: theme.spacing.xl,
    lineHeight: 1.6,
    color: theme.black,
  },

  icon: {
    ref: getStylesRef("icon"),
    marginLeft: theme.spacing.md,
  },

  itemOpened: {
    [`& .${getStylesRef("icon")}`]: {
      transform: "rotate(45deg)",
    },
  },

  button: {
    display: "block",
    marginTop: theme.spacing.md,

    [theme.fn.smallerThan("sm")]: {
      display: "block",
      width: "100%",
    },
  },
}));

const placeholder =
  "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.";

export function FrequentlyAskQuestion() {
  const { classes } = useStyles();
  return (
    <MantineProvider inherit theme={{ colorScheme: "light" }}>
      <div className={classes.wrapper}>
        <Title className={classes.title}>Frequently Asked Questions</Title>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={50}
          disableChevronRotation
          chevron={
            <ThemeIcon unstyled size={32}>
              <IconPlus size="1.05rem" stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>
              What condition are the products in?
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>
              When does the rent begin and end?
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>
              What if my device gets damaged during the rental period?
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>
              Do I have to worry about signs of use?
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>
              Can I also buy a product I'm renting?
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </MantineProvider>
  );
}
