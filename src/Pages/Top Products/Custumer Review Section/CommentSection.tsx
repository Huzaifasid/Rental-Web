import {
  createStyles,
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  Flex,
} from "@mantine/core";

import { IconQuote, IconThumbUp } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  comment: {
    width: "450px",

    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    backgroundColor: "#292938",
  },

  body: {
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    color: "#D9DCDF",

    "& > p:last-child": {
      marginBottom: 0,
    },
  },
}));

interface CommentHtmlProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
}

export function CommentSection({ postedAt, body, author }: CommentHtmlProps) {
  const { classes } = useStyles();
  return (
    <Paper radius="md" className={classes.comment}>
      <Group position="apart">
        <div>
          <IconQuote color="#FFFFFF" />
        </div>
        <div>
          <Text fz="sm" color={"#D9DCDF"}>
            March 1,2021
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </TypographyStylesProvider>

      <Group
        position="apart"
        style={{
          borderTop: "1px solid rgba(160, 160, 167, 0.35)",
        }}
      >
        <Flex
          mih={50}
          gap="lg"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Avatar src={author.image} alt={author.name} radius="xl" />
          <div>
            <Text fz="sm" color={"white"}>
              {author.name}
            </Text>
          </div>
        </Flex>
        <Flex
          mih={50}
          gap="lg"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <IconThumbUp color="white" />
          <Text fz="xs" c="white">
            Helpful
          </Text>
        </Flex>
      </Group>
    </Paper>
  );
}
