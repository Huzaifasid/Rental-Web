import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  ActionIcon,
  createStyles,
} from "@mantine/core";
import { useNavigate } from "react-router";

const useStyles = createStyles((theme) => ({
  card: {
    cursor: "pointer",
    width: "340px",

    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    "@media (max-width: 425px)": {
      width: "300px",
    },
    "@media (max-width: 375px)": {
      width: "280px",
    },
    "@media (max-width: 320px)": {
      width: "260px",
    },
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
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: "#D9DCDF",
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
}

export function ProductCard({ image, title, description }: BadgeCardProps) {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  return (
    <Card
      withBorder
      radius="md"
      p="md"
      mt={"60px"}
      className={classes.card}
      onClick={() => navigate("/product-detail")}
    >
      <Group position="right">
        <ActionIcon mb={"20px"}>
          <IconHeart size="1.8rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
      <Card.Section>
        <Image
          fit="contain"
          src={image}
          alt={title}
          height={180}
          width={300}
          m={"auto"}
        />
      </Card.Section>
      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
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
      </Card.Section>
    </Card>
  );
}
