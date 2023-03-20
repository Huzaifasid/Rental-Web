import { Modal, Button, Text } from "@mantine/core";
import { useState } from "react";
import loginIcon from "../../Assets/loginIcon.png";
import { FloatingLabelInput } from "../../Components/FloatingLabelInput/FloatingLabelInput";
import NiceToMeet from "./Nice To Meet Modal/NiceToMeet";
const RegisterModal = (props: any) => {
  const [color, setColor] = useState("");
  const [showNext, setShowNext] = useState(false);

  return (
    <>
      <NiceToMeet show={showNext} close={() => setShowNext(false)} />
      <Modal
        opened={!showNext ? props.show : false}
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
            <FloatingLabelInput setColor={setColor} label="Email Address" />
          </div>

          <Text fz="14px" mt="20px" color={"#A0A0A7"}>
            By clicking on "Create an account" you agree to our Privacy Policy
            and Terms and Conditions.
          </Text>

          <Button
            style={{
              backgroundColor: color === "" ? "rgba(131, 75, 255, 0.4)" : color,
            }}
            radius="md"
            mt={"70px"}
            onClick={() => {
              setShowNext(true);
            }}
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
