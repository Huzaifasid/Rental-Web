import {
  Modal,
  Button,
  Text,
  PasswordInput,
  TextInput,
  Divider,
} from "@mantine/core";
import loginIcon from "../../Assets/icons/loginIcon.png";
const LoginModal = (props: any) => {
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
            Log in to check out
          </Text>
          <TextInput
            style={{
              borderBottom: "1px solid grey",
              paddingLeft: "10px",
            }}
            mt="40px"
            placeholder="YOUR EMAIL"
            variant="unstyled"
          />

          <PasswordInput
            style={{ borderBottom: "1px solid grey" }}
            mt="40px"
            placeholder="YOUR PASSWORD"
            variant="unstyled"
          />
          <Text
            style={{
              color: "#A0A0A7",
              marginTop: "20px",
              fontSize: "14px",
              textDecoration: "underline",
            }}
          >
            Forgot your password?
          </Text>

          <Button color="violet" radius="md" mt={"70px"}>
            Log in
          </Button>
          <Divider
            fw={"bold"}
            color="#E0E0E1"
            my="xs"
            size="md"
            label={
              <>
                <Text color={"#6B6B6B"}>NEW HERE?</Text>
              </>
            }
            labelPosition="center"
          />
          <Button variant="default" color="gray" radius="md">
            Register
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
