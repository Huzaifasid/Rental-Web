import { createStyles, Card, Image, Text, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    marginTop: "30px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
  span: {
    color: "black",
    fontWeight: "bold",
  },
}));

interface ArticleCardVerticalProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

export function TopRented({
  image,
  category,
  title,
}: ArticleCardVerticalProps) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={image} m={"20px"} height={100} width={100} />
        <div className={classes.body}>
          <Text transform="uppercase" color="black" weight={700} size="xs">
            {category}
          </Text>
          <Text className={classes.title} color="#979797" mt="xs" mb="md">
            {title}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Text size="xs" color="#979797">
                From
                <span className={classes.span}>$19.90</span>
                /Month
              </Text>
            </Group>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
