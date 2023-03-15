import { useState } from "react";
import { TextInput, createStyles, rem, Text } from "@mantine/core";

const useStyles = createStyles(
  (theme, { floating }: { floating: boolean }) => ({
    root: {
      position: "relative",
    },

    label: {
      position: "absolute",
      zIndex: 2,
      top: rem(7),
      left: theme.spacing.sm,
      pointerEvents: "none",
      color: floating
        ? theme.colorScheme === "dark"
          ? theme.white
          : theme.black
        : theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition:
        "transform 150ms ease, color 150ms ease, font-size 150ms ease",
      transform: floating
        ? `translate(-${theme.spacing.sm}, ${rem(-28)})`
        : "none",
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating ? 500 : 400,
    },

    required: {
      transition: "opacity 150ms ease",
      opacity: floating ? 1 : 0,
    },

    input: {
      "&::placeholder": {
        transition: "color 150ms ease",
        color: !floating ? "transparent" : undefined,
      },
    },
  })
);

export function FloatingLabelInput(props: any) {
  let { setColor } = props;
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  if (value.length >= 4) {
    setColor("#834BFF");
  } else {
    setColor("rgba(131, 75, 255, 0.4)");
  }
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
  });

  return (
    <TextInput
      label={
        <>
          <Text transform="uppercase" color={"#A0A0A7"}>
            Email Address
          </Text>
        </>
      }
      style={{
        borderBottom: "1px solid #A0A0A7",
        // paddingLeft: "10px",
      }}
      classNames={classes}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="50px"
      variant="unstyled"
      autoComplete="nope"
    />
  );
}