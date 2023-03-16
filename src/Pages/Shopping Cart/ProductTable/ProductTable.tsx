import {
  createStyles,
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ScrollArea,
  rem,
  Box,
  Button,
} from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import {
  IconChevronDown,
  IconCircleX,
  IconCircleXFilled,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import crossImg from "../../../Assets/remove-circle.png";
import image from "../../../Assets/tableDetailImg1.png";
import { DropDownBtn } from "../DropDownBtn/DropDownBtn";
const useStyles = createStyles((theme) => ({
  progressBar: {
    "&:not(:first-of-type)": {
      borderLeft: `${rem(3)} solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
      }`,
    },
  },

  productBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  txtBox: {
    // marginLeft: "10px",
  },
}));

interface TableReviewsProps {
  data: {
    title: string;
    author: string;
    year: number;
    reviews: { positive: number; negative: number };
  }[];
}

export function ProductTable({ data }: TableReviewsProps) {
  const { classes, theme } = useStyles();
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });
  const rows = data.map((row) => {
    const totalReviews = row.reviews.negative + row.reviews.positive;
    const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    const negativeReviews = (row.reviews.negative / totalReviews) * 100;

    return (
      <tr key={row.title}>
        <td>
          <Box className={classes.productBox}>
            <div>
              <img src={image} alt="" />
            </div>
            <div className={classes.txtBox}>
              <Text>Xbox Gen 5</Text>
              <Text color={"rgba(16, 36, 55, 0.5)"}>Alexander in London</Text>
            </div>
          </Box>
          {/* <Anchor component="button" fz="sm">
            {row.title}
          </Anchor> */}
        </td>
        {/* <td>{row.year}</td> */}
        <td>
          <DropDownBtn />
        </td>
        <td>
          {/* <Anchor component="button" fz="sm">
            {row.author}
          </Anchor> */}
          <Button
            rightIcon={
              <IconPlus
                onClick={handlers.increment}
                size="1.05rem"
                stroke={1.5}
              />
            }
            leftIcon={
              <IconMinus
                onClick={handlers.decrement}
                size="1.05rem"
                stroke={1.5}
              />
            }
            variant="default"
            color="gray"
            radius="xl"
          >
            {count}
          </Button>
        </td>
        {/* <td>{Intl.NumberFormat().format(totalReviews)}</td> */}
        <td>
          <Text>12 Mar, 2023</Text>
        </td>
        {/* <td>
          <Group position="apart">
            <Text fz="xs" c="teal" weight={700}>
              {positiveReviews.toFixed(0)}%
            </Text>
            <Text fz="xs" c="red" weight={700}>
              {negativeReviews.toFixed(0)}%
            </Text>
          </Group>
          <Progress
            classNames={{ bar: classes.progressBar }}
            sections={[
              {
                value: positiveReviews,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.teal[9]
                    : theme.colors.teal[6],
              },
              {
                value: negativeReviews,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.red[9]
                    : theme.colors.red[6],
              },
            ]}
          />
        </td> */}
        <td>
          <Text> $30.31</Text>
        </td>
        <td>
          <img src={crossImg} alt="" />
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>Product</th>
            <th>Renting For</th>
            <th>Quantity</th>
            <th>Available by</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
