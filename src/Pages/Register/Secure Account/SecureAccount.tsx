import {
  Modal,
  Button,
  Group,
  Text,
  PasswordInput,
  TextInput,
  Divider,
  Loader,
} from "@mantine/core";
import { useState } from "react";
import { FloatingLabelInput } from "../../../Components/FloatingLabelInput/FloatingLabelInput";
import loginIcon from "../../../Assets/loginIcon.png";
import Information from "../../../Assets/information-circle.png";
import { FloatingLabelPassword } from "../../../Components/FloatingPasswordInput/FloatingLabelPassword";
import ReadyToGo from "../Ready To Go Modal/ReadyToGo";
// import { FloatingLabelInput } from "../../Components/FloatingLabelInput/FloatingLabelInput";
const SecureAccount = (props: any) => {
  const [color, setColor] = useState("");
  const [loader, setloader] = useState(false);
  const [showNext, setShowNext] = useState(false);
  return (
    <>
      <ReadyToGo show={showNext} close={() => setShowNext(false)} />
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
          <Text fw={"800"} fz="28px" mt="20px">
            Secure your account
          </Text>
          <Text fz="15px" mt="20px" color={"#A0A0A7"}>
            Please choose a password that contains special characters and
            numbers, and is at least eight characters long.
          </Text>

          {/* <FloatingLabelInput
            setColor={setColor}
            label="DATE OF BIRTH"
            placeholder="MM/DD/YYYY"
          /> */}

          <FloatingLabelPassword setColor={setColor} />

          <Button
            // color={color === "" ? "" : color}
            style={{
              backgroundColor: color === "" ? "rgba(131, 75, 255, 0.4)" : color,
            }}
            radius="md"
            mt={"100px"}
            onClick={() => {
              setloader(true);
              setTimeout(() => {
                setShowNext(true);
              }, 1000);
            }}
          >
            {loader ? <Loader color="white" size="sm" /> : "Confirm"}
            {/* Confirm */}
            {/* <Loader color="white" size="sm" />; */}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default SecureAccount;