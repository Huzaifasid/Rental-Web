import { Modal, Button, Text } from "@mantine/core";
import loginIcon from "../../../Assets/loginIcon.png";

import List from "./List";
const ReadyToGo = (props: any) => {
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
          <Text fw={"800"} fz="28px" mt="20px">
            You’re ready to go!
          </Text>
          <Text fz="15px" mt="20px" color={"#A0A0A7"}>
            Welcome to Rental App-Universe.
          </Text>

          <div>
            <List />
          </div>

          <Button
            style={{
              backgroundColor: "#834BFF",
            }}
            radius="md"
            mt={"80px"}
            // onClick={() => {
            //   setloader(true);
            // }}
          >
            Got it!
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ReadyToGo;
