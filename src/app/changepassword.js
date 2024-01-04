import {
  Heading,
  Text,
  Button,
  ButtonText,
  FormControl,
  VStack,
  Input,
  InputField,
  Modal, 
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalBody,
  ModalFooter,
  inputRef,
  ref,
  View,
  
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { useState } from "react";
import React from "react";
import { Link, router } from "expo-router";
import firebase from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChangePassword = () => {
  const [showModal, setShowModal] = useState(false)
   console.log(showModal)
   const inputRef = React.useRef(null)
  return (
    <>
    <Header title={"Profile"} />
    <FormControl
      p="$4"
      borderWidth="$1"
      borderRadius="$lg"
      borderColor="$borderLight300"
      backgroundColor="floralwhite"
      height="$full"
      sx={{
        _dark: {
          borderWidth: "$1",
          borderRadius: "$lg",
          borderColor: "$borderDark800",
        },
      }}
    >
      <VStack space="xl">
        <Heading color="$warning900" lineHeight="$md">
          Change Password
        </Heading>
        <VStack space="xs">
          <Text color="$warning800" lineHeight="$xs">
            Masukkan Password lama
          </Text>
          <Input>
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text color="$warning800" lineHeight="$xs">
            Masukkan Password baru
          </Text>
          <Input>
            <InputField type="text" ref={inputRef} />
          </Input>
        </VStack>
        <Button onPress={() => setShowModal(true)} ref={ref}
     style={{
       backgroundColor: 'coral',
       padding: 10,
       borderRadius: 5,
     }}
    >
      <ButtonText>Ubah Password</ButtonText>
    </Button>
        <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Update Password</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Password anda berhasil diubah
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Save</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </VStack>
    </FormControl>
    </>
  );
};

export default ChangePassword;