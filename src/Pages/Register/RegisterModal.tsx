import {
  Modal,
  Button,
  Group,
  Text,
  PasswordInput,
  TextInput,
  Divider,
} from "@mantine/core";
import { useState } from "react";
import loginIcon from "../../Assets/loginIcon.png";
import { FloatingLabelInput } from "../../Components/FloatingLabelInput/FloatingLabelInput";
const RegisterModal = (props: any) => {
  const [color, setColor] = useState("");
  return (
    <>
      <Modal
        opened={props.show}
        title="_"
        onClose={props.close}
        scrollAreaComponent={Modal.NativeScrollArea}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "50px",
              padding: "5px",
              backgroundColor: "#F1F1F1",
              borderRadius: "90px",
              textAlign: "center",
            }}
          >
            <img width={"40px"} src={loginIcon} alt="" />
          </div>
          <Text fw={"bold"} fz="20px" mt="20px">
            Hey there
          </Text>
          <Text fz="15px" mt="20px" color={"#A0A0A7"}>
            Let's set up your Rental App account so you can finish checking out.
          </Text>
          <div>
            <FloatingLabelInput setColor={setColor} />
          </div>
          {/* <TextInput
            style={{
              borderBottom: "1px solid grey",
              paddingLeft: "10px",
            }}
            mt="40px"
            placeholder="YOUR EMAIL"
            variant="unstyled"
          /> */}
          <Text fz="14px" mt="20px" color={"#A0A0A7"}>
            By clicking on "Create an account" you agree to our Privacy Policy
            and Terms and Conditions.
          </Text>

          <Button
            // color={color === "" ? "" : color}
            style={{
              backgroundColor: color === "" ? "rgba(131, 75, 255, 0.4)" : color,
            }}
            radius="md"
            mt={"70px"}
          >
            Create an account
          </Button>
          <Text
            style={{
              color: "#A0A0A7",
              marginTop: "20px",
              fontSize: "14px",
            }}
          >
            Already have an account?
            <span style={{ textDecoration: "underline" }}>Log in</span>
          </Text>
        </div>
      </Modal>
    </>
  );
};

export default RegisterModal;