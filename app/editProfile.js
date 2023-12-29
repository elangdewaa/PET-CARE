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
  Image,
 form,
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { TextInput } from 'react-native';
import { useState } from "react";
import React from "react";


const EditProfile = () => {
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
          Edit Profile
        </Heading>
        <Image
          alt=""
          resizeMode="contain"
          style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginBottom: 0,
          }}
          source={require('../assets/register.png')}></Image>
        <VStack space="xs">
          <Text color="$warning800" lineHeight="$xs">
            Nama Pemilik
          </Text>
          <TextInput
            placeholder="Isi username Anda"
            placeholderTextColor="#6b7280"
              style={{
              height: 44,
              backgroundColor: '#ffffff',
              paddingHorizontal: 16,
              borderRadius: 12,
              fontSize: 15,
              fontWeight: '500',
              
              }}
          />
        </VStack>
        <VStack space="xs">
          <Text color="$warning800" lineHeight="$xs">
            Nama Hewan
          </Text>
          <TextInput
            placeholder="Isi nama hewan Anda"
            placeholderTextColor="#6b7280"
              style={{
              height: 44,
              backgroundColor: '#ffffff',
              paddingHorizontal: 16,
              borderRadius: 12,
              fontSize: 15,
              fontWeight: '500',
              }}
          />
        </VStack>
      <Button onPress={() => setShowModal(true)} ref={ref}
       style={{
         backgroundColor: 'coral',
         padding: 10,
         borderRadius: 5,
       }}
      >
        <ButtonText>Save</ButtonText>
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
            <Heading size="lg">Update Profile</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Profile anda akan diupdate
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
              backgroundColor="$coral"
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

export default EditProfile;