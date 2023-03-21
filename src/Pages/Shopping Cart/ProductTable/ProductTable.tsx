import {
  createStyles,
  Table,
  Text,
  ScrollArea,
  rem,
  Box,
  Button,
} from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import crossImg from "../../../Assets/icons/remove-circle.png";
import image from "../../../Assets/shopping cart/tableDetailImg1.png";
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
  txtBox: {},
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
  const { classes } = useStyles();
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });
  const rows = data.map((row) => {
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
        </td>

        <td>
          <DropDownBtn />
        </td>
        <td>
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

        <td>
          <Text>12 Mar, 2023</Text>
        </td>

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
