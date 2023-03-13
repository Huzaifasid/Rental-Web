import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
  txt: {
    color: "#979797",
  },
  span: {
    fontSize: "1.2rem",
    color: "black",
    fontWeight: "bold",
  },
  section: {
    // borderBottom: `${rem(1)} solid ${
    //   theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    // }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  country: string;
  description: string;
  badges: {
    emoji: string;
    label: string;
  }[];
}

export function ProductCard({
  image,
  title,
  description,
  country,
  badges,
}: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === "dark" ? "dark" : "gray"}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" mt={"60px"} className={classes.card}>
      <Group position="right">
        {/* <Button radius="md" style={{ flex: 1, display: "none" }}></Button> */}
        <ActionIcon mb={"20px"}>
          <IconHeart size="1.8rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
      <Card.Section>
        <Image src={image} alt={title} height={180} width={300} m={"auto"} />
      </Card.Section>
      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          {/* <Badge size="sm">{country}</Badge> */}
        </Group>
        <Text fz="sm" mt="xs" className={classes.txt}>
          {description}
        </Text>
      </Card.Section>
      <Card.Section className={classes.section}>
        <Text fz="sm" mt="xs" className={classes.txt}>
          from
          <span className={classes.span}> $59.90</span>
          /month
        </Text>
        {/* <Group position="apart"></Group> */}
      </Card.Section>

      {/* <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section> */}
    </Card>
  );
}
