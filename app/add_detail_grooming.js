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
  Center,
  ButtonIcon,
  AddIcon,
  
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { useState } from "react";
import React from "react";


const add_detail_grooming = () => {
  const [showModal, setShowModal] = useState(false)
   console.log(showModal)
   const inputRef = React.useRef(null)
  return (
    <>
    <Header title={"Grooming"} />
    <FormControl
      p="$4"
      borderWidth="$1"
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
        <Center>
        <Heading color="$warning900" lineHeight="$md" alignContent="center">
          Layanan Pet Care
        </Heading>
        </Center>
        <VStack space="xs">
          <Text color="$warning800" lineHeight="$xs">
            Paket Grooming
          </Text>
          <Input>
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text color="$warning800" lineHeight="$xs">
            Harga
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
        <ButtonIcon as={AddIcon}></ButtonIcon>
        <ButtonText>Tambah</ButtonText>
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
            <Heading size="lg">Tambah Layanan</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Layanan akan ditambah
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

export default add_detail_grooming;