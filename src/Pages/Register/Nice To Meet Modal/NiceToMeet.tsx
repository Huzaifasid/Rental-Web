import { Modal, Button, Text } from "@mantine/core";
import { useState } from "react";
import { FloatingLabelInput } from "../../../Components/FloatingLabelInput/FloatingLabelInput";
import loginIcon from "../../../Assets/icons/loginIcon.png";
import Information from "../../../Assets/icons/information-circle.png";
import DateOfBirth from "../Date Of Birth Modal/DateOfBirth";

const NiceToMeet = (props: any) => {
  const [color, setColor] = useState("");
  const [showNext, setShowNext] = useState(false);
  return (
    <>
      <DateOfBirth show={showNext} close={() => setShowNext(false)} />
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
            Nice to meet you
          </Text>
          <Text fz="15px" mt="20px" color={"#A0A0A7"}>
            What’s your name?
          </Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FloatingLabelInput setColor={setColor} label="FIRST NAME" />
            <FloatingLabelInput setColor={setColor} label="LAST NAME" />
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              padding: "12px 10px",
              //   justifyContent: "space-between",
              backgroundColor: "#FFF1D1",
              borderRadius: "8px",
            }}
          >
            <img width={"20px"} height="20px" src={Information} alt="" />
            <Text fw={"400"} fz="13px" w={"85%"} ml="10px">
              Please let us know your full name exactly as written on your ID.
            </Text>
          </div>

          <Button
            // color={color === "" ? "" : color}
            style={{
              backgroundColor: color === "" ? "rgba(131, 75, 255, 0.4)" : color,
            }}
            radius="md"
            mt={"100px"}
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

export default NiceToMeet;
