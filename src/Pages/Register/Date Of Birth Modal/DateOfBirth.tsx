import { Modal, Button, Text } from "@mantine/core";
import { useState } from "react";
import { FloatingLabelInput } from "../../../Components/FloatingLabelInput/FloatingLabelInput";
import loginIcon from "../../../Assets/loginIcon.png";

import SecureAccount from "../Secure Account/SecureAccount";

const DateOfBirth = (props: any) => {
  const [color, setColor] = useState("");
  const [showNext, setShowNext] = useState(false);
  return (
    <>
      <SecureAccount show={showNext} close={() => setShowNext(false)} />
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
            Hi Anika!
          </Text>
          <Text fz="15px" mt="20px" color={"#A0A0A7"}>
            When’s your birthday?
          </Text>

          <FloatingLabelInput
            setColor={setColor}
            label="DATE OF BIRTH"
            placeholder="MM/DD/YYYY"
          />

          <Button
            // color={color === "" ? "" : color}
            style={{
              backgroundColor: color === "" ? "rgba(131, 75, 255, 0.4)" : color,
            }}
            radius="md"
            mt={"185px"}
            onClick={() => {
              setShowNext(true);
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default DateOfBirth;
