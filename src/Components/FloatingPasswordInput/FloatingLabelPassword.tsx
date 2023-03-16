import { useState } from "react";
import {
  TextInput,
  createStyles,
  rem,
  Text,
  PasswordInput,
  Progress,
  Popover,
  Box,
} from "@mantine/core";

import { IconX, IconCheck } from "@tabler/icons-react";

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

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text
      color={meets ? "teal" : "red"}
      sx={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size="0.9rem" /> : <IconX size="0.9rem" />}{" "}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export function FloatingLabelPassword(props: any) {
  let { setColor, label } = props;
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  let orange = value.length > 0 && value.length <= 6;
  let green = value.length > 6;
  if (value.length >= 4) {
    setColor("#834BFF");
  } else {
    setColor("rgba(131, 75, 255, 0.4)");
  }
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
  });
  const [popoverOpened, setPopoverOpened] = useState(false);
  //   const [value, setValue] = useState("");
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  return (
    <>
      <Box>
        <Popover
          opened={popoverOpened}
          position="bottom"
          width="target"
          transitionProps={{ transition: "pop" }}
        >
          <Popover.Target>
            <div
              onFocusCapture={() => setPopoverOpened(true)}
              onBlurCapture={() => setPopoverOpened(false)}
            >
              <PasswordInput
                classNames={classes}
                label={
                  <>
                    <Text transform="uppercase" fz={"13px"} color={"#A0A0A7"}>
                      YOUR PASSWORD
                    </Text>
                  </>
                }
                value={value}
                variant="unstyled"
                style={{
                  borderBottom: "1px solid #A0A0A7",
                }}
                mt="50px"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(event) => setValue(event.currentTarget.value)}
              />
            </div>
          </Popover.Target>
          <Box
            mt={"50px"}
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                background: orange ? "#FF6058" : green ? "#3EAF3F" : "#E6E6E9",
                borderRadius: "20px",
              }}
            ></div>
            <div
              style={{
                width: "16px",
                height: "16px",
                background: green ? "#3EAF3F" : "#E6E6E9",
                borderRadius: "20px",
              }}
            ></div>
            <div
              style={{
                width: "16px",
                height: "16px",
                background: green ? "#3EAF3F" : "#E6E6E9",
                borderRadius: "20px",
              }}
            ></div>
            {orange && (
              <Text fz={"14px"} color={"#FF6058"}>
                To weak
              </Text>
            )}
            {green && (
              <Text fz={"14px"} color={"#3EAF3F"}>
                Strong
              </Text>
            )}
          </Box>
          {orange && (
            <Text fz={"12px"} color={"#A0A0A7"} mt="10px">
              Make sure your password is at least 8 characters long, has special
              characters and numbers, and doesn’t contain personal information
              (like your birth date or name).
            </Text>
          )}
          {green && (
            <Text fz={"12px"} color={"#A0A0A7"} mt="10px">
              Look’s good!
            </Text>
          )}
          {/* <Popover.Dropdown>
            <Progress color={color} value={strength} size={5} mb="xs" />
            <PasswordRequirement
              label="Includes at least 6 characters"
              meets={value.length > 5}
            />
            {checks}
          </Popover.Dropdown> */}
        </Popover>
      </Box>
    </>
  );
}
