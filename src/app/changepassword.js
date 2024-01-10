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
import { useState,useRef } from "react";
import React from "react";
import FIREBASE from "../config";

const ChangePassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const inputRef = useRef(null);

  const changePassword = () => {
    const user = FIREBASE.auth().currentUser;

    const credential = FIREBASE.auth.EmailAuthProvider.credential(
      user.email,
      oldPassword
    );

    user.reauthenticateWithCredential(credential)
      .then(() => {
        user.updatePassword(newPassword)
          .then(() => {
            console.log('Password updated successfully');
            setShowModal(true);
          })
          .catch((error) => {
            console.error('Error updating password:', error.message);
          });
      })
      .catch((error) => {
        console.error('Error reauthenticating user:', error.message);
      });
  };

  return (
    <>
      <Header title={"Profile"} />
      <FormControl>
        <VStack space="xl">
          <Heading color="$warning900" lineHeight="$md">
            Change Password
          </Heading>
          <VStack space="xs">
            <Text color="$warning800" lineHeight="$xs">
              Masukkan Password lama
            </Text>
            <Input>
              <InputField
                type="password"
                value={oldPassword}
                onChangeText={(text) => setOldPassword(text)}
              />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text color="$warning800" lineHeight="$xs">
              Masukkan Password baru
            </Text>
            <Input>
              <InputField
                type="password"
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
                ref={inputRef}
              />
            </Input>
          </VStack>
          <Button
            onPress={() => changePassword()}
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
              setShowModal(false);
            }}
            finalFocusRef={inputRef}
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
                  size="sm"
                  action="positive"
                  borderWidth="$0"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <ButtonText>OK</ButtonText>
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