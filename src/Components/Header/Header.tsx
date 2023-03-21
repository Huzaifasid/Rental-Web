import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Button,
  Text,
  Menu,
  Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { IconChevronDown } from "@tabler/icons-react";
import LoginModal from "../../Pages/Login/LoginModal";
import RegisterModal from "../../Pages/Register/RegisterModal";
import { useNavigate } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import cameraLogo from "../../Assets/Category Dropdown Icon/camera.png";
import watchLogo from "../../Assets/Category Dropdown Icon/watch.png";
import mobileLogo from "../../Assets/Category Dropdown Icon/mobile.png";
import projectorLogo from "../../Assets/Category Dropdown Icon/projector.png";
import laptopLogo from "../../Assets/Category Dropdown Icon/laptop.png";
import computerLogo from "../../Assets/Category Dropdown Icon/computer.png";
import navIcon from "../../Assets/icons/navbarIcon.png";
const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    "@media (max-width: 425px)": {
      marginBottom: "430px",
    },
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 23,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "80%",
    padding: "0px 4px",
    flexWrap: "nowrap",
    height: "100%",
    "@media (max-width: 1024px)": {
      maxWidth: "100%",
    },

    "@media (max-width: 425px)": {
      maxWidth: "100%",
    },
    "@media (max-width: 375px)": {
      maxWidth: "100%",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(17)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#A0A0A7",
    textTransform: "uppercase",

    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
    "@media (max-width: 768px)": {
      padding: `${rem(2)} ${rem(2)}`,
      fontSize: "0.7rem",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
  signUpBtn: {
    backgroundColor: "#834BFF;",
    borderRadius: "12px",
  },
  loginBtn: {
    border: "none",
  },
  iconBtn: {
    padding: "0px",
    width: "49px",
    height: "46px",
    backgroundColor: " #FFFFFF",
    border: "2px solid rgba(16, 36, 55, 0.16)",
    borderRadius: "99px",
  },
  linkActive: {
    "&, &:hover": {
      color: "#0C0C1D",
    },
  },
  btnGroup: {
    display: "flex",
    flexWrap: "nowrap",
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);

        navigate(link.link);

        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={150} className={classes.root}>
      <Container className={classes.header} mb={20}>
        <Text
          color="dark"
          fw={"bold"}
          sx={{
            fontSize: "32px",
            "@media (max-width: 768px)": {
              fontSize: "1.1rem",
            },
            "@media (max-width: 425px)": {
              fontSize: "1.5rem",
            },
            "@media (max-width: 375px)": {
              fontSize: "1.1rem",
            },
          }}
        >
          Rental App
        </Text>
        <Group spacing={5} className={classes.links}>
          {/* {items} */}

          <a
            href={"/"}
            className={cx(classes.link, {
              [classes.linkActive]: active === "/",
            })}
            onClick={(event) => {
              event.preventDefault();
              setActive("/");
              navigate("/");
              close();
            }}
          >
            Home
          </a>
          <a
            href={"/howitworks"}
            className={cx(classes.link, {
              [classes.linkActive]: active === "/howitworks",
            })}
            onClick={(event) => {
              event.preventDefault();
              setActive("/howitworks");
              navigate("/howitworks");
              close();
            }}
          >
            How It Works
          </a>
          <Menu>
            <Menu.Target>
              <a
                href={"/categories"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/categories",
                })}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/categories");

                  close();
                }}
              >
                <Center>
                  <span> Categories</span>
                  <IconChevronDown size={rem(12)} stroke={1.5} />
                </Center>
              </a>
            </Menu.Target>
            <Menu.Dropdown
              style={{
                zIndex: "2222",
              }}
            >
              <a
                href={"/categories"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/categories",
                })}
                style={{
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/categories");
                  close();
                }}
              >
                <img src={laptopLogo} alt="computer" />
                <span>Computers</span>
              </a>
              <a
                href={"/categories"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/categories",
                })}
                style={{
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/categories");
                  // navigate("/categories");
                  close();
                }}
              >
                <img src={mobileLogo} alt="computer" />
                <span> Phones & Tablets</span>
              </a>
              <a
                href={"/categories"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/categories",
                })}
                style={{
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/categories");
                  // navigate("/categories");
                  close();
                }}
              >
                <img src={computerLogo} alt="computer" />
                <span> Gaming & VR</span>
              </a>
              <a
                href={"/categories"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/categories",
                })}
                style={{
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/categories");
                  // navigate("/categories");
                  close();
                }}
              >
                <img src={watchLogo} alt="computer" />
                <span> Wearable</span>
              </a>
              <a
                href={"/categories"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/categories",
                })}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/categories");
                  // navigate("/categories");
                  close();
                }}
                style={{
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img src={cameraLogo} alt="computer" />
                <span> Cameras</span>
              </a>
              <a
                href={"/categories"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/categories",
                })}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/categories");
                  // navigate("/categories");
                  close();
                }}
                style={{
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img src={projectorLogo} alt="computer" />
                <span> TV & Projectors </span>
              </a>
            </Menu.Dropdown>
          </Menu>

          <a
            href={"/top-products"}
            className={cx(classes.link, {
              [classes.linkActive]: active === "/top-products",
            })}
            onClick={(event) => {
              event.preventDefault();
              setActive("/top-products");
              navigate("/top-products");
              close();
            }}
          >
            Top Products
          </a>
          <a
            href={"/about-us"}
            className={cx(classes.link, {
              [classes.linkActive]: active === "/about-us",
            })}
            onClick={(event) => {
              event.preventDefault();
              setActive("/about-us");
              navigate("/about-us");
              close();
            }}
          >
            About Us
          </a>
        </Group>
        <Group spacing={5} className={classes.btnGroup}>
          <Button className={classes.iconBtn}>
            <img src={navIcon} alt="icon" />
          </Button>
          <LoginModal show={showLogin} close={() => setShowLogin(false)} />
          <RegisterModal
            show={showRegister}
            close={() => setShowRegister(false)}
          />
          <Button
            variant="default"
            className={classes.loginBtn}
            // onClick={open}
            onClick={() => setShowLogin(true)}
          >
            Log in
          </Button>
          <Button
            className={classes.signUpBtn}
            onClick={() => setShowRegister(true)}
          >
            Sign up
          </Button>
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {/* {items} */}

              <a
                href={"/"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/",
                })}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/");
                  navigate("/");
                  close();
                }}
              >
                Home
              </a>
              <a
                href={"/howitworks"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/howitworks",
                })}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/howitworks");
                  navigate("/howitworks");
                  close();
                }}
              >
                How It Works
              </a>
              <Menu>
                <Menu.Target>
                  <a
                    href={"/categories"}
                    className={cx(classes.link, {
                      [classes.linkActive]: active === "/categories",
                    })}
                    onClick={(event) => {
                      event.preventDefault();
                      setActive("/categories");
                      // navigate("/categories");
                      close();
                    }}
                  >
                    <span> Categories</span>
                    <IconChevronDown size={rem(12)} stroke={1.5} />
                  </a>
                </Menu.Target>
                <Menu.Dropdown
                  style={{
                    zIndex: "2222",
                  }}
                >
                  <a
                    href={"/categories"}
                    className={cx(classes.link, {
                      [classes.linkActive]: active === "/categories",
                    })}
                    style={{
                      textTransform: "capitalize",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      setActive("/categories");
                      close();
                    }}
                  >
                    <img src={laptopLogo} alt="computer" />
                    <span>Computers</span>
                  </a>
                  <a
                    href={"/categories"}
                    className={cx(classes.link, {
                      [classes.linkActive]: active === "/categories",
                    })}
                    style={{
                      textTransform: "capitalize",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      setActive("/categories");
                      // navigate("/categories");
                      close();
                    }}
                  >
                    <img src={mobileLogo} alt="computer" />
                    <span> Phones & Tablets</span>
                  </a>
                  <a
                    href={"/categories"}
                    className={cx(classes.link, {
                      [classes.linkActive]: active === "/categories",
                    })}
                    style={{
                      textTransform: "capitalize",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      setActive("/categories");
                      // navigate("/categories");
                      close();
                    }}
                  >
                    <img src={computerLogo} alt="computer" />
                    <span> Gaming & VR</span>
                  </a>
                  <a
                    href={"/categories"}
                    className={cx(classes.link, {
                      [classes.linkActive]: active === "/categories",
                    })}
                    style={{
                      textTransform: "capitalize",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      setActive("/categories");
                      // navigate("/categories");
                      close();
                    }}
                  >
                    <img src={watchLogo} alt="computer" />
                    <span> Wearable</span>
                  </a>
                  <a
                    href={"/categories"}
                    className={cx(classes.link, {
                      [classes.linkActive]: active === "/categories",
                    })}
                    onClick={(event) => {
                      event.preventDefault();
                      setActive("/categories");
                      // navigate("/categories");
                      close();
                    }}
                    style={{
                      textTransform: "capitalize",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={cameraLogo} alt="computer" />
                    <span> Cameras</span>
                  </a>
                  <a
                    href={"/categories"}
                    className={cx(classes.link, {
                      [classes.linkActive]: active === "/categories",
                    })}
                    onClick={(event) => {
                      event.preventDefault();
                      setActive("/categories");
                      // navigate("/categories");
                      close();
                    }}
                    style={{
                      textTransform: "capitalize",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={projectorLogo} alt="computer" />
                    <span> TV & Projectors </span>
                  </a>
                </Menu.Dropdown>
              </Menu>

              <a
                href={"/top-products"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/top-products",
                })}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/top-products");
                  navigate("/top-products");
                  close();
                }}
              >
                Top Products
              </a>
              <a
                href={"/about-us"}
                className={cx(classes.link, {
                  [classes.linkActive]: active === "/about-us",
                })}
                onClick={(event) => {
                  event.preventDefault();
                  setActive("/about-us");
                  navigate("/about-us");
                  close();
                }}
              >
                About Us
              </a>
            </Paper>
          )}
        </Transition>
      </Container>
      <SearchBar />
    </Header>
  );
}
